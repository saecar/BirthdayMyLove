import gsap from 'gsap';
import { EventEmitter } from '../utils/EventEmitter.js';
import { progressStore } from '../utils/ProgressStore.js';

export class EasterEggModal extends EventEmitter {
  constructor(sceneManager) {
    super();

    this.sceneManager = sceneManager;
    this.isOpen = false;
    this.keyBuffer = '';
    this.trunkClickCount = 0;
    this.lastTrunkClickTime = 0;

    this.initDOM();
    this.initTriggers();
  }

  initDOM() {
    this.container = document.createElement('div');
    this.container.id = 'easter-egg-modal';
    this.container.className = 'easter-modal-overlay';
    this.container.style.display = 'none';

    this.container.innerHTML = `
      <div class="easter-backdrop" id="ee-backdrop"></div>
      <div class="easter-card" id="ee-card">
        <button class="easter-close-btn" id="ee-close-btn">&times;</button>
        
        <div class="easter-glow-icon"></div>
        <h3 class="easter-title">PESAN RAHASIA DITEMUKAN!</h3>
        <span class="easter-badge">SECRET EASTER EGG UNLOCKED</span>

        <p class="easter-quote">
          "Terima kasih untuk semua tawa, obrolan santai, dan momen seru yang selalu bikin hari-hari jadi menyenangkan."
        </p>

        <div class="easter-dedication">
          <span>Special Birthday Edition • Nur Syarifa Syuhada</span>
        </div>

        <button class="easter-claim-btn" id="ee-claim-btn">Simpan ke Hub & Lanjut</button>
      </div>
    `;

    document.body.appendChild(this.container);

    this.cardEl = document.getElementById('ee-card');
    this.backdropEl = document.getElementById('ee-backdrop');
    this.closeBtn = document.getElementById('ee-close-btn');
    this.claimBtn = document.getElementById('ee-claim-btn');

    this.closeBtn.addEventListener('click', () => this.close());
    this.backdropEl.addEventListener('click', () => this.close());
    this.claimBtn.addEventListener('click', () => this.close());
  }

  initTriggers() {
    // 1. Keyboard Secret Word "LOVE"
    window.addEventListener('keydown', (e) => {
      if (this.isOpen) return;
      this.keyBuffer = (this.keyBuffer + e.key.toLowerCase()).slice(-4);
      if (this.keyBuffer === 'love') {
        this.open();
        this.keyBuffer = '';
      }
    });

    // 2. Trunk click detector
    if (this.sceneManager?.interaction) {
      this.sceneManager.interaction.on('trunkClick', () => {
        this.handleTrunkClick();
      });
    }
  }

  handleTrunkClick() {
    const now = performance.now();
    if (now - this.lastTrunkClickTime < 900) {
      this.trunkClickCount++;
      if (this.trunkClickCount >= 3) {
        this.open();
        this.trunkClickCount = 0;
      }
    } else {
      this.trunkClickCount = 1;
    }
    this.lastTrunkClickTime = now;
  }

  open() {
    this.isOpen = true;
    this.container.style.display = 'flex';

    progressStore.setEasterEggFound(true);

    // Blossom canopy glowing pulse
    if (this.sceneManager?.world?.sakuraTree) {
      this.sceneManager.world.sakuraTree.setBloomProgress(1.8, 2.0);
    }

    gsap.killTweensOf([this.backdropEl, this.cardEl]);
    gsap.fromTo(this.backdropEl, { opacity: 0 }, { opacity: 1, duration: 0.3 });
    gsap.fromTo(
      this.cardEl,
      { opacity: 0, scale: 0.8, rotate: -4 },
      { opacity: 1, scale: 1, rotate: 0, duration: 0.45, ease: 'back.out(1.5)' }
    );

    this.trigger('unlocked');
  }

  close() {
    if (!this.isOpen) return;
    this.isOpen = false;

    gsap.to(this.backdropEl, { opacity: 0, duration: 0.25 });
    gsap.to(this.cardEl, {
      opacity: 0,
      scale: 0.9,
      duration: 0.25,
      onComplete: () => {
        this.container.style.display = 'none';
        this.trigger('closed');
      }
    });
  }

  dispose() {
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
    this.container = null;
    super.dispose();
  }
}
