import gsap from 'gsap';
import { EventEmitter } from '../utils/EventEmitter.js';

export class CandleBlowModal extends EventEmitter {
  constructor(sceneManager) {
    super();

    this.sceneManager = sceneManager;
    this.isOpen = false;
    this.isListening = false;
    this.audioContext = null;
    this.analyser = null;
    this.micStream = null;
    this.animFrameId = null;

    // Breath calibration & detection state
    this.calibrationFrames = 0;
    this.ambientBaseline = 0.05;
    this.blowProgress = 0.0;
    this.isExtinguished = false;
    this.previousBGMVolume = null;

    // Sensitivity presets: 'low' is default (robust against voice & background noise)
    this.sensitivity = 'low';

    this.init();
  }

  init() {
    this.overlay = document.createElement('div');
    this.overlay.className = 'candle-modal-overlay';
    this.overlay.id = 'candle-modal-overlay';

    this.overlay.innerHTML = `
      <div class="candle-blow-card" id="candle-blow-card" role="dialog" aria-modal="true" aria-labelledby="candle-title">
        <!-- Close Button -->
        <button class="candle-close-btn" id="candle-close-btn" aria-label="Tutup Dialog">&times;</button>

        <!-- Header Icon & Status -->
        <div class="candle-card-icon-wrap">
          <span class="candle-card-flame" id="candle-card-flame"></span>
          <span class="candle-sparkle-burst" id="candle-sparkle-burst"></span>
        </div>

        <h2 class="candle-title" id="candle-title">Tiup Lilin Ulang Tahun</h2>
        <p class="candle-recipient">Nur Syarifa Syuhada</p>

        <p class="candle-instruction" id="candle-instruction">
          Dekatkan mulutmu ke mikrofon, lalu <strong>tiup dengan hembusan nafas kuat</strong> sampai meter penuh!
        </p>

        <!-- Live Breath / Mic Level Meter -->
        <div class="candle-meter-wrap" id="candle-meter-wrap">
          <div class="candle-meter-header">
            <span class="candle-meter-label" id="candle-meter-label">Menyiapkan mikrofon...</span>
            <span class="candle-meter-val" id="candle-meter-val">0%</span>
          </div>
          <div class="candle-meter-track">
            <div class="candle-meter-bar" id="candle-meter-bar"></div>
          </div>
        </div>

        <!-- Mic Sensitivity Selector -->
        <div class="candle-sens-wrap" id="candle-sens-wrap">
          <span class="candle-sens-label">Sensitivitas:</span>
          <div class="candle-sens-btns">
            <button type="button" class="candle-sens-pill active" data-sens="low" title="Paling kebal dari suara bicara & bising">Rendah (Kuat)</button>
            <button type="button" class="candle-sens-pill" data-sens="med" title="Sensitivitas normal sedang">Sedang</button>
            <button type="button" class="candle-sens-pill" data-sens="high" title="Untuk mikrofon yang pelan / jauh">Tinggi</button>
          </div>
        </div>

        <!-- Success Message (Revealed on Blow) -->
        <div class="candle-success-box" id="candle-success-box">
          <div class="candle-success-badge">Lilin Berhasil Ditiup!</div>
          <p class="candle-success-text">
            Selamat ulang tahun, <strong>Nur Syarifa Syuhada</strong>! Semoga doa dan harapan terbaikmu dikabulkan, senantiasa diberikan kesehatan, ketenangan hati, dan kebahagiaan abadi.
          </p>
        </div>

        <!-- Action Controls -->
        <div class="candle-actions">
          <button class="candle-action-btn mic-btn" id="btn-toggle-mic">
            <span class="btn-text" id="mic-btn-text">Matikan Mikrofon</span>
          </button>

          <button class="candle-action-btn blow-btn" id="btn-manual-blow">
            <span class="btn-text">Tiup Manual (Tanpa Mic)</span>
          </button>

          <button class="candle-action-btn relight-btn" id="btn-relight-candle" style="display: none;">
            <span class="btn-text">Nyalakan Lilin Lagi</span>
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(this.overlay);

    this.card = document.getElementById('candle-blow-card');
    this.closeBtn = document.getElementById('candle-close-btn');
    this.flameIcon = document.getElementById('candle-card-flame');
    this.instructionEl = document.getElementById('candle-instruction');
    this.meterWrap = document.getElementById('candle-meter-wrap');
    this.meterBar = document.getElementById('candle-meter-bar');
    this.meterVal = document.getElementById('candle-meter-val');
    this.meterLabel = document.getElementById('candle-meter-label');
    this.sensWrap = document.getElementById('candle-sens-wrap');
    this.sensPills = Array.from(this.card.querySelectorAll('.candle-sens-pill'));
    this.successBox = document.getElementById('candle-success-box');
    this.manualBlowBtn = document.getElementById('btn-manual-blow');
    this.toggleMicBtn = document.getElementById('btn-toggle-mic');
    this.micBtnText = document.getElementById('mic-btn-text');
    this.relightBtn = document.getElementById('btn-relight-candle');

    this.bindEvents();
  }

  bindEvents() {
    this.closeBtn.addEventListener('click', () => this.close());

    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) {
        this.close();
      }
    });

    this.manualBlowBtn.addEventListener('click', () => {
      this.simulateManualBlow();
    });

    this.sensPills.forEach((pill) => {
      pill.addEventListener('click', () => {
        this.sensPills.forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');
        this.sensitivity = pill.dataset.sens || 'low';
        this.blowProgress = 0.0;
        if (this.meterBar) this.meterBar.style.width = '0%';
        if (this.meterVal) this.meterVal.textContent = '0%';
        if (this.meterLabel && this.isListening) {
          const names = { low: 'Rendah (Kuat)', med: 'Sedang', high: 'Tinggi' };
          this.meterLabel.textContent = `Sensitivitas ${names[this.sensitivity]} aktif — Silakan tiup!`;
        }
      });
    });

    this.toggleMicBtn.addEventListener('click', () => {
      if (this.isListening) {
        this.stopListening();
        if (this.micBtnText) this.micBtnText.textContent = 'Nyalakan Mikrofon';
        if (this.meterLabel) this.meterLabel.textContent = 'Mikrofon nonaktif — Gunakan tombol manual';
      } else {
        this.startListening();
      }
    });

    this.relightBtn.addEventListener('click', () => {
      this.relight();
    });
  }

  open() {
    if (this.isOpen) return;
    this.isOpen = true;

    // Check candle current state from garden
    const garden = this.sceneManager?.world?.japaneseGarden;
    if (garden && !garden.candleLit) {
      this.isExtinguished = true;
      this.showExtinguishedUI();
    } else {
      this.isExtinguished = false;
      this.blowProgress = 0.0;
      this.showLitUI();
      // Auto-start microphone detection with smooth calibration
      this.startListening();
    }

    this.overlay.classList.add('active');
    gsap.killTweensOf(this.card);
    gsap.fromTo(
      this.card,
      { opacity: 0, scale: 0.92, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 0.45, ease: 'back.out(1.2)' }
    );
  }

  close() {
    if (!this.isOpen) return;
    this.isOpen = false;
    this.stopListening();
    this.restoreBGMVolume();
    this.trigger('close');

    gsap.to(this.card, {
      opacity: 0,
      scale: 0.94,
      y: 20,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => {
        this.overlay.classList.remove('active');
      }
    });
  }

  async startListening() {
    if (this.isListening || this.isExtinguished) return;

    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        if (this.meterLabel) this.meterLabel.textContent = 'Mic tidak didukung browser ini';
        if (this.toggleMicBtn) this.toggleMicBtn.style.display = 'none';
        return;
      }

      // Request stream with echo cancellation to prevent background music from triggering false blows
      this.micStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: false,
          autoGainControl: true
        }
      });

      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.audioContext = new AudioCtx();
      if (this.audioContext.state === 'suspended') {
        await this.audioContext.resume();
      }

      const source = this.audioContext.createMediaStreamSource(this.micStream);
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = 512;
      this.analyser.smoothingTimeConstant = 0.25;
      source.connect(this.analyser);

      this.isListening = true;
      this.calibrationFrames = 0;
      this.ambientBaseline = 0.05;
      this.blowProgress = 0.0;

      // Softly duck BGM so the user's mic has a clean acoustic environment
      this.duckBGMVolume();

      if (this.micBtnText) this.micBtnText.textContent = 'Matikan Mikrofon';
      if (this.meterLabel) this.meterLabel.textContent = 'Menyiapkan mikrofon...';
      if (this.meterBar) this.meterBar.style.width = '0%';
      if (this.meterVal) this.meterVal.textContent = '0%';

      this.processAudio();
    } catch (err) {
      console.warn('[CandleBlow] Mic access error:', err);
      if (this.meterLabel) this.meterLabel.textContent = 'Izin mikrofon belum aktif — Gunakan tiup manual';
      if (this.micBtnText) this.micBtnText.textContent = 'Nyalakan Mikrofon';
    }
  }

  stopListening() {
    this.isListening = false;
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }

    if (this.micStream) {
      this.micStream.getTracks().forEach((track) => track.stop());
      this.micStream = null;
    }

    if (this.audioContext && this.audioContext.state !== 'closed') {
      this.audioContext.close().catch(() => {});
      this.audioContext = null;
    }

    this.restoreBGMVolume();

    if (this.meterBar) this.meterBar.style.width = '0%';
    if (this.meterVal) this.meterVal.textContent = '0%';
  }

  duckBGMVolume() {
    const bgm = this.sceneManager?.bgm;
    if (bgm && bgm.player && typeof bgm.player.getVolume === 'function') {
      if (this.previousBGMVolume === null) {
        this.previousBGMVolume = bgm.player.getVolume();
      }
      bgm.player.setVolume(Math.min(18, this.previousBGMVolume));
    }
  }

  restoreBGMVolume() {
    const bgm = this.sceneManager?.bgm;
    if (bgm && bgm.player && typeof bgm.player.setVolume === 'function' && this.previousBGMVolume !== null) {
      bgm.player.setVolume(this.previousBGMVolume);
      this.previousBGMVolume = null;
    }
  }

  processAudio() {
    if (!this.isListening || !this.analyser || this.isExtinguished) return;

    const bufferLength = this.analyser.frequencyBinCount;
    const freqData = new Uint8Array(bufferLength);
    const timeData = new Uint8Array(this.analyser.fftSize);

    this.analyser.getByteFrequencyData(freqData);
    this.analyser.getByteTimeDomainData(timeData);

    // 1. RMS Volume from time domain
    let sumSquares = 0;
    for (let i = 0; i < timeData.length; i++) {
      const norm = (timeData[i] - 128) / 128;
      sumSquares += norm * norm;
    }
    const rms = Math.sqrt(sumSquares / timeData.length);

    // 2. Low-frequency wind/breath turbulence energy (< 200 Hz: bins 1 to 3)
    let lowEnergy = 0;
    const lowBinCount = Math.min(4, bufferLength);
    for (let i = 1; i < lowBinCount; i++) {
      lowEnergy += freqData[i];
    }
    const lowAvg = lowBinCount > 1 ? (lowEnergy / (lowBinCount - 1)) / 255 : 0;

    // 3. Speech voice band (~400 Hz - 2500 Hz: bins 5 to 25)
    let speechEnergy = 0;
    const speechMax = Math.min(25, bufferLength);
    for (let i = 5; i < speechMax; i++) {
      speechEnergy += freqData[i];
    }
    const speechAvg = (speechEnergy / (speechMax - 5)) / 255;

    // Calibration Phase: Measure ambient noise for the first 35 frames (~550ms)
    if (this.calibrationFrames < 35) {
      this.calibrationFrames++;
      const currentAmbient = Math.max(0.02, lowAvg * 0.7 + rms * 0.3);
      this.ambientBaseline = this.ambientBaseline * 0.92 + currentAmbient * 0.08;

      if (this.meterLabel) {
        this.meterLabel.textContent = 'Menyiapkan mikrofon...';
      }
      this.animFrameId = requestAnimationFrame(() => this.processAudio());
      return;
    }

    // Speech suppression: if speech harmonics (>350Hz) dominate over low wind, heavily penalize breath score
    const isSpeech = speechAvg > (lowAvg * 0.65) || (speechAvg > 0.12 && lowAvg < 0.35);
    const speechPenalty = isSpeech ? 0.3 : 1.0;

    // Excess energy strictly above ambient baseline
    const excessRms = Math.max(0, rms - this.ambientBaseline);
    const excessLow = Math.max(0, lowAvg - this.ambientBaseline);
    const breathScore = ((excessLow * 0.78) + (excessRms * 0.22)) * speechPenalty;

    // Calibrated sensitivity configurations (default 'low' is sturdy against speech & laptop fan)
    const SENS_CONFIGS = {
      low: { threshold: 0.30, rate: 0.016 },
      med: { threshold: 0.22, rate: 0.024 },
      high: { threshold: 0.15, rate: 0.034 }
    };

    const config = SENS_CONFIGS[this.sensitivity] || SENS_CONFIGS.low;
    const BLOW_THRESHOLD = config.threshold;

    const garden = this.sceneManager?.world?.japaneseGarden;

    if (breathScore > BLOW_THRESHOLD) {
      // Actively blowing directly into microphone! Progress builds up smoothly
      const fillRate = config.rate + (breathScore - BLOW_THRESHOLD) * 0.08;
      this.blowProgress = Math.min(1.0, this.blowProgress + fillRate);

      if (this.meterLabel) {
        this.meterLabel.textContent = '💨 Sedang meniup... Tahan hembusan nafas!';
      }

      // Visual candle flame reaction in 3D scene & UI icon
      if (this.flameIcon && !this.isExtinguished) {
        const lean = (Math.random() - 0.5) * 45;
        this.flameIcon.style.transform = `scale(${1.0 + breathScore * 1.1}) rotate(${lean}deg)`;
      }

      if (garden?.flameMesh && garden.candleLit) {
        garden.flameMesh.rotation.z = (Math.random() - 0.5) * 0.7;
        garden.flameMesh.scale.x = 1.0 + breathScore * 1.6;
        garden.flameMesh.scale.y = Math.max(0.35, 1.0 - breathScore * 0.75);
      }
    } else {
      // Stopped blowing: decay faster so talking or short noises decay immediately
      this.blowProgress = Math.max(0.0, this.blowProgress - 0.035);

      if (this.blowProgress <= 0.04 && this.meterLabel) {
        this.meterLabel.textContent = 'Mikrofon aktif — Dekatkan dan tiup sekuat lilin!';
      }

      if (this.flameIcon && !this.isExtinguished) {
        this.flameIcon.style.transform = 'scale(1) rotate(0deg)';
      }

      if (garden?.flameMesh && garden.candleLit) {
        garden.flameMesh.rotation.z = 0;
        garden.flameMesh.scale.set(1, 1, 1);
      }
    }

    const percent = Math.min(100, Math.round(this.blowProgress * 100));
    if (this.meterBar) {
      this.meterBar.style.width = `${percent}%`;
    }
    if (this.meterVal) {
      this.meterVal.textContent = `${percent}%`;
    }

    // Success condition: Sustained blow fills the progress meter completely
    if (this.blowProgress >= 1.0) {
      this.extinguish();
      return;
    }

    this.animFrameId = requestAnimationFrame(() => this.processAudio());
  }

  simulateManualBlow() {
    if (this.isExtinguished) return;

    this.stopListening();
    if (this.manualBlowBtn) this.manualBlowBtn.disabled = true;
    if (this.meterLabel) this.meterLabel.textContent = '💨 Meniup lilin...';

    const garden = this.sceneManager?.world?.japaneseGarden;
    const animObj = { progress: this.blowProgress || 0 };

    gsap.to(animObj, {
      progress: 1.0,
      duration: 0.9,
      ease: 'power1.inOut',
      onUpdate: () => {
        const percent = Math.round(animObj.progress * 100);
        if (this.meterBar) this.meterBar.style.width = `${percent}%`;
        if (this.meterVal) this.meterVal.textContent = `${percent}%`;

        if (this.flameIcon) {
          const lean = (Math.random() - 0.5) * 40;
          this.flameIcon.style.transform = `scale(${1.0 + animObj.progress * 0.6}) rotate(${lean}deg)`;
        }

        if (garden?.flameMesh && garden.candleLit) {
          garden.flameMesh.rotation.z = (Math.random() - 0.5) * 0.55;
          garden.flameMesh.scale.set(1.4, 0.5, 1.4);
        }
      },
      onComplete: () => {
        if (this.manualBlowBtn) this.manualBlowBtn.disabled = false;
        this.extinguish();
      }
    });
  }

  extinguish() {
    if (this.isExtinguished) return;
    this.isExtinguished = true;
    this.stopListening();

    // 1. Garden candle 3D animation (flame snuff, smoke puff, point light dim)
    const garden = this.sceneManager?.world?.japaneseGarden;
    if (garden) {
      garden.extinguishCandle();
    }

    // 2. Tree petals celebratory burst
    const tree = this.sceneManager?.world?.sakuraTree;
    if (tree && typeof tree.burstPetals === 'function') {
      tree.burstPetals();
    }

    // 3. Play sparkling birthday chime synthesized via Web Audio API
    this.playCelebrationChime();

    // 4. Update UI
    this.showExtinguishedUI();

    // 5. Toast notification
    if (this.sceneManager?.sceneOverlay) {
      this.sceneManager.sceneOverlay.showToast(
        'Lilin padam! Selamat Ulang Tahun, Nur Syarifa Syuhada!',
        ''
      );
    }
  }

  relight() {
    this.isExtinguished = false;
    this.blowProgress = 0.0;

    const garden = this.sceneManager?.world?.japaneseGarden;
    if (garden) {
      garden.lightCandle();
    }

    this.showLitUI();
    this.startListening();
  }

  showLitUI() {
    if (this.flameIcon) {
      this.flameIcon.textContent = '';
      this.flameIcon.classList.remove('extinguished');
      this.flameIcon.style.transform = 'scale(1)';
    }

    if (this.instructionEl) {
      this.instructionEl.style.display = 'block';
      this.instructionEl.innerHTML = 'Dekatkan mulutmu ke mikrofon, lalu <strong>tiup dengan hembusan nafas kuat</strong> sampai meter penuh!';
    }

    if (this.meterWrap) this.meterWrap.style.display = 'block';
    if (this.meterBar) this.meterBar.style.width = '0%';
    if (this.meterVal) this.meterVal.textContent = '0%';
    if (this.meterLabel) this.meterLabel.textContent = 'Menyiapkan mikrofon...';
    if (this.sensWrap) this.sensWrap.style.display = 'flex';
    if (this.successBox) this.successBox.classList.remove('visible');
    if (this.manualBlowBtn) this.manualBlowBtn.style.display = 'inline-flex';
    if (this.toggleMicBtn) this.toggleMicBtn.style.display = 'inline-flex';
    if (this.relightBtn) this.relightBtn.style.display = 'none';
  }

  showExtinguishedUI() {
    if (this.flameIcon) {
      this.flameIcon.textContent = '';
      this.flameIcon.classList.add('extinguished');
      gsap.fromTo(
        this.flameIcon,
        { scale: 1.6, rotate: 20 },
        { scale: 1.0, rotate: 0, duration: 0.5, ease: 'elastic.out(1.2, 0.4)' }
      );
    }

    if (this.instructionEl) this.instructionEl.style.display = 'none';
    if (this.meterWrap) this.meterWrap.style.display = 'none';
    if (this.sensWrap) this.sensWrap.style.display = 'none';
    if (this.successBox) this.successBox.classList.add('visible');
    if (this.manualBlowBtn) this.manualBlowBtn.style.display = 'none';
    if (this.toggleMicBtn) this.toggleMicBtn.style.display = 'none';
    if (this.relightBtn) this.relightBtn.style.display = 'inline-flex';
  }

  playCelebrationChime() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioCtx();
      const now = ctx.currentTime;
      // Beautiful Japanese pentatonic celebration arpeggio
      const notes = [523.25, 659.25, 783.99, 987.77, 1046.50, 1318.51];

      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0.0001, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.18, now + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 1.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 1.25);
      });
    } catch (e) {
      console.warn('[CandleBlow] Synthesized chime error:', e);
    }
  }

  dispose() {
    this.stopListening();
    this.restoreBGMVolume();
    if (this.overlay && this.overlay.parentNode) {
      this.overlay.parentNode.removeChild(this.overlay);
    }
    super.dispose();
  }
}