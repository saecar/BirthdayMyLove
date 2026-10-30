import gsap from 'gsap';
import { EventEmitter } from '../utils/EventEmitter.js';

export class StoryPanel extends EventEmitter {
  constructor(sceneManager) {
    super();

    this.sceneManager = sceneManager;
    this.isOpen = false;
    this.currentMemory = null;
    this.memoriesList = [];
    this.currentIndex = 0;

    this.init();
  }

  init() {
    this.container = document.createElement('div');
    this.container.id = 'story-modal';
    this.container.className = 'story-modal-overlay';
    this.container.style.display = 'none';

    this.container.innerHTML = `
      <div class="story-backdrop" id="story-backdrop"></div>
      <div class="story-card" id="story-card">
        <button class="story-close-btn" id="story-close-btn" aria-label="Tutup Panel">&times;</button>

        <div class="story-header">
          <span class="story-badge-date" id="story-date">--</span>
          <span class="story-badge-tag" id="story-tag">--</span>
        </div>

        <h2 class="story-title" id="story-title">Judul Kenangan</h2>
        <div class="story-location" id="story-location">Lokasi</div>

        <div class="story-polaroid-frame">
          <div class="story-img-container" id="story-img-container">
            <div class="story-img-placeholder" id="story-img-placeholder">
              <span class="story-emoji-icon" id="story-emoji">#</span>
            </div>
          </div>
          <p class="story-caption" id="story-caption">"Kutipan kenangan manis..."</p>
        </div>

        <div class="story-body">
          <p class="story-full-text" id="story-text">Cerita lengkap di balik foto kenangan ini...</p>
        </div>

        <div class="story-footer">
          <button class="story-nav-btn prev" id="story-btn-prev">‹ Sebelumnya</button>
          <button class="story-action-btn" id="story-btn-close-action">Lanjut Menjelajah</button>
          <button class="story-nav-btn next" id="story-btn-next">Selanjutnya ›</button>
        </div>
      </div>
    `;

    document.body.appendChild(this.container);

    // Elements cache
    this.cardEl = document.getElementById('story-card');
    this.backdropEl = document.getElementById('story-backdrop');
    this.closeBtn = document.getElementById('story-close-btn');
    this.closeActionBtn = document.getElementById('story-btn-close-action');
    this.prevBtn = document.getElementById('story-btn-prev');
    this.nextBtn = document.getElementById('story-btn-next');

    this.dateEl = document.getElementById('story-date');
    this.tagEl = document.getElementById('story-tag');
    this.titleEl = document.getElementById('story-title');
    this.locationEl = document.getElementById('story-location');
    this.emojiEl = document.getElementById('story-emoji');
    this.captionEl = document.getElementById('story-caption');
    this.textEl = document.getElementById('story-text');
    this.imgContainer = document.getElementById('story-img-container');

    this._onKeyDown = this._onKeyDown.bind(this);
    this.bindEvents();
  }

  setMemories(memories) {
    this.memoriesList = memories || [];
  }

  bindEvents() {
    this.closeBtn.addEventListener('click', () => this.close());
    this.closeActionBtn.addEventListener('click', () => this.close());
    this.backdropEl.addEventListener('click', () => this.close());

    this.prevBtn.addEventListener('click', () => {
      if (this.memoriesList.length === 0) return;
      const prevIdx = (this.currentIndex - 1 + this.memoriesList.length) % this.memoriesList.length;
      this.trigger('navigate', [this.memoriesList[prevIdx], prevIdx]);
    });

    this.nextBtn.addEventListener('click', () => {
      if (this.memoriesList.length === 0) return;
      const nextIdx = (this.currentIndex + 1) % this.memoriesList.length;
      this.trigger('navigate', [this.memoriesList[nextIdx], nextIdx]);
    });

    // Mobile Touch Swipe Navigation (Swipe left = next, Swipe right = prev)
    let touchStartX = 0;
    let touchStartY = 0;
    let isSwipingCard = false;

    this.cardEl.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        isSwipingCard = true;
      }
    }, { passive: true });

    this.cardEl.addEventListener('touchend', (e) => {
      if (!isSwipingCard || e.changedTouches.length === 0) return;
      isSwipingCard = false;
      const deltaX = e.changedTouches[0].clientX - touchStartX;
      const deltaY = e.changedTouches[0].clientY - touchStartY;

      // Ensure horizontal swipe is dominant and passes threshold (45px)
      if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
        if (deltaX < 0) {
          this.nextBtn.click();
        } else {
          this.prevBtn.click();
        }
      }
    }, { passive: true });

    window.addEventListener('keydown', this._onKeyDown);
  }

  _onKeyDown(e) {
    if (!this.isOpen) return;
    if (e.key === 'Escape') {
      this.close();
    } else if (e.key === 'ArrowLeft') {
      this.prevBtn.click();
    } else if (e.key === 'ArrowRight') {
      this.nextBtn.click();
    }
  }

  open(memory, index) {
    this.isOpen = true;
    this.currentMemory = memory;
    this.currentIndex = index !== undefined ? index : this.memoriesList.findIndex((m) => m.id === memory.id);

    // Populate data
    this.dateEl.textContent = memory.date || '';
    this.tagEl.textContent = memory.tag || '';
    this.titleEl.textContent = memory.title || '';
    this.locationEl.textContent = memory.location ? memory.location : '';
    this.captionEl.textContent = memory.caption ? `"${memory.caption}"` : '';
    this.textEl.textContent = memory.fullStory || '';

    const labels = ['01', '02', '03', '04'];
    this.emojiEl.textContent = labels[this.currentIndex % labels.length] || '01';

    // If memory has an image, render img element; otherwise display pastel placeholder
    if (memory.image && memory.image.trim() !== '') {
      this.imgContainer.innerHTML = `<img src="${memory.image}" alt="${memory.title}" class="story-loaded-img" />`;
    } else {
      this.imgContainer.innerHTML = `
        <div class="story-img-placeholder">
          <span class="story-emoji-icon">${labels[this.currentIndex % labels.length] || '01'}</span>
        </div>
      `;
    }

    this.container.style.display = 'flex';

    // GSAP animated entrance
    gsap.killTweensOf([this.backdropEl, this.cardEl]);
    gsap.fromTo(this.backdropEl, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: 'power2.out' });
    gsap.fromTo(
      this.cardEl,
      { opacity: 0, scale: 0.92, y: 25 },
      { opacity: 1, scale: 1, y: 0, duration: 0.45, ease: 'back.out(1.2)' }
    );

    this.trigger('opened', [memory]);
  }

  close() {
    if (!this.isOpen) return;
    this.isOpen = false;

    gsap.to(this.backdropEl, { opacity: 0, duration: 0.25, ease: 'power2.in' });
    gsap.to(this.cardEl, {
      opacity: 0,
      scale: 0.94,
      y: 15,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        this.container.style.display = 'none';
        this.trigger('closed', [this.currentMemory]);
      }
    });
  }

  dispose() {
    window.removeEventListener('keydown', this._onKeyDown);
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
    this.container = null;
    this.memoriesList = [];
    super.dispose();
  }
}
