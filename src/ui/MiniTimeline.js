import gsap from 'gsap';
import { EventEmitter } from '../utils/EventEmitter.js';

export class MiniTimeline extends EventEmitter {
  constructor(sceneManager) {
    super();

    this.sceneManager = sceneManager;
    this.memories = [];
    this.activeIndex = -1;
    this.isCollapsed = true;

    this.init();
  }

  init() {
    this.container = document.createElement('div');
    this.container.id = 'mini-timeline';
    this.container.className = 'mini-timeline collapsed';
    this.container.innerHTML = `
      <div class="timeline-header" id="timeline-header" title="Klik untuk membuka / menutup timeline">
        <div class="timeline-header-title">
          <span class="timeline-dot-live"></span>
          <span class="timeline-title">Kenangan</span>
          <span class="timeline-count-badge" id="timeline-count-badge">0</span>
        </div>
        <button class="timeline-toggle-btn" id="timeline-toggle-btn" aria-label="Buka atau tutup kenangan">
          <span id="timeline-toggle-label">Buka</span>
        </button>
      </div>
      <div class="timeline-body" id="timeline-body">
        <div class="timeline-track" id="timeline-track">
          <!-- Nodes populated dynamically -->
        </div>
      </div>
    `;

    document.body.appendChild(this.container);
    this.trackEl = document.getElementById('timeline-track');
    this.headerEl = document.getElementById('timeline-header');
    this.toggleBtn = document.getElementById('timeline-toggle-btn');
    this.toggleLabel = document.getElementById('timeline-toggle-label');
    this.countBadge = document.getElementById('timeline-count-badge');

    this.headerEl.addEventListener('click', () => {
      this.toggleCollapse();
    });
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    this.updateCollapseState();
  }

  setCollapsed(collapsed) {
    this.isCollapsed = !!collapsed;
    this.updateCollapseState();
  }

  updateCollapseState() {
    if (this.isCollapsed) {
      this.container.classList.add('collapsed');
      if (this.toggleLabel) this.toggleLabel.textContent = 'Buka';
    } else {
      this.container.classList.remove('collapsed');
      if (this.toggleLabel) this.toggleLabel.textContent = 'Tutup';
    }
  }

  setMemories(memories) {
    this.memories = memories || [];
    if (this.countBadge) {
      this.countBadge.textContent = this.memories.length;
    }
    this.renderNodes();
  }

  renderNodes() {
    if (!this.trackEl) return;
    this.trackEl.innerHTML = '';

    const stepLabels = ['01', '02', '03', '04'];

    this.memories.forEach((memory, index) => {
      const nodeEl = document.createElement('button');
      nodeEl.className = 'timeline-node';
      nodeEl.dataset.index = index;
      nodeEl.title = memory.title;

      nodeEl.innerHTML = `
        <span class="timeline-node-icon">${stepLabels[index % stepLabels.length] || '01'}</span>
        <div class="timeline-node-info">
          <span class="timeline-node-date">${memory.date}</span>
          <span class="timeline-node-label">${memory.title}</span>
        </div>
      `;

      nodeEl.addEventListener('click', (e) => {
        e.stopPropagation();
        this.setActive(index);
        this.trigger('select', [memory, index]);
      });

      this.trackEl.appendChild(nodeEl);
    });
  }

  setActive(index) {
    this.activeIndex = index;
    const nodes = this.container.querySelectorAll('.timeline-node');
    nodes.forEach((node, idx) => {
      if (idx === index) {
        node.classList.add('active');
        if (!this.isCollapsed) {
          node.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
      } else {
        node.classList.remove('active');
      }
    });
  }

  clearActive() {
    this.activeIndex = -1;
    const nodes = this.container.querySelectorAll('.timeline-node');
    nodes.forEach((node) => node.classList.remove('active'));
  }

  dispose() {
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
    this.container = null;
    this.memories = [];
    super.dispose();
  }
}
