import * as THREE from 'three';

export class Renderer {
  constructor(sceneManager) {
    this.sceneManager = sceneManager;
    this.canvas = this.sceneManager.canvas;
    this.sizes = this.sceneManager.sizes;
    this.scene = this.sceneManager.scene;
    this.camera = this.sceneManager.camera;

    this.init();
  }

  init() {
    this.instance = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false
    });

    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio);

    // Color Management & Tone Mapping (threejs-fundamentals)
    this.instance.toneMapping = THREE.ACESFilmicToneMapping;
    this.instance.toneMappingExposure = 1.0;

    // Shadow Map configuration
    this.instance.shadowMap.enabled = true;
    this.instance.shadowMap.type = THREE.PCFSoftShadowMap;
  }

  resize() {
    if (!this.instance) return;
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio);
  }

  render() {
    if (!this.instance || !this.camera || !this.camera.instance) return;
    this.instance.render(this.scene, this.camera.instance);
  }

  dispose() {
    if (!this.instance) return;
    this.instance.dispose();
    this.instance = null;
  }
}
