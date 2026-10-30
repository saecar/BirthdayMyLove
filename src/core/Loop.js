import { Timer } from 'three/examples/jsm/misc/Timer.js';

export class Loop {
  constructor(sceneManager) {
    this.sceneManager = sceneManager;
    this.renderer = this.sceneManager.renderer;
    this.isRunning = false;

    // Use modern Timer with document connection (threejs-fundamentals)
    this.timer = new Timer();
    if (typeof document !== 'undefined' && typeof this.timer.connect === 'function') {
      this.timer.connect(document);
    }

    this._tick = this._tick.bind(this);
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;

    if (this.renderer && this.renderer.instance) {
      this.renderer.instance.setAnimationLoop(this._tick);
    }
  }

  stop() {
    this.isRunning = false;
    if (this.renderer && this.renderer.instance) {
      this.renderer.instance.setAnimationLoop(null);
    }
  }

  _tick() {
    if (!this.isRunning) return;

    this.timer.update();
    let delta = this.timer.getDelta();

    // Clamp maximum delta to avoid physics/animation jumps on lag spikes
    delta = Math.min(delta, 0.1);

    this.sceneManager.update(delta);
    this.sceneManager.render();
  }

  dispose() {
    this.stop();
    if (this.timer && typeof this.timer.dispose === 'function') {
      this.timer.dispose();
    }
    this.timer = null;
  }
}
