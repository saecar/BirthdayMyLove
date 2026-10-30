import * as THREE from 'three';

export class Environment {
  constructor(sceneManager) {
    this.sceneManager = sceneManager;
    this.scene = this.sceneManager.scene;

    this.init();
  }

  init() {
    // 1. Hemisphere Light (Soft azure sky above, vibrant Japanese spring grass bounce below)
    this.hemiLight = new THREE.HemisphereLight(0xbde8ff, 0x4c7c3b, 1.15);
    this.scene.add(this.hemiLight);

    // 2. Primary Directional Sun Light (Warm gentle Japanese spring morning sunlight)
    this.sunLight = new THREE.DirectionalLight(0xfff9ed, 2.0);
    this.sunLight.position.set(8, 14, 6);
    this.sunLight.castShadow = true;

    // Optimized shadow frustum for the sakura tree and Japanese garden (threejs-lighting)
    const isMobile = this.sceneManager?.sizes?.isMobile || false;
    this.sunLight.shadow.mapSize.width = isMobile ? 1024 : 2048;
    this.sunLight.shadow.mapSize.height = isMobile ? 1024 : 2048;
    this.sunLight.shadow.camera.near = 1.0;
    this.sunLight.shadow.camera.far = 32;
    this.sunLight.shadow.camera.top = 8.5;
    this.sunLight.shadow.camera.right = 8.5;
    this.sunLight.shadow.camera.bottom = -8.5;
    this.sunLight.shadow.camera.left = -8.5;
    this.sunLight.shadow.bias = -0.0004;
    this.sunLight.shadow.radius = isMobile ? 1.0 : 2.0;

    this.scene.add(this.sunLight);

    // 3. Subtle Atmospheric Sky Rim Light (Fills shadow contours with soft cyan-sky bounce)
    this.rimLight = new THREE.DirectionalLight(0x9bd8ff, 0.7);
    this.rimLight.position.set(-7, 6, -6);
    this.scene.add(this.rimLight);
  }

  update(delta) {
    // Static atmospheric lighting
  }

  dispose() {
    if (this.hemiLight) {
      this.scene.remove(this.hemiLight);
      this.hemiLight.dispose?.();
    }

    if (this.sunLight) {
      this.scene.remove(this.sunLight);
      this.sunLight.dispose?.();
    }

    if (this.rimLight) {
      this.scene.remove(this.rimLight);
      this.rimLight.dispose?.();
    }

    this.hemiLight = null;
    this.sunLight = null;
    this.rimLight = null;
  }
}
