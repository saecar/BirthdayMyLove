import * as THREE from 'three';
import { EventEmitter } from '../utils/EventEmitter.js';

export class InteractionManager extends EventEmitter {
  constructor(sceneManager) {
    super();

    this.sceneManager = sceneManager;
    this.renderer = this.sceneManager.renderer;
    this.camera = this.sceneManager.camera;
    this.domElement = this.renderer.instance.domElement;

    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();

    // Tap vs Swipe / Scroll disambiguation state
    this.pointerDownPos = new THREE.Vector2();
    this.pointerDownTime = 0;
    this.maxTapDistance = 9; // Max pixel movement to qualify as tap (not swipe)
    this.maxTapDuration = 350; // Max ms to qualify as tap (not long press)

    this.clickableTargets = [];
    this.currentHovered = null;
    this.isEnabled = true;

    this._onPointerDown = this._onPointerDown.bind(this);
    this._onPointerMove = this._onPointerMove.bind(this);
    this._onPointerUp = this._onPointerUp.bind(this);

    this.initEvents();
  }

  initEvents() {
    this.domElement.addEventListener('pointerdown', this._onPointerDown, { passive: true });
    this.domElement.addEventListener('pointermove', this._onPointerMove, { passive: true });
    this.domElement.addEventListener('pointerup', this._onPointerUp, { passive: true });
  }

  setClickables(targets) {
    this.clickableTargets = Array.isArray(targets) ? targets : [];
  }

  _updatePointerCoords(event) {
    const rect = this.domElement.getBoundingClientRect();
    this.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  }

  _onPointerDown(event) {
    if (!this.isEnabled) return;
    this.pointerDownPos.set(event.clientX, event.clientY);
    this.pointerDownTime = performance.now();
    this.pointerDownType = event.pointerType;
  }

  _onPointerMove(event) {
    if (!this.isEnabled) return;

    // Only perform hover raycasting on mouse pointers (not during mobile touch drags)
    if (event.pointerType === 'mouse' && this.clickableTargets.length > 0) {
      this._updatePointerCoords(event);
      this.raycaster.setFromCamera(this.pointer, this.camera.instance);
      const hits = this.raycaster.intersectObjects(this.clickableTargets, false);

      if (hits.length > 0) {
        const hitObj = hits[0].object;
        const polaroidGroup = hitObj.userData?.polaroidGroup;
        if (
          hitObj.userData?.isCake ||
          hitObj.userData?.isEma ||
          hitObj.userData?.isBench ||
          hitObj.userData?.isCenterBench ||
          hitObj.userData?.isBirthdaySign ||
          hitObj.userData?.isPicnicItem ||
          hitObj.userData?.isTreeTrunk ||
          hitObj.userData?.isBark ||
          hitObj.userData?.isSakuraTree
        ) {
          document.body.style.cursor = 'pointer';
        } else if (polaroidGroup !== this.currentHovered) {
          this.currentHovered = polaroidGroup;
          document.body.style.cursor = 'pointer';
          this.trigger('hover', [polaroidGroup, true, hitObj.userData?.memory]);
        }
      } else {
        document.body.style.cursor = 'default';
        if (this.currentHovered) {
          this.trigger('hover', [this.currentHovered, false, null]);
          this.currentHovered = null;
        }
      }
    }
  }

  _onPointerUp(event) {
    if (!this.isEnabled || this.clickableTargets.length === 0) return;

    const deltaX = event.clientX - this.pointerDownPos.x;
    const deltaY = event.clientY - this.pointerDownPos.y;
    const distance = Math.hypot(deltaX, deltaY);
    const duration = performance.now() - this.pointerDownTime;

    // Mobile touch tap allowance (fingers wobble slightly more than mouse pointers)
    const isTouch = event.pointerType === 'touch' || this.pointerDownType === 'touch';
    const allowedDistance = isTouch ? 16 : this.maxTapDistance;
    const allowedDuration = isTouch ? 450 : this.maxTapDuration;

    // Crucial: Only trigger tap/click if the gesture did NOT move (not a scroll/swipe)
    if (distance <= allowedDistance && duration <= allowedDuration) {
      this._updatePointerCoords(event);
      this.raycaster.setFromCamera(this.pointer, this.camera.instance);
      const hits = this.raycaster.intersectObjects(this.clickableTargets, false);

      if (hits.length > 0) {
        const hit = hits[0];
        const polaroidGroup = hit.object.userData?.polaroidGroup;
        const memory = hit.object.userData?.memory;

        if (hit.object.userData?.isTreeTrunk || hit.object.userData?.isBark) {
          console.log('[InteractionManager] Tree trunk/bark clicked!');
          this.trigger('trunkClick');
          this.trigger('barkClick');
        } else if (hit.object.userData?.isBirthdaySign) {
          console.log('[InteractionManager] Birthday sign clicked!');
          this.trigger('birthdaySignClick');
        } else if (hit.object.userData?.isCenterBench) {
          console.log('[InteractionManager] Center bench clicked!');
          this.trigger('centerBenchClick');
        } else if (hit.object.userData?.isCake) {
          console.log('[InteractionManager] Birthday cake clicked!');
          this.trigger('cakeClick');
        } else if (hit.object.userData?.isEma) {
          console.log('[InteractionManager] Ema plaque clicked!');
          this.trigger('emaClick');
        } else if (hit.object.userData?.isBench) {
          console.log('[InteractionManager] Bench clicked!');
          this.trigger('benchClick');
        } else if (hit.object.userData?.isPicnicItem) {
          console.log('[InteractionManager] Picnic item clicked!');
          this.trigger('picnicClick', [hit.object]);
        } else if (polaroidGroup && memory) {
          console.log(`[InteractionManager] Clean tap on memory: "${memory.title}"`);
          this.trigger('select', [polaroidGroup, memory]);
        }
      }
    }
  }

  dispose() {
    this.domElement.removeEventListener('pointerdown', this._onPointerDown);
    this.domElement.removeEventListener('pointermove', this._onPointerMove);
    this.domElement.removeEventListener('pointerup', this._onPointerUp);

    document.body.style.cursor = 'default';
    this.clickableTargets = [];
    this.currentHovered = null;
    super.dispose();
  }
}
