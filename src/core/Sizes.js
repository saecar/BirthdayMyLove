import { EventEmitter } from '../utils/EventEmitter.js';

export class Sizes extends EventEmitter {
  constructor() {
    super();

    // Setup initial dimensions
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);

    this._onResize = this._onResize.bind(this);
    window.addEventListener('resize', this._onResize);
  }

  _onResize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);

    this.trigger('resize');
  }

  dispose() {
    window.removeEventListener('resize', this._onResize);
    super.dispose();
  }
}
