import gsap from 'gsap';
import { EventEmitter } from '../utils/EventEmitter.js';

class GameAudio {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  _initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTone(frequency, type = 'sine', duration = 0.12, volume = 0.08) {
    if (!this.enabled) return;
    try {
      this._initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(frequency, this.ctx.currentTime);

      gain.gain.setValueAtTime(volume, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {}
  }

  sfxCatchPetal() {
    this.playTone(659.25, 'sine', 0.12, 0.07); // E5 chime
  }

  sfxCatchGolden() {
    const notes = [587.33, 739.99, 880, 1174.66]; // D5, F#5, A5, D6 arpeggio
    notes.forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, 'triangle', 0.15, 0.08), idx * 55);
    });
  }

  sfxHurt() {
    try {
      this._initContext();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(45, this.ctx.currentTime + 0.22);
      gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.22);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.22);
    } catch (e) {}
  }

  sfxVictory() {
    const fanfare = [
      { f: 523.25, d: 0.12 }, // C5
      { f: 659.25, d: 0.12 }, // E5
      { f: 783.99, d: 0.12 }, // G5
      { f: 1046.50, d: 0.35 } // C6
    ];
    let time = 0;
    fanfare.forEach((note) => {
      setTimeout(() => this.playTone(note.f, 'triangle', note.d, 0.1), time);
      time += 130;
    });
  }
}

export class PetalCatchGame extends EventEmitter {
  constructor() {
    super();

    this.audio = new GameAudio();
    this.isOpen = false;
    this.isRunning = false;

    // Game Specs
    this.targetScore = 15;
    this.score = 0;
    this.lives = 3;

    this.canvasWidth = 360;
    this.canvasHeight = 480;

    this.player = {
      x: 180,
      y: 430,
      width: 72,
      height: 24,
      speed: 360,
      vx: 0
    };

    this.items = [];
    this.particles = [];
    this.floatingTexts = [];
    this.spawnTimer = 0;
    this.lastTime = 0;

    this.keys = {
      left: false,
      right: false
    };

    this.initDOM();
  }

  initDOM() {
    this.container = document.createElement('div');
    this.container.id = 'petal-catch-modal';
    this.container.className = 'game-modal-overlay';
    this.container.style.display = 'none';

    this.container.innerHTML = `
      <div class="game-backdrop" id="gc-backdrop"></div>
      <div class="game-card" id="gc-card">
        <button class="game-close-btn" id="gc-close-btn" aria-label="Tutup Game">&times;</button>

        <div class="game-header">
          <div class="game-title-row">
            <span class="game-icon-title"></span>
            <h3 class="game-title">Tangkap Kelopak Sakura</h3>
          </div>
          <div class="game-stats-row">
            <div class="stat-pill score-pill">
              <span class="stat-label">Skor:</span>
              <span class="stat-val" id="gc-score">0 / 15</span>
            </div>
            <div class="stat-pill lives-pill">
              <span class="stat-val" id="gc-lives">Nyawa: 3</span>
            </div>
          </div>
        </div>

        <div class="game-canvas-wrapper">
          <canvas id="gc-canvas" width="360" height="480"></canvas>

          <!-- Victory Overlay -->
          <div class="game-result-overlay" id="gc-win-overlay" style="display: none;">
            <div class="result-box win-box">
              <div class="trophy-anim"></div>
              <h4>LEVEL CLEAR!</h4>
              <p>Hebat sekali! Kamu berhasil menangkap 15 kelopak sakura!</p>
              <div class="reward-box">
                <span class="reward-icon"></span>
                <span class="reward-name">+1 Kelopak Emas Diberikan ke Hub!</span>
              </div>
              <button class="game-action-btn primary" id="gc-btn-claim">Klaim & Kembali ke Hub</button>
            </div>
          </div>

          <!-- Game Over Overlay -->
          <div class="game-result-overlay" id="gc-lose-overlay" style="display: none;">
            <div class="result-box lose-box">
              <div class="trophy-anim"></div>
              <h4>YAH, BELUM BERUNTUNG</h4>
              <p>Kelopak sakura terbang terbawa angin kencang.</p>
              <button class="game-action-btn secondary" id="gc-btn-restart">Coba Lagi</button>
            </div>
          </div>
        </div>

        <!-- Touch Controls for Mobile -->
        <div class="game-touch-controls">
          <button class="touch-ctrl-btn" id="gc-touch-left">‹ Geser Kiri</button>
          <span class="touch-hint">atau seret keranjang</span>
          <button class="touch-ctrl-btn" id="gc-touch-right">Geser Kanan ›</button>
        </div>
      </div>
    `;

    document.body.appendChild(this.container);

    this.cardEl = document.getElementById('gc-card');
    this.backdropEl = document.getElementById('gc-backdrop');
    this.closeBtn = document.getElementById('gc-close-btn');
    this.scoreEl = document.getElementById('gc-score');
    this.livesEl = document.getElementById('gc-lives');
    this.winOverlay = document.getElementById('gc-win-overlay');
    this.loseOverlay = document.getElementById('gc-lose-overlay');
    this.claimBtn = document.getElementById('gc-btn-claim');
    this.restartBtn = document.getElementById('gc-btn-restart');

    this.canvas = document.getElementById('gc-canvas');
    this.ctx = this.canvas.getContext('2d');

    this.touchLeft = document.getElementById('gc-touch-left');
    this.touchRight = document.getElementById('gc-touch-right');

    this.bindEvents();
  }

  bindEvents() {
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onKeyUp = this._onKeyUp.bind(this);
    this._loop = this._loop.bind(this);
    this._onPointerMove = this._onPointerMove.bind(this);

    this.closeBtn.addEventListener('click', () => this.close());
    this.backdropEl.addEventListener('click', () => this.close());

    this.claimBtn.addEventListener('click', () => {
      this.close();
    });

    this.restartBtn.addEventListener('click', () => {
      this.startGame();
    });

    window.addEventListener('keydown', this._onKeyDown);
    window.addEventListener('keyup', this._onKeyUp);

    // Direct pointer drag on canvas
    this.canvas.addEventListener('pointerdown', this._onPointerMove);
    this.canvas.addEventListener('pointermove', this._onPointerMove);

    // Touch Buttons
    const bindTouch = (btn, dir) => {
      const start = (e) => {
        e.preventDefault();
        if (dir === 'left') this.keys.left = true;
        if (dir === 'right') this.keys.right = true;
      };
      const end = (e) => {
        e.preventDefault();
        if (dir === 'left') this.keys.left = false;
        if (dir === 'right') this.keys.right = false;
      };
      btn.addEventListener('pointerdown', start);
      btn.addEventListener('pointerup', end);
      btn.addEventListener('pointercancel', end);
      btn.addEventListener('pointerleave', end);
    };

    bindTouch(this.touchLeft, 'left');
    bindTouch(this.touchRight, 'right');
  }

  _onPointerMove(e) {
    if (!this.isRunning) return;
    const rect = this.canvas.getBoundingClientRect();
    const scaleX = this.canvasWidth / rect.width;
    const clientX = e.clientX - rect.left;
    const canvasX = clientX * scaleX;
    this.player.x = Math.max(this.player.width / 2, Math.min(this.canvasWidth - this.player.width / 2, canvasX));
  }

  _onKeyDown(e) {
    if (!this.isOpen) return;
    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
      this.keys.left = true;
    } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
      this.keys.right = true;
    } else if (e.key === 'Escape') {
      this.close();
    }
  }

  _onKeyUp(e) {
    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
      this.keys.left = false;
    } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
      this.keys.right = false;
    }
  }

  open() {
    this.isOpen = true;
    this.container.style.display = 'flex';

    gsap.killTweensOf([this.backdropEl, this.cardEl]);
    gsap.fromTo(this.backdropEl, { opacity: 0 }, { opacity: 1, duration: 0.3 });
    gsap.fromTo(
      this.cardEl,
      { opacity: 0, scale: 0.9, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'back.out(1.2)' }
    );

    this.startGame();
  }

  close() {
    if (!this.isOpen) return;
    this.isOpen = false;
    this.isRunning = false;

    if (this.animId) {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }

    gsap.to(this.backdropEl, { opacity: 0, duration: 0.25 });
    gsap.to(this.cardEl, {
      opacity: 0,
      scale: 0.94,
      duration: 0.25,
      onComplete: () => {
        this.container.style.display = 'none';
        this.trigger('closed');
      }
    });
  }

  startGame() {
    this.score = 0;
    this.lives = 3;
    this.items = [];
    this.particles = [];
    this.floatingTexts = [];
    this.spawnTimer = 0;
    this.player.x = this.canvasWidth / 2;
    this.isRunning = true;

    this.winOverlay.style.display = 'none';
    this.loseOverlay.style.display = 'none';

    this.updateHUD();

    this.lastTime = performance.now();
    if (this.animId) cancelAnimationFrame(this.animId);
    this.animId = requestAnimationFrame(this._loop);
  }

  updateHUD() {
    this.scoreEl.textContent = `${this.score} / ${this.targetScore}`;
    this.livesEl.textContent = `Nyawa: ${Math.max(0, this.lives)}`;
  }

  spawnItem() {
    const roll = Math.random();
    let type = 'pink';
    let speed = 150 + Math.random() * 40;
    let radius = 12;

    if (roll < 0.20) {
      type = 'gold'; // 20% golden petal (+3)
      speed = 190 + Math.random() * 50;
      radius = 14;
    } else if (roll < 0.35) {
      type = 'storm'; // 15% storm gust (-1 life)
      speed = 170 + Math.random() * 40;
      radius = 16;
    }

    const margin = 24;
    const x = margin + Math.random() * (this.canvasWidth - margin * 2);

    this.items.push({
      type,
      x,
      baseX: x,
      y: -20,
      speed,
      radius,
      swayOffset: Math.random() * Math.PI * 2,
      swaySpeed: 2.5 + Math.random() * 2.0,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 4
    });
  }

  createCatchParticles(x, y, color) {
    for (let i = 0; i < 12; i++) {
      const angle = (Math.PI * 2 * i) / 12 + (Math.random() - 0.5) * 0.5;
      const speed = 60 + Math.random() * 120;
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 3 + Math.random() * 4,
        color,
        alpha: 1.0,
        life: 0.45 + Math.random() * 0.25
      });
    }
  }

  addFloatingText(text, x, y, color) {
    this.floatingTexts.push({
      text,
      x,
      y,
      color,
      alpha: 1.0,
      vy: -55
    });
  }

  _loop(time) {
    if (!this.isRunning) return;

    const delta = Math.min((time - this.lastTime) / 1000, 0.1);
    this.lastTime = time;

    this.update(delta, time / 1000);
    this.render();

    if (this.isRunning) {
      this.animId = requestAnimationFrame(this._loop);
    }
  }

  update(delta, totalTime) {
    // 1. Move Player with Keyboard
    if (this.keys.left) {
      this.player.x -= this.player.speed * delta;
    }
    if (this.keys.right) {
      this.player.x += this.player.speed * delta;
    }
    this.player.x = Math.max(this.player.width / 2, Math.min(this.canvasWidth - this.player.width / 2, this.player.x));

    // 2. Spawn Items
    this.spawnTimer += delta;
    if (this.spawnTimer >= 0.72) {
      this.spawnTimer = 0;
      this.spawnItem();
    }

    // 3. Update Items
    const basketTop = this.player.y - this.player.height / 2;
    const basketBottom = this.player.y + this.player.height / 2;
    const basketLeft = this.player.x - this.player.width / 2;
    const basketRight = this.player.x + this.player.width / 2;

    for (let i = this.items.length - 1; i >= 0; i--) {
      const item = this.items[i];
      item.y += item.speed * delta;
      item.x = item.baseX + Math.sin(totalTime * item.swaySpeed + item.swayOffset) * 22;
      item.rotation += item.rotSpeed * delta;

      // Collision Check with Basket
      if (item.y + item.radius >= basketTop && item.y - item.radius <= basketBottom &&
          item.x >= basketLeft && item.x <= basketRight) {
        
        if (item.type === 'pink') {
          this.score += 1;
          this.audio.sfxCatchPetal();
          this.createCatchParticles(item.x, item.y, '#ff75a0');
          this.addFloatingText('+1', item.x, item.y - 10, '#ff75a0');
        } else if (item.type === 'gold') {
          this.score += 3;
          this.audio.sfxCatchGolden();
          this.createCatchParticles(item.x, item.y, '#ffd13b');
          this.addFloatingText('+3', item.x, item.y - 10, '#ffe043');
        } else if (item.type === 'storm') {
          this.lives -= 1;
          this.audio.sfxHurt();
          this.createCatchParticles(item.x, item.y, '#a491c7');
          this.addFloatingText('-1', item.x, item.y - 10, '#ff4d88');
        }

        this.items.splice(i, 1);
        this.updateHUD();

        // Check Victory
        if (this.score >= this.targetScore) {
          this.triggerWin();
          return;
        }

        // Check Game Over
        if (this.lives <= 0) {
          this.triggerLose();
          return;
        }

        continue;
      }

      // Despawn at bottom
      if (item.y > this.canvasHeight + 30) {
        this.items.splice(i, 1);
      }
    }

    // 4. Update Particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx * delta;
      p.y += p.vy * delta;
      p.alpha -= delta / p.life;
      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
      }
    }

    // 5. Update Floating Texts
    for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
      const ft = this.floatingTexts[i];
      ft.y += ft.vy * delta;
      ft.alpha -= delta * 1.5;
      if (ft.alpha <= 0) {
        this.floatingTexts.splice(i, 1);
      }
    }
  }

  render() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    // Atmospheric Gradient Night Sky
    const bgGrad = ctx.createLinearGradient(0, 0, 0, this.canvasHeight);
    bgGrad.addColorStop(0, '#140c26');
    bgGrad.addColorStop(0.65, '#23153c');
    bgGrad.addColorStop(1, '#341a4a');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

    // Decorative soft stars / dust
    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
    for (let i = 0; i < 18; i++) {
      const sx = (Math.sin(i * 37) * 0.5 + 0.5) * this.canvasWidth;
      const sy = (Math.cos(i * 59) * 0.5 + 0.5) * (this.canvasHeight - 80);
      ctx.fillRect(sx, sy, 2, 2);
    }

    // Render Falling Items
    this.items.forEach((item) => {
      ctx.save();
      ctx.translate(item.x, item.y);
      ctx.rotate(item.rotation);

      if (item.type === 'pink') {
        // Pink Sakura Petal
        ctx.fillStyle = '#ff7da3';
        ctx.shadowColor = 'rgba(255, 117, 160, 0.6)';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.ellipse(0, 0, 7, 13, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.ellipse(-2, -3, 2, 4, 0, 0, Math.PI * 2);
        ctx.fill();
      } else if (item.type === 'gold') {
        // Golden Sparkling Petal
        ctx.fillStyle = '#ffd13b';
        ctx.shadowColor = 'rgba(255, 224, 67, 0.9)';
        ctx.shadowBlur = 14;
        ctx.beginPath();
        ctx.ellipse(0, 0, 8, 14, 0, 0, Math.PI * 2);
        ctx.fill();

        // Shiny gleam
        ctx.fillStyle = '#fffef0';
        ctx.beginPath();
        ctx.arc(0, 0, 4, 0, Math.PI * 2);
        ctx.fill();
      } else if (item.type === 'storm') {
        // Storm Whirlwind Gust
        ctx.fillStyle = '#83719c';
        ctx.shadowColor = 'rgba(131, 113, 156, 0.5)';
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(0, 0, 12, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#e8dff5';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('!', 0, 1);
      }
      ctx.restore();
    });

    // Render Player Basket
    const bx = this.player.x - this.player.width / 2;
    const by = this.player.y - this.player.height / 2;

    // Basket body (woven wood texture)
    ctx.save();
    ctx.fillStyle = '#b48356';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.45)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetY = 4;

    ctx.beginPath();
    ctx.roundRect(bx, by, this.player.width, this.player.height, [4, 4, 12, 12]);
    ctx.fill();

    // Rim & ribbon
    ctx.fillStyle = '#ff75a0';
    ctx.fillRect(bx, by, this.player.width, 5);

    // Center ribbon knot
    ctx.fillStyle = '#ffe043';
    ctx.beginPath();
    ctx.arc(this.player.x, by + 2.5, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Render Particles
    this.particles.forEach((p) => {
      ctx.save();
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    // Render Floating Text
    this.floatingTexts.forEach((ft) => {
      ctx.save();
      ctx.globalAlpha = Math.max(0, ft.alpha);
      ctx.font = 'bold 15px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillStyle = ft.color;
      ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
      ctx.shadowBlur = 4;
      ctx.textAlign = 'center';
      ctx.fillText(ft.text, ft.x, ft.y);
      ctx.restore();
    });
  }

  triggerWin() {
    this.isRunning = false;
    this.audio.sfxVictory();

    // Save golden petal unlock to localStorage
    try {
      localStorage.setItem('goldenPetal_tangkapKelopak', 'true');
    } catch (e) {}

    this.winOverlay.style.display = 'flex';
    gsap.fromTo(
      this.winOverlay.querySelector('.result-box'),
      { scale: 0.85, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.45, ease: 'back.out(1.4)' }
    );

    // Notify Hub
    this.trigger('win', [{ gameId: 'tangkap-kelopak', goldenPetalAwarded: true }]);
    console.log('[PetalCatchGame] Victory! 1 Golden Petal awarded to Hub.');
  }

  triggerLose() {
    this.isRunning = false;
    this.loseOverlay.style.display = 'flex';
    gsap.fromTo(
      this.loseOverlay.querySelector('.result-box'),
      { scale: 0.85, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.2)' }
    );
  }

  dispose() {
    this.isRunning = false;
    if (this.animId) cancelAnimationFrame(this.animId);

    window.removeEventListener('keydown', this._onKeyDown);
    window.removeEventListener('keyup', this._onKeyUp);

    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }

    this.container = null;
    this.canvas = null;
    this.ctx = null;
    this.items = [];
    this.particles = [];
    super.dispose();
  }
}
