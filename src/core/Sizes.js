import { EventEmitter } from '../utils/EventEmitter.js';

export function detectMobile() {
  if (typeof window === 'undefined') return false;
  const ua = navigator.userAgent || '';
  const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua);
  const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  return isMobileUA || (isTouch && window.innerWidth <= 850);
}

export class Sizes extends EventEmitter {
  constructor() {
    super();

    this.isMobile = detectMobile();

    // Setup initial dimensions
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    
    // Adaptive DPR: cap to 1.25 on mobile to avoid GPU fillrate bottleneck and thermal throttling
    this.pixelRatio = this.isMobile
      ? Math.min(window.devicePixelRatio, 1.25)
      : Math.min(window.devicePixelRatio, 2.0);

    this._onResize = this._onResize.bind(this);
    window.addEventListener('resize', this._onResize);
  }

  _onResize() {
    this.isMobile = detectMobile();
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.pixelRatio = this.isMobile
      ? Math.min(window.devicePixelRatio, 1.25)
      : Math.min(window.devicePixelRatio, 2.0);

    this.trigger('resize');
  }

  dispose() {
    window.removeEventListener('resize', this._onResize);
    super.dispose();
  }
}
