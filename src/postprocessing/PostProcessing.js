import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { VignetteShader } from 'three/examples/jsm/shaders/VignetteShader.js';

export class PostProcessing {
  constructor(sceneManager) {
    this.sceneManager = sceneManager;
    this.renderer = this.sceneManager.renderer;
    this.sizes = this.sceneManager.sizes;
    this.scene = this.sceneManager.scene;
    this.camera = this.sceneManager.camera;

    this.isEnabled = true;
    this.fallbackTriggered = false;
    this.lowFPSCount = 0;
    this.fpsThreshold = 38; // Automatically bypass composer if FPS < 38
    this.requiredLowFrames = 3; // Consecutive low FPS cycles before fallback

    this.init();
  }

  init() {
    if (!this.renderer || !this.renderer.instance) return;

    const width = this.sizes.width;
    const height = this.sizes.height;

    // 1. Create RenderTarget with HalfFloatType for high dynamic range & smooth gradients
    const renderTarget = new THREE.WebGLRenderTarget(width, height, {
      type: THREE.HalfFloatType,
      samples: 2 // MSAA on composer buffers
    });

    this.composer = new EffectComposer(this.renderer.instance, renderTarget);
    this.composer.setPixelRatio(this.sizes.pixelRatio);
    this.composer.setSize(width, height);

    // 2. RenderPass (Base Scene)
    this.renderPass = new RenderPass(this.scene, this.camera.instance);
    this.composer.addPass(this.renderPass);

    // 3. UnrealBloomPass (Light subtle glow on blossoms and sun atmosphere)
    const bloomResolution = new THREE.Vector2(width, height);
    this.bloomPass = new UnrealBloomPass(bloomResolution, 0.42, 0.35, 0.82);
    this.composer.addPass(this.bloomPass);

    // 4. VignettePass (Subtle cinematic lens darkening at frame edges)
    this.vignettePass = new ShaderPass(VignetteShader);
    this.vignettePass.uniforms.darkness.value = 1.15;
    this.vignettePass.uniforms.offset.value = 1.05;
    this.composer.addPass(this.vignettePass);

    // 5. OutputPass (Mandatory last pass: ACESFilmic Tone Mapping & sRGB Color Space)
    this.outputPass = new OutputPass();
    this.composer.addPass(this.outputPass);

    console.log('[PostProcessing] Pipeline initialized: Bloom (0.42) + Vignette + OutputPass.');
  }

  resize() {
    if (!this.composer) return;
    this.composer.setSize(this.sizes.width, this.sizes.height);
    this.composer.setPixelRatio(this.sizes.pixelRatio);

    if (this.bloomPass && this.bloomPass.resolution) {
      this.bloomPass.resolution.set(this.sizes.width, this.sizes.height);
    }
  }

  /**
   * Monitor performance and trigger automatic fallback if FPS is chronically low
   */
  checkPerformance(currentFPS) {
    if (this.fallbackTriggered || !this.isEnabled) return;

    if (currentFPS < this.fpsThreshold && currentFPS > 5) {
      this.lowFPSCount++;
      if (this.lowFPSCount >= this.requiredLowFrames) {
        this.fallbackTriggered = true;
        this.disable(`Auto-fallback: FPS (${currentFPS}) drop detected. Post-processing bypassed.`);
      }
    } else {
      this.lowFPSCount = 0;
    }
  }

  enable() {
    this.isEnabled = true;
    console.log('[PostProcessing] Enabled.');
  }

  disable(reason = 'Manual toggle') {
    this.isEnabled = false;
    console.warn(`[PostProcessing] Disabled: ${reason} Rendering directly via WebGLRenderer.`);
  }

  toggle() {
    if (this.isEnabled) {
      this.disable();
    } else {
      this.enable();
    }
    return this.isEnabled;
  }

  render() {
    if (this.isEnabled && this.composer) {
      this.composer.render();
    } else if (this.renderer && this.renderer.instance) {
      // Fallback: direct WebGL render with zero composer passes
      this.renderer.instance.render(this.scene, this.camera.instance);
    }
  }

  dispose() {
    if (this.composer) {
      if (this.bloomPass && typeof this.bloomPass.dispose === 'function') {
        this.bloomPass.dispose();
      }
      if (this.vignettePass && typeof this.vignettePass.dispose === 'function') {
        this.vignettePass.dispose();
      }
      if (this.outputPass && typeof this.outputPass.dispose === 'function') {
        this.outputPass.dispose();
      }
      if (this.renderPass && typeof this.renderPass.dispose === 'function') {
        this.renderPass.dispose();
      }
      this.composer.dispose();
      this.composer = null;
    }

    this.renderPass = null;
    this.bloomPass = null;
    this.vignettePass = null;
    this.outputPass = null;
  }
}
