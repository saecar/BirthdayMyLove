import * as THREE from 'three';
import gsap from 'gsap';
import { EventEmitter } from '../utils/EventEmitter.js';

export class CameraTrack extends EventEmitter {
  constructor(camera, sizes) {
    super();

    this.camera = camera;
    this.sizes = sizes;

    this.progress = 0.0;
    this.targetProgress = 0.0;
    this.momentumVelocity = 0.0;
    this.touchVelocity = 0.0;
    this.lastTouchTime = 0;
    this._lastEmittedProgress = -1;
    this.isTransitioning = false;
    this.isInspecting = false;

    this.initCurves();

    // Immediately align camera to progress = 0.0 on creation
    const initialPos = this.curve.getPointAt(0.0);
    this.camera.instance.position.copy(initialPos);
    this.currentLookAt = this.lookAtCurve.getPointAt(0.0).clone();
    this.camera.instance.lookAt(this.currentLookAt);

    this.initInputListeners();
  }

  initCurves() {
    // 1. Camera Spline Flight Path (CatmullRomCurve3)
    const cameraPoints = [
      new THREE.Vector3(0.0, 3.4, 9.2),     // Chapter 1: Establishing Full View
      new THREE.Vector3(4.2, 2.2, 5.6),     // Chapter 2: Low-Angle Under-Canopy
      new THREE.Vector3(1.4, 4.4, 3.0),     // Chapter 3: Close-Up Cherry Blossom Petals
      new THREE.Vector3(-3.2, 3.6, 4.8),    // Chapter 4: Sweeping Side Elevation
      new THREE.Vector3(-0.2, 5.6, 7.2)     // Chapter 5: Twilight Panoramic Zenith
    ];

    this.curve = new THREE.CatmullRomCurve3(cameraPoints, false, 'centripetal', 0.5);

    // 2. Camera Target LookAt Spline Path
    const lookAtPoints = [
      new THREE.Vector3(0.0, 2.6, 0.0),
      new THREE.Vector3(0.4, 3.0, 0.2),
      new THREE.Vector3(0.1, 4.2, 0.0),
      new THREE.Vector3(0.0, 3.3, 0.0),
      new THREE.Vector3(0.0, 2.4, 0.0)
    ];

    this.lookAtCurve = new THREE.CatmullRomCurve3(lookAtPoints, false, 'centripetal', 0.5);
  }

  initInputListeners() {
    this._onWheel = this._onWheel.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onTouchStart = this._onTouchStart.bind(this);
    this._onTouchMove = this._onTouchMove.bind(this);
    this._onTouchEnd = this._onTouchEnd.bind(this);

    // Desktop Wheel listener
    window.addEventListener('wheel', this._onWheel, { passive: true });

    // Keyboard navigation (Arrow keys / PageUp / PageDown)
    window.addEventListener('keydown', this._onKeyDown);

    // Mobile Touch swipe (both vertical and horizontal swipes supported)
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.isSwiping = false;

    window.addEventListener('touchstart', this._onTouchStart, { passive: true });
    window.addEventListener('touchmove', this._onTouchMove, { passive: true });
    window.addEventListener('touchend', this._onTouchEnd, { passive: true });
  }

  _onWheel(event) {
    if (this.isTransitioning || this.isInspecting) return;

    // Responsive normalization across various mice & high-DPI trackpads
    const delta = event.deltaY * 0.00065;
    this.momentumVelocity += delta * 1.8;
    this.momentumVelocity = THREE.MathUtils.clamp(this.momentumVelocity, -2.0, 2.0);
  }

  _onKeyDown(event) {
    if (this.isTransitioning || this.isInspecting) return;

    let step = 0;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight' || event.key === 'PageDown') {
      step = 0.08;
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft' || event.key === 'PageUp') {
      step = -0.08;
    }

    if (step !== 0) {
      this.targetProgress = THREE.MathUtils.clamp(this.targetProgress + step, 0.0, 1.0);
    }
  }

  _onTouchStart(event) {
    if (this.isInspecting) return;

    // Disambiguate touches: Do not swipe camera if interacting with UI buttons, headers, or modal cards
    if (event.target && event.target.closest('button, nav, header, .story-card, .letter-card, .game-card, .easter-card, .candle-blow-card, .story-modal-overlay, .letter-modal-overlay, .game-modal-overlay, .easter-modal-overlay, .candle-modal-overlay, .perf-hud, .overlay-controls, .mini-timeline')) {
      this.isSwiping = false;
      return;
    }

    if (event.touches.length > 0) {
      this.touchStartX = event.touches[0].clientX;
      this.touchStartY = event.touches[0].clientY;
      this.lastTouchTime = performance.now();
      this.touchVelocity = 0.0;
      this.momentumVelocity = 0.0;
      this.isSwiping = true;
    }
  }

  _onTouchMove(event) {
    if (!this.isSwiping || this.isTransitioning || this.isInspecting || event.touches.length === 0) return;

    const currentX = event.touches[0].clientX;
    const currentY = event.touches[0].clientY;
    const now = performance.now();
    const dt = Math.max(1, now - this.lastTouchTime);

    const deltaX = (this.touchStartX - currentX);
    const deltaY = (this.touchStartY - currentY);

    this.touchStartX = currentX;
    this.touchStartY = currentY;
    this.lastTouchTime = now;

    // Use dominant axis
    const primaryDelta = Math.abs(deltaY) >= Math.abs(deltaX) ? deltaY : deltaX;
    const deltaProgress = primaryDelta * 0.0016;

    // Compute instantaneous velocity (units per second)
    const instantVelocity = deltaProgress / (dt / 1000);
    this.touchVelocity = this.touchVelocity * 0.35 + instantVelocity * 0.65;

    this.targetProgress = THREE.MathUtils.clamp(this.targetProgress + deltaProgress, 0.0, 1.0);
  }

  _onTouchEnd() {
    if (this.isSwiping) {
      this.isSwiping = false;
      // Transfer kinetic momentum on release
      this.momentumVelocity = THREE.MathUtils.clamp(this.touchVelocity, -1.8, 1.8);
      this.touchVelocity = 0.0;
    }
  }

  /**
   * GSAP Camera Track & Scene Transition
   * Smoothly navigates the camera along the CatmullRomCurve3 path to a target chapter
   */
  transitionTo(targetValue, duration = 1.8, ease = 'power3.inOut') {
    this.isTransitioning = true;
    const clampedTarget = THREE.MathUtils.clamp(targetValue, 0.0, 1.0);

    return gsap.to(this, {
      targetProgress: clampedTarget,
      duration,
      ease,
      onUpdate: () => {
        this.trigger('progressChange', [this.targetProgress]);
      },
      onComplete: () => {
        this.isTransitioning = false;
        this.trigger('transitionComplete', [this.targetProgress]);
      }
    });
  }

  /**
   * Smoothly moves the camera close to a 3D target (e.g. Polaroid inspection)
   */
  focusOnTarget(targetPos, targetLookAt, duration = 1.3, ease = 'power2.out') {
    this.isInspecting = true;
    gsap.killTweensOf(this.camera.instance.position);
    gsap.killTweensOf(this.currentLookAt);

    gsap.to(this.camera.instance.position, {
      x: targetPos.x,
      y: targetPos.y,
      z: targetPos.z,
      duration,
      ease
    });

    return gsap.to(this.currentLookAt, {
      x: targetLookAt.x,
      y: targetLookAt.y,
      z: targetLookAt.z,
      duration,
      ease,
      onUpdate: () => {
        this.camera.instance.lookAt(this.currentLookAt);
      }
    });
  }

  /**
   * Restores camera position back to current spline track position
   */
  exitFocus(duration = 1.1, ease = 'power2.inOut') {
    if (!this.isInspecting) return;

    const clampedProgress = THREE.MathUtils.clamp(this.progress, 0.0, 1.0);
    const returnPos = this.curve.getPointAt(clampedProgress);
    const returnLookAt = this.lookAtCurve.getPointAt(clampedProgress);

    gsap.killTweensOf(this.camera.instance.position);
    gsap.killTweensOf(this.currentLookAt);

    gsap.to(this.camera.instance.position, {
      x: returnPos.x,
      y: returnPos.y,
      z: returnPos.z,
      duration,
      ease
    });

    return gsap.to(this.currentLookAt, {
      x: returnLookAt.x,
      y: returnLookAt.y,
      z: returnLookAt.z,
      duration,
      ease,
      onUpdate: () => {
        this.camera.instance.lookAt(this.currentLookAt);
      },
      onComplete: () => {
        this.isInspecting = false;
      }
    });
  }

  update(delta) {
    if (!this.camera || !this.camera.instance) return;

    // When inspecting a memory in focus mode, GSAP tweens camera transform directly
    if (this.isInspecting) return;

    // Apply kinetic momentum / swipe inertia
    if (!this.isSwiping && Math.abs(this.momentumVelocity) > 0.0001) {
      this.targetProgress += this.momentumVelocity * delta;
      const friction = Math.pow(0.88, delta * 60);
      this.momentumVelocity *= friction;

      if (this.targetProgress <= 0.0 || this.targetProgress >= 1.0) {
        this.momentumVelocity = 0;
      }
      this.targetProgress = THREE.MathUtils.clamp(this.targetProgress, 0.0, 1.0);
    }

    // Frame-rate independent exponential smooth damping
    const damping = 1.0 - Math.exp(-6.5 * delta);
    this.progress += (this.targetProgress - this.progress) * damping;

    const clampedProgress = THREE.MathUtils.clamp(this.progress, 0.0, 1.0);

    // Emit progress event for UI & ScrollTrigger listeners if changed
    if (Math.abs(clampedProgress - this._lastEmittedProgress) > 0.0004) {
      this._lastEmittedProgress = clampedProgress;
      this.trigger('progressChange', [clampedProgress]);
    }

    // 1. Compute position along CatmullRomCurve3
    const newPos = this.curve.getPointAt(clampedProgress);
    this.camera.instance.position.copy(newPos);

    // 2. Compute focal point along LookAt curve
    const lookAtPos = this.lookAtCurve.getPointAt(clampedProgress);
    this.currentLookAt.lerp(lookAtPos, damping);
    this.camera.instance.lookAt(this.currentLookAt);
  }

  dispose() {
    window.removeEventListener('wheel', this._onWheel);
    window.removeEventListener('keydown', this._onKeyDown);
    window.removeEventListener('touchstart', this._onTouchStart);
    window.removeEventListener('touchmove', this._onTouchMove);
    window.removeEventListener('touchend', this._onTouchEnd);

    gsap.killTweensOf(this);
    this.curve = null;
    this.lookAtCurve = null;
    this.camera = null;
    super.dispose();
  }
}
