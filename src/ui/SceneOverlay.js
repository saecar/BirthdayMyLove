import gsap from 'gsap';
import { EventEmitter } from '../utils/EventEmitter.js';
import { progressStore } from '../utils/ProgressStore.js';

export class SceneOverlay extends EventEmitter {
  constructor(sceneManager) {
    super();

    this.sceneManager = sceneManager;
    this.camera = this.sceneManager.camera;
    this.postProcessing = this.sceneManager.postProcessing;

    this.hasGoldenPetal = progressStore.hasGoldenPetal();
    this.hasEasterEgg = progressStore.hasEasterEggFound();
    this.hasLetterRead = progressStore.hasLetterRead();

    // Days Together Counter
    const startDate = new Date(progressStore.state.relationshipStartDate || '2023-01-01');
    const now = new Date();
    this.daysTogether = Math.max(1, Math.floor((now - startDate) / (1000 * 60 * 60 * 24)));

    this.init();

    // Listen to progressStore changes
    progressStore.on('change', () => {
      this.refreshProgressUI();
    });
  }

  init() {
    this.container = document.createElement('div');
    this.container.id = 'scene-overlay';
    this.container.className = 'scene-overlay';
    this.container.innerHTML = `
      <!-- Top Center Hub (Clean Minimalist Floating Pill Dock) -->
      <header class="hub-header">
        <div class="hub-days-pill" id="hub-days-pill" title="Momen Bersama Nur Syarifa Syuhada">
          <span class="hub-days-text">
            <span class="text-full">${this.daysTogether.toLocaleString()} Hari Bersama</span>
            <span class="text-short">💕 ${this.daysTogether.toLocaleString()} Hari</span>
          </span>
        </div>

        <div class="hub-petal-badge ${this.hasGoldenPetal ? 'unlocked' : ''}" id="hub-petal-badge" title="Kelopak Emas Hub">
          <span class="hub-petal-text" id="hub-petal-text">
            <span class="text-full">${this.hasGoldenPetal ? '1 / 1 Emas' : '0 / 1 Emas'}</span>
            <span class="text-short">${this.hasGoldenPetal ? '🌸 1/1' : '🌸 0/1'}</span>
          </span>
        </div>

        <button class="hub-music-btn" id="btn-toggle-bgm" aria-label="Putar Musik Latar" title="Putar Musik Latar">
          <span class="hub-music-bars">
            <span class="bar bar-1"></span>
            <span class="bar bar-2"></span>
            <span class="bar bar-3"></span>
          </span>
          <span class="hub-btn-label">Musik</span>
        </button>

        <button class="hub-cake-btn" id="btn-open-cake-hub" aria-label="Tiup Lilin" title="Tiup Lilin Ulang Tahun">
          <span class="hub-btn-label">🎂 Tiup Lilin</span>
        </button>

        <button class="hub-game-btn" id="btn-open-minigame" aria-label="Mainkan Mini Game">
          <span class="hub-btn-label">🎮 Game</span>
        </button>

        <button class="hub-letter-btn ${this.hasLetterRead ? 'read' : ''}" id="btn-open-letter-hub" aria-label="Buka Surat Ucapan">
          <span class="hub-btn-label">💌 Surat</span>
        </button>
      </header>

      <!-- Chapter Navigation Dock (Clean Minimalist 2-Chapter Flow) -->
      <nav class="chapter-dock">
        <button class="chapter-btn active" data-progress="0.0">
          <span class="chapter-num">01</span>
          <span class="chapter-title">
            <span class="text-full">Taman Sakura</span>
            <span class="text-short">Taman Sakura</span>
          </span>
        </button>
        <button class="chapter-btn letter-nav-btn" data-progress="1.0" id="btn-chapter-letter">
          <span class="chapter-num">02</span>
          <span class="chapter-title">
            <span class="text-full">Surat Ucapan</span>
            <span class="text-short">Surat Ucapan</span>
          </span>
        </button>
      </nav>

      <!-- Scroll / Swipe Prompt -->
      <div class="scroll-prompt" id="scroll-prompt">
        <div class="scroll-mouse">
          <div class="scroll-wheel"></div>
        </div>
        <span class="scroll-prompt-text">
          <span class="text-full">Gulir mouse atau geser layar</span>
          <span class="text-short">Geser untuk jelajahi</span>
        </span>
      </div>

      <!-- Controls & Toggle Fallback -->
      <div class="overlay-controls">
        <button class="ctrl-btn mobile-hide" id="btn-toggle-fullscreen" aria-label="Layar Penuh (F)" title="Layar Penuh (Tekan F)">
          <span class="ctrl-icon">MAX</span>
          <span class="text-full">Layar Penuh</span>
          <span class="text-short">Penuh</span>
        </button>

        <button class="ctrl-btn" id="btn-toggle-ui" aria-label="Sembunyikan UI (U)" title="Sembunyikan UI (Tekan U)">
          <span class="ctrl-icon">ZEN</span>
          <span class="text-full">Sembunyikan UI</span>
          <span class="text-short">Zen</span>
        </button>

        <button class="fx-toggle-btn active" id="btn-toggle-fx">
          <span class="fx-dot"></span>
          <span id="fx-status-text">
            <span class="text-full">Post-Processing: ON</span>
            <span class="text-short">FX</span>
          </span>
        </button>
      </div>

      <!-- Floating Restore UI Button (Shown when UI is hidden) -->
      <button class="zen-restore-btn" id="btn-restore-ui" aria-label="Tampilkan UI (U / Esc)">
        <span class="ctrl-icon">UI</span>
        <span>Tampilkan UI (U / Esc)</span>
      </button>
    `;

    document.body.appendChild(this.container);

    this.chapterButtons = Array.from(this.container.querySelectorAll('.chapter-btn'));
    this.fxBtn = document.getElementById('btn-toggle-fx');
    this.fxStatusText = document.getElementById('fx-status-text');
    this.fullscreenBtn = document.getElementById('btn-toggle-fullscreen');
    this.hideUIBtn = document.getElementById('btn-toggle-ui');
    this.restoreUIBtn = document.getElementById('btn-restore-ui');
    this.scrollPrompt = document.getElementById('scroll-prompt');

    this.hubPetalBadge = document.getElementById('hub-petal-badge');
    this.hubPetalIcon = document.getElementById('hub-petal-icon');
    this.hubPetalText = document.getElementById('hub-petal-text');
    this.bgmBtn = document.getElementById('btn-toggle-bgm');
    this.openCakeBtn = document.getElementById('btn-open-cake-hub');
    this.openGameBtn = document.getElementById('btn-open-minigame');
    this.openLetterBtn = document.getElementById('btn-open-letter-hub');
    this.chapterLetterBtn = document.getElementById('btn-chapter-letter');
    this.easterPill = document.getElementById('hub-easter-pill');

    this.bindEvents();
  }

  bindEvents() {
    // 1. Chapter click navigation via GSAP
    this.chapterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = parseFloat(btn.dataset.progress);
        if (btn.id === 'btn-chapter-letter') {
          if (this.camera && this.camera.track) {
            this.camera.track.transitionTo(target, 1.8, 'power3.inOut');
          }
          setTimeout(() => {
            this.trigger('openLetter');
          }, 1400);
          return;
        }

        if (this.camera && this.camera.track) {
          this.camera.track.transitionTo(target, 1.8, 'power3.inOut');
        }
      });
    });

    // 2. Track progress changes and update active chapter buttons
    if (this.camera && this.camera.track) {
      this.camera.track.on('progressChange', (progress) => {
        this.updateActiveChapter(progress);
        if (progress > 0.05 && this.scrollPrompt) {
          gsap.to(this.scrollPrompt, { opacity: 0, duration: 0.5, pointerEvents: 'none' });
        } else if (progress <= 0.05 && this.scrollPrompt) {
          gsap.to(this.scrollPrompt, { opacity: 1, duration: 0.5 });
        }
      });
    }

    // 3. Post-Processing Manual Toggle & Status
    if (this.fxBtn) {
      this.fxBtn.addEventListener('click', () => {
        if (!this.postProcessing) return;
        const enabled = this.postProcessing.toggle();
        this.updateFXButton(enabled);
      });
    }

    // 4. Background Music Toggle (YouTube Q49pnA4jsp8)
    if (this.bgmBtn) {
      this.bgmBtn.addEventListener('click', () => {
        this.trigger('toggleBGM');
      });
    }

    // 5. Cake / Candle Blow Launcher
    if (this.openCakeBtn) {
      this.openCakeBtn.addEventListener('click', () => {
        this.trigger('openCake');
      });
    }

    // 6. Mini Game Launcher
    if (this.openGameBtn) {
      this.openGameBtn.addEventListener('click', () => {
        this.trigger('playGame');
      });
    }

    // 7. Letter Launcher
    if (this.openLetterBtn) {
      this.openLetterBtn.addEventListener('click', () => {
        this.trigger('openLetter');
      });
    }

    // 7. Fullscreen Toggle (Maximize Page)
    if (this.fullscreenBtn) {
      this.fullscreenBtn.addEventListener('click', () => {
        this.toggleFullscreen();
      });
    }

    // 8. Hide UI Toggle (Zen Clean View)
    if (this.hideUIBtn) {
      this.hideUIBtn.addEventListener('click', () => {
        this.toggleUI(false);
      });
    }

    // 9. Restore UI Button
    if (this.restoreUIBtn) {
      this.restoreUIBtn.addEventListener('click', () => {
        this.toggleUI(true);
      });
    }

    // 10. Global Keyboard Shortcuts: F = Fullscreen, U = Hide/Show UI, Esc = Restore UI
    this._onKeyDown = (e) => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      if (e.key === 'f' || e.key === 'F') {
        this.toggleFullscreen();
      } else if (e.key === 'u' || e.key === 'U') {
        const isHidden = document.body.classList.contains('ui-hidden');
        this.toggleUI(isHidden);
      } else if (e.key === 'Escape') {
        if (document.body.classList.contains('ui-hidden')) {
          this.toggleUI(true);
        }
      }
    };
    window.addEventListener('keydown', this._onKeyDown);
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      this.showToast('Layar penuh aktif (Tekan F atau Esc untuk keluar)', '');
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        this.showToast('Keluar dari layar penuh', '');
      }
    }
  }

  toggleUI(show = null) {
    const isCurrentlyHidden = document.body.classList.contains('ui-hidden');
    const shouldShow = show !== null ? show : isCurrentlyHidden;

    if (shouldShow) {
      document.body.classList.remove('ui-hidden');
      this.showToast('Antarmuka ditampilkan kembali', '');
    } else {
      document.body.classList.add('ui-hidden');
      this.showToast('Mode Zen: UI disembunyikan (Tekan U atau tombol di pojok untuk kembali)', '');
    }
  }

  refreshProgressUI() {
    this.hasGoldenPetal = progressStore.hasGoldenPetal();
    this.hasEasterEgg = progressStore.hasEasterEggFound();
    this.hasLetterRead = progressStore.hasLetterRead();

    if (this.hubPetalBadge && this.hubPetalText) {
      if (this.hasGoldenPetal) {
        this.hubPetalBadge.classList.add('unlocked');
        this.hubPetalText.textContent = '1 / 1 Emas';
      } else {
        this.hubPetalBadge.classList.remove('unlocked');
        this.hubPetalText.textContent = '0 / 1 Emas';
      }
    }

    if (this.easterPill) {
      if (this.hasEasterEgg) {
        this.easterPill.classList.add('unlocked');
      } else {
        this.easterPill.classList.remove('unlocked');
      }
    }

    if (this.openLetterBtn) {
      if (this.hasLetterRead) {
        this.openLetterBtn.classList.add('read');
      }
    }
  }

  awardGoldenPetal() {
    progressStore.setGoldenPetal(true);
    if (this.hubPetalBadge) {
      gsap.fromTo(
        this.hubPetalBadge,
        { scale: 1.35, rotate: -6 },
        { scale: 1.0, rotate: 0, duration: 0.6, ease: 'elastic.out(1.2, 0.4)' }
      );
    }
  }

  updateActiveChapter(progress) {
    let activeIdx = 0;
    if (progress >= 0.70) {
      activeIdx = 1; // 02 Surat Ucapan
    } else {
      activeIdx = 0; // 01 Taman Sakura
    }

    this.chapterButtons.forEach((btn, idx) => {
      if (idx === activeIdx) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  updateMusicButton(isPlaying) {
    if (!this.bgmBtn) return;
    if (isPlaying) {
      this.bgmBtn.classList.add('playing');
      const label = this.bgmBtn.querySelector('.hub-btn-label');
      if (label) {
        label.textContent = 'Musik: ON';
      }
    } else {
      this.bgmBtn.classList.remove('playing');
      const label = this.bgmBtn.querySelector('.hub-btn-label');
      if (label) {
        label.textContent = 'Musik: OFF';
      }
    }
  }

  updateFXButton(isEnabled) {
    if (!this.fxBtn || !this.fxStatusText) return;

    if (isEnabled) {
      this.fxBtn.classList.add('active');
      this.fxStatusText.innerHTML = '<span class="text-full">Post-Processing: ON</span><span class="text-short">FX: ON</span>';
    } else {
      this.fxBtn.classList.remove('active');
      this.fxStatusText.innerHTML = '<span class="text-full">Fallback: Direct WebGL</span><span class="text-short">FX: OFF</span>';
    }
  }

  showToast(message, icon = '', duration = 3600) {
    let toast = document.getElementById('garden-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'garden-toast';
      toast.className = 'garden-toast';
      document.body.appendChild(toast);
    }

    toast.innerHTML = icon ? `<span class="toast-icon">${icon}</span><span class="toast-msg">${message}</span>` : `<span class="toast-msg">${message}</span>`;
    toast.classList.add('visible');

    if (this._toastTimeout) clearTimeout(this._toastTimeout);
    this._toastTimeout = setTimeout(() => {
      toast.classList.remove('visible');
    }, duration);
  }

  dispose() {
    if (this._onKeyDown) {
      window.removeEventListener('keydown', this._onKeyDown);
    }
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
    this.container = null;
    this.chapterButtons = [];
    this.fxBtn = null;
    this.fxStatusText = null;
    this.fullscreenBtn = null;
    this.hideUIBtn = null;
    this.restoreUIBtn = null;
    this.scrollPrompt = null;
    this.hubPetalBadge = null;
    this.hubPetalIcon = null;
    this.hubPetalText = null;
    this.openGameBtn = null;
    this.openLetterBtn = null;
    this.chapterLetterBtn = null;
    this.easterPill = null;
    super.dispose();
  }
}
