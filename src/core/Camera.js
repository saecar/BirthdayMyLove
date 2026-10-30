import * as THREE from 'three';
import { CameraTrack } from './CameraTrack.js';

export class Camera {
  constructor(sceneManager) {
    this.sceneManager = sceneManager;
    this.sizes = this.sceneManager.sizes;
    this.scene = this.sceneManager.scene;

    this.init();
  }

  init() {
    const aspect = this.sizes.width / this.sizes.height;
    const initialFov = aspect < 1.0 ? THREE.MathUtils.clamp(45 / Math.pow(aspect, 0.45), 48, 62) : 45;

    this.instance = new THREE.PerspectiveCamera(
      initialFov,
      aspect,
      0.1,
      150
    );

    // Initial position on the track
    this.instance.position.set(0, 3.4, 9.2);
    this.instance.lookAt(0, 2.6, 0);
    this.scene.add(this.instance);

    // Spline trajectory & scroll/swipe controller
    this.track = new CameraTrack(this, this.sizes);
  }

  resize() {
    if (!this.instance) return;
    const aspect = this.sizes.width / this.sizes.height;
    this.instance.aspect = aspect;

    // Adapt vertical FOV on mobile portrait so the tree and garden don't get cropped
    if (aspect < 1.0) {
      this.instance.fov = THREE.MathUtils.clamp(45 / Math.pow(aspect, 0.45), 48, 62);
    } else {
      this.instance.fov = 45;
    }

    this.instance.updateProjectionMatrix();
  }

  update(delta) {
    if (this.track) {
      this.track.update(delta);
    }
  }

  dispose() {
    if (this.track) {
      this.track.dispose();
      this.track = null;
    }

    if (this.instance && this.instance.parent) {
      this.instance.parent.remove(this.instance);
    }
    this.instance = null;
  }
}
