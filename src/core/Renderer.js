import * as THREE from 'three';

export class Renderer {
  constructor(sceneManager) {
    this.sceneManager = sceneManager;
    this.canvas = this.sceneManager.canvas;
    this.sizes = this.sceneManager.sizes;
    this.scene = this.sceneManager.scene;
    this.camera = this.sceneManager.camera;

    this.isMobile = this.sizes ? this.sizes.isMobile : false;

    this.init();
  }

  init() {
    this.instance = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: !this.isMobile,
      powerPreference: 'high-performance',
      alpha: false,
      precision: this.isMobile ? 'mediump' : 'highp'
    });

    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio);

    // Color Management & Tone Mapping (threejs-fundamentals)
    this.instance.toneMapping = THREE.ACESFilmicToneMapping;
    this.instance.toneMappingExposure = 1.0;

    // Shadow Map configuration: PCFShadowMap on mobile (much faster than PCFSoft), PCFSoftShadowMap on desktop
    this.instance.shadowMap.enabled = true;
    this.instance.shadowMap.type = this.isMobile ? THREE.PCFShadowMap : THREE.PCFSoftShadowMap;
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
