export class PerfHUD {
  constructor(sceneManager) {
    this.sceneManager = sceneManager;
    this.renderer = this.sceneManager.renderer;
    this.world = this.sceneManager.world;

    this.frameCount = 0;
    this.lastTime = performance.now();
    this.currentFPS = 60;
    this.drawCalls = 0;
    this.triangles = 0;
    this.isCollapsed = true; // Minimalist by default on all screens, expandable on click

    this.init();
  }

  init() {
    this.container = document.createElement('div');
    this.container.id = 'perf-hud';
    this.container.className = `perf-hud ${this.isCollapsed ? 'collapsed' : ''}`;
    this.container.innerHTML = `
      <div class="perf-header" id="perf-header" title="Klik untuk perkecil/perbesar telemetry">
        <span class="perf-status-dot"></span>
        <span class="perf-fps" id="hud-fps">60 FPS</span>
        <button class="perf-toggle-btn" id="perf-toggle-btn" aria-label="Toggle Telemetry">
          ${this.isCollapsed ? '▾' : '▴'}
        </button>
      </div>
      <div class="perf-body" id="perf-body">
        <div class="perf-row">
          <span class="perf-label">Render Mode:</span>
          <span class="perf-value" id="hud-mode" style="color: #4ef2d2;">Composer</span>
        </div>
        <div class="perf-row">
          <span class="perf-label">Draw Calls:</span>
          <span class="perf-value" id="hud-calls">--</span>
        </div>
        <div class="perf-row">
          <span class="perf-label">Kelopak Sakura:</span>
          <span class="perf-value" id="hud-petals">2,500</span>
        </div>
        <div class="perf-row">
          <span class="perf-label">Triangles:</span>
          <span class="perf-value" id="hud-tris">--</span>
        </div>
        <div class="perf-row" style="margin-top: 6px; border-top: 1px dashed rgba(255, 255, 255, 0.15); padding-top: 6px;">
          <span class="perf-label">Tweaks:</span>
          <span class="perf-value" id="hud-debug-link" style="color: #ff94b8; cursor: pointer; text-decoration: underline;" title="Klik untuk buka/tutup #debug menu">#debug (Shift+D)</span>
        </div>
      </div>
    `;

    document.body.appendChild(this.container);

    this.fpsEl = document.getElementById('hud-fps');
    this.modeEl = document.getElementById('hud-mode');
    this.callsEl = document.getElementById('hud-calls');
    this.petalsEl = document.getElementById('hud-petals');
    this.trisEl = document.getElementById('hud-tris');
    this.headerEl = document.getElementById('perf-header');
    this.toggleBtn = document.getElementById('perf-toggle-btn');
    this.bodyEl = document.getElementById('perf-body');

    this.headerEl.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleCollapse();
    });

    // Wire the #debug toggle link
    const debugLinkEl = document.getElementById('hud-debug-link');
    if (debugLinkEl) {
      debugLinkEl.addEventListener('click', (e) => {
        e.stopPropagation();
        if (window.location.hash.toLowerCase().includes('debug')) {
          window.location.hash = '';
        } else {
          window.location.hash = '#debug';
        }
      });
    }

    // Toggle debug visibility on mobile when #debug hash is active
    const updateDebugVisibility = () => {
      if (window.location.hash.toLowerCase().includes('debug')) {
        this.container.classList.add('debug-visible');
      } else {
        this.container.classList.remove('debug-visible');
      }
    };
    updateDebugVisibility();
    window.addEventListener('hashchange', updateDebugVisibility);
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    this.container.classList.toggle('collapsed', this.isCollapsed);
    if (this.toggleBtn) {
      this.toggleBtn.textContent = this.isCollapsed ? '▾' : '▴';
    }
  }

  update() {
    this.frameCount++;
    const now = performance.now();
    const elapsed = now - this.lastTime;

    // Refresh telemetry stats every 500ms
    if (elapsed >= 500) {
      this.currentFPS = Math.round((this.frameCount * 1000) / elapsed);
      this.frameCount = 0;
      this.lastTime = now;

      // Check for automatic post-processing fallback if FPS drops
      if (this.sceneManager.postProcessing) {
        this.sceneManager.postProcessing.checkPerformance(this.currentFPS);

        if (this.modeEl) {
          const isEnabled = this.sceneManager.postProcessing.isEnabled;
          this.modeEl.textContent = isEnabled ? 'Bloom+Vignette' : 'Direct Fallback';
          this.modeEl.style.color = isEnabled ? '#4ef2d2' : '#ffe043';
        }
      }

      if (this.renderer && this.renderer.instance) {
        const info = this.renderer.instance.info;
        this.drawCalls = info.render.calls;
        this.triangles = info.render.triangles;
      }

      const petalCount = this.world?.petals?.count || 2500;

      if (this.fpsEl) {
        this.fpsEl.textContent = `${this.currentFPS} FPS`;
        this.fpsEl.style.color = this.currentFPS >= 55 ? '#4ef2d2' : this.currentFPS >= 35 ? '#ffe043' : '#ff4d88';
      }

      if (this.callsEl) {
        this.callsEl.textContent = `${this.drawCalls} calls`;
      }

      if (this.petalsEl) {
        this.petalsEl.textContent = `${petalCount.toLocaleString()} (Instanced)`;
      }

      if (this.trisEl) {
        this.trisEl.textContent = `${this.triangles.toLocaleString()}`;
      }
    }
  }

  getStats() {
    return {
      fps: this.currentFPS,
      drawCalls: this.drawCalls,
      triangles: this.triangles,
      petals: this.world?.petals?.count || 2500,
      composerEnabled: this.sceneManager?.postProcessing?.isEnabled ?? false
    };
  }

  dispose() {
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
    this.container = null;
    this.fpsEl = null;
    this.modeEl = null;
    this.callsEl = null;
    this.petalsEl = null;
    this.trisEl = null;
  }
}
