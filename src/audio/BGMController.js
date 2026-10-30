import { EventEmitter } from '../utils/EventEmitter.js';

export class BGMController extends EventEmitter {
  constructor(videoId = 'Q49pnA4jsp8') {
    super();

    this.videoId = videoId;
    this.player = null;
    this.isReady = false;
    this.isPlaying = false;
    this.hasUnlocked = false;

    this.init();
  }

  init() {
    // 1. Create hidden iframe container (sized and positioned to satisfy browser background audio policy)
    this.container = document.createElement('div');
    this.container.id = 'yt-bgm-container';
    this.container.style.cssText = 'position:fixed; width:200px; height:200px; right:0; bottom:0; opacity:0.001; pointer-events:none; z-index:-999; overflow:hidden;';

    const playerDiv = document.createElement('div');
    playerDiv.id = 'yt-bgm-iframe-target';
    this.container.appendChild(playerDiv);
    document.body.appendChild(this.container);

    this.synthCtx = null;
    this.isSynthPlaying = false;
    this.synthTimer = null;
    this.synthStep = 0;

    // 2. Setup user gesture unlock handler for mobile/desktop browser media policy
    this.setupGestureUnlock();

    // 3. Load YouTube IFrame API
    this.loadYouTubeAPI();
  }

  loadYouTubeAPI() {
    if (window.YT && window.YT.Player) {
      this.initPlayer();
      return;
    }

    // Check if script tag already injected
    let script = document.querySelector('script[src*="youtube.com/iframe_api"]');
    if (!script) {
      script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.async = true;
      document.head.appendChild(script);
    }

    const previousOnReady = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (typeof previousOnReady === 'function') previousOnReady();
      this.initPlayer();
    };
  }

  initPlayer() {
    if (this.player || !window.YT || !window.YT.Player) return;

    try {
      this.player = new window.YT.Player('yt-bgm-iframe-target', {
        height: '100',
        width: '100',
        videoId: this.videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          enablejsapi: 1,
          fs: 0,
          iv_load_policy: 3,
          loop: 1,
          playlist: this.videoId, // Essential for YouTube looping
          modestbranding: 1,
          playsinline: 1,
          rel: 0
        },
        events: {
          onReady: (event) => {
            this.isReady = true;
            this.player.setVolume(55);
            this.tryAutoPlay();
          },
          onStateChange: (event) => {
            // YT.PlayerState.ENDED === 0
            if (event.data === 0) {
              if (this.player && typeof this.player.seekTo === 'function') {
                this.player.seekTo(0);
                this.player.playVideo();
              }
            } else if (event.data === 1) { // PLAYING
              this.isPlaying = true;
              this.stopSynthAmbient();
              this.trigger('stateChange', [true]);
            } else if (event.data === 2) { // PAUSED
              this.isPlaying = false;
              this.trigger('stateChange', [false]);
            }
          },
          onError: (e) => {
            console.warn('[BGMController] YouTube Player error, using ambient synth fallback:', e);
            if (this.isPlaying) {
              this.startSynthAmbient();
            }
          }
        }
      });
    } catch (err) {
      console.warn('[BGMController] Failed to initialize YT Player, using fallback:', err);
    }
  }

  setupGestureUnlock() {
    const unlock = () => {
      if (this.hasUnlocked) return;
      this.hasUnlocked = true;

      if (this.player && typeof this.player.playVideo === 'function' && !this.isPlaying) {
        this.player.playVideo();
      } else if (!this.isPlaying && this.isSynthPlaying) {
        this.initWebAudioFallback();
      }

      window.removeEventListener('click', unlock, true);
      window.removeEventListener('touchstart', unlock, true);
      window.removeEventListener('pointerdown', unlock, true);
    };

    window.addEventListener('click', unlock, true);
    window.addEventListener('touchstart', unlock, true);
    window.addEventListener('pointerdown', unlock, true);
  }

  tryAutoPlay() {
    if (!this.player || typeof this.player.playVideo !== 'function') return;

    try {
      this.player.playVideo();
    } catch (e) {
      console.log('[BGMController] Autoplay pending user gesture');
    }
  }

  initWebAudioFallback() {
    if (this.synthCtx) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.synthCtx = new AudioCtx();
    } catch (e) {
      console.warn('[BGMController] Web Audio fallback unavailable:', e);
    }
  }

  startSynthAmbient() {
    if (this.isSynthPlaying) return;
    this.initWebAudioFallback();
    if (!this.synthCtx) return;
    if (this.synthCtx.state === 'suspended') {
      this.synthCtx.resume().catch(() => {});
    }

    this.isSynthPlaying = true;
    this.synthStep = 0;

    // Soothing Japanese garden pentatonic scale (Hirajoshi scale notes in Hz)
    const notes = [220.00, 246.94, 261.63, 329.63, 349.23, 440.00, 493.88, 523.25];
    const pattern = [0, 2, 3, 4, 3, 2, 5, 4, 2, 0, 1, 3, 4, 6, 5, 3];

    const playNote = () => {
      if (!this.isSynthPlaying || !this.synthCtx) return;

      const freq = notes[pattern[this.synthStep % pattern.length]];
      this.synthStep++;

      const now = this.synthCtx.currentTime;
      const osc = this.synthCtx.createOscillator();
      const gain = this.synthCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.045, now + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.4);

      osc.connect(gain);
      gain.connect(this.synthCtx.destination);

      osc.start(now);
      osc.stop(now + 1.5);

      this.synthTimer = setTimeout(playNote, 420);
    };

    playNote();
  }

  stopSynthAmbient() {
    this.isSynthPlaying = false;
    if (this.synthTimer) {
      clearTimeout(this.synthTimer);
      this.synthTimer = null;
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  play() {
    this.isPlaying = true;
    let ytPlayed = false;

    if (this.player && typeof this.player.playVideo === 'function' && this.isReady) {
      try {
        this.player.playVideo();
        ytPlayed = true;
      } catch (e) {
        console.warn('[BGMController] YT play failed, using fallback:', e);
      }
    }

    if (!ytPlayed) {
      this.startSynthAmbient();
    }
    this.trigger('stateChange', [true]);
  }

  pause() {
    this.isPlaying = false;
    if (this.player && typeof this.player.pauseVideo === 'function') {
      try {
        this.player.pauseVideo();
      } catch (e) {}
    }
    this.stopSynthAmbient();
    this.trigger('stateChange', [false]);
  }

  dispose() {
    this.stopSynthAmbient();
    if (this.synthCtx && this.synthCtx.state !== 'closed') {
      this.synthCtx.close().catch(() => {});
      this.synthCtx = null;
    }
    if (this.player && typeof this.player.destroy === 'function') {
      try {
        this.player.destroy();
      } catch (e) {}
    }
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
    super.dispose();
  }
}
