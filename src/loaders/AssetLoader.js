import * as THREE from 'three';
import { EventEmitter } from '../utils/EventEmitter.js';

export class AssetLoader extends EventEmitter {
  constructor() {
    super();

    this.itemsLoaded = 0;
    this.itemsTotal = 0;
    this.progress = 0;

    this.init();
  }

  init() {
    this.manager = new THREE.LoadingManager(
      // onLoad
      () => {
        this.progress = 1;
        this.trigger('progress', [{
          loaded: this.itemsTotal,
          total: this.itemsTotal,
          progress: 1,
          percentage: 100
        }]);

        // Slight breathing room before signaling ready for smooth transition
        setTimeout(() => {
          this.trigger('ready');
        }, 300);
      },
      // onProgress
      (url, loaded, total) => {
        this.itemsLoaded = loaded;
        this.itemsTotal = total;
        this.progress = total > 0 ? loaded / total : 0;

        this.trigger('progress', [{
          url,
          loaded,
          total,
          progress: this.progress,
          percentage: Math.round(this.progress * 100)
        }]);
      },
      // onError
      (url) => {
        console.error(`[AssetLoader] Error loading asset: ${url}`);
        this.trigger('error', [url]);
      }
    );

    this.textureLoader = new THREE.TextureLoader(this.manager);
  }

  /**
   * Load essential assets for the scene.
   * For Tahap 1, loads synthetic data-URI canvas textures through the LoadingManager
   * so progress is visually proven and interactive without external file dependencies.
   */
  loadInitialAssets() {
    // Generate synthetic gradient & pattern textures via data URL
    const createDataTexture = (colorA, colorB, label) => {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');
      const grad = ctx.createLinearGradient(0, 0, 256, 256);
      grad.addColorStop(0, colorA);
      grad.addColorStop(1, colorB);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 256, 256);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.font = 'bold 24px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(label, 128, 128);

      return canvas.toDataURL('image/png');
    };

    const assetsToLoad = [
      { name: 'baseGradient', url: createDataTexture('#ff4d88', '#1b1233', '3D WORLD') },
      { name: 'accentGlow', url: createDataTexture('#4ef2d2', '#21133f', 'SHADERS') },
      { name: 'particlePattern', url: createDataTexture('#ffe043', '#ff4d88', 'READY') }
    ];

    this.loadedTextures = {};

    for (const asset of assetsToLoad) {
      this.textureLoader.load(
        asset.url,
        (texture) => {
          texture.colorSpace = THREE.SRGBColorSpace;
          this.loadedTextures[asset.name] = texture;
        }
      );
    }
  }

  dispose() {
    if (this.loadedTextures) {
      for (const key in this.loadedTextures) {
        if (this.loadedTextures[key] && typeof this.loadedTextures[key].dispose === 'function') {
          this.loadedTextures[key].dispose();
        }
      }
    }
    this.loadedTextures = {};
    super.dispose();
  }
}
