import GUI from 'lil-gui';
import * as THREE from 'three';

const IDLE_PRESETS = {
  'Gentle Spring': {
    swaySpeed: 1.2,
    swayAngle: 0.016,
    floatSpeed: 0.9,
    floatAmplitude: 0.025,
    foliageWindSpeed: 2.2,
    foliageWindStrength: 0.012,
    lanternSwingSpeed: 2.0,
    lanternSwingAngle: 0.05
  },
  'Deep Breathing': {
    swaySpeed: 0.6,
    swayAngle: 0.010,
    floatSpeed: 0.7,
    floatAmplitude: 0.045,
    foliageWindSpeed: 1.4,
    foliageWindStrength: 0.008,
    lanternSwingSpeed: 1.2,
    lanternSwingAngle: 0.03
  },
  'Windy Hanami': {
    swaySpeed: 2.4,
    swayAngle: 0.032,
    floatSpeed: 1.4,
    floatAmplitude: 0.040,
    foliageWindSpeed: 4.5,
    foliageWindStrength: 0.028,
    lanternSwingSpeed: 3.8,
    lanternSwingAngle: 0.12
  },
  'Calm Stillness': {
    swaySpeed: 0.0,
    swayAngle: 0.0,
    floatSpeed: 0.0,
    floatAmplitude: 0.0,
    foliageWindSpeed: 0.0,
    foliageWindStrength: 0.0,
    lanternSwingSpeed: 0.0,
    lanternSwingAngle: 0.0
  }
};

export class DebugGUI {
  constructor(sceneManager) {
    this.sceneManager = sceneManager;
    this.gui = null;
    this.badgeEl = null;

    this.controllers = {};

    this._onHashChange = this._onHashChange.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);

    window.addEventListener('hashchange', this._onHashChange);
    window.addEventListener('keydown', this._onKeyDown);

    // Initial check: if URL contains #debug, open GUI immediately
    if (this.isHashDebug()) {
      this.initGUI();
    } else {
      console.log('[DebugGUI] Tips: Tambahkan #debug di URL (atau tekan Shift + D) untuk membuka Debug Menu tweaks & idle animation.');
    }
  }

  isHashDebug() {
    return window.location.hash.toLowerCase().includes('debug');
  }

  _onHashChange() {
    if (this.isHashDebug()) {
      if (!this.gui) this.initGUI();
    } else {
      if (this.gui) this.destroyGUI();
    }
  }

  _onKeyDown(event) {
    // Shift + D toggles #debug
    if (event.shiftKey && (event.key === 'D' || event.key === 'd')) {
      if (this.isHashDebug()) {
        window.location.hash = '';
      } else {
        window.location.hash = '#debug';
      }
    }
  }

  initGUI() {
    if (this.gui) return;

    this.gui = new GUI({
      title: 'Sakura & Picnic Debug (#debug)',
      width: 330,
      closeFolders: false
    });

    // Custom CSS positioning so it never obscures vital UI
    const dom = this.gui.domElement;
    dom.style.zIndex = '99999';
    dom.style.position = 'fixed';
    dom.style.top = '64px';
    dom.style.right = '16px';
    dom.style.maxHeight = 'calc(100vh - 80px)';
    dom.style.overflowY = 'auto';
    dom.style.borderRadius = '12px';
    dom.style.boxShadow = '0 8px 24px rgba(230, 77, 120, 0.15)';

    // Build Floating Badge Indicator
    this.createBadge();

    // Notify with toast
    if (this.sceneManager?.sceneOverlay) {
      this.sceneManager.sceneOverlay.showToast('Mode Debug Aktif (#debug)! Menu tweaks siap digunakan.', '');
    }

    const tree = this.sceneManager?.world?.sakuraTree;

    // =========================================================================
    // 1. Model Transform & Placement Folder
    // =========================================================================
    const modelFolder = this.gui.addFolder('Model Transform & Tweaks');

    if (tree) {
      const updateTransform = () => {
        tree.applyTransform();
        tree.saveTweaks();
      };

      modelFolder.add(tree.transform, 'x', -10, 10, 0.05).name('Position X').onChange(updateTransform);
      modelFolder.add(tree.transform, 'y', -5, 5, 0.05).name('Position Y').onChange(updateTransform);
      modelFolder.add(tree.transform, 'z', -10, 10, 0.05).name('Position Z').onChange(updateTransform);

      modelFolder.add(tree.transform, 'rotX', -Math.PI, Math.PI, 0.02).name('Rotation X (rad)').onChange(updateTransform);
      modelFolder.add(tree.transform, 'rotY', -Math.PI, Math.PI, 0.02).name('Rotation Y (rad)').onChange(updateTransform);
      modelFolder.add(tree.transform, 'rotZ', -Math.PI, Math.PI, 0.02).name('Rotation Z (rad)').onChange(updateTransform);

      modelFolder.add(tree.transform, 'scale', 0.1, 2.5, 0.01).name('Scale').onChange(updateTransform);

      // Part Visibility Toggles
      const visibilityParams = {
        showGlassDome: tree.glassDomeMesh ? tree.glassDomeMesh.visible : false,
        showPicnicItems: true,
        showBaseMound: true
      };

      modelFolder.add(visibilityParams, 'showGlassDome').name('Show Glass Bubble').onChange((v) => {
        if (tree.glassDomeMesh) tree.glassDomeMesh.visible = v;
      });

      modelFolder.add(visibilityParams, 'showPicnicItems').name('Show Picnic Props').onChange((v) => {
        tree.picnicPropMeshes.forEach((mesh) => { mesh.visible = v; });
      });

      modelFolder.add(visibilityParams, 'showBaseMound').name('Show Base Mound').onChange((v) => {
        tree.baseMoundMeshes.forEach((mesh) => { mesh.visible = v; });
      });

      const copyActions = {
        copyCode: () => {
          const exportData = {
            transform: { ...tree.transform },
            idleParams: { ...tree.idleParams }
          };
          const jsonStr = JSON.stringify(exportData, null, 2);
          console.log('[DebugGUI] Current Tweaks:\n', jsonStr);
          navigator.clipboard?.writeText(jsonStr);
          if (this.sceneManager?.sceneOverlay) {
            this.sceneManager.sceneOverlay.showToast('Pengaturan disalin ke Clipboard & Console!', '');
          }
        },
        resetDefaults: () => {
          tree.resetTweaks();
          this.gui.controllersRecursive().forEach((c) => c.updateDisplay());
          if (this.sceneManager?.sceneOverlay) {
            this.sceneManager.sceneOverlay.showToast('Transform & Animasi direset ke awal!', '');
          }
        }
      };

      modelFolder.add(copyActions, 'copyCode').name('Copy Tweaks (JSON)');
      modelFolder.add(copyActions, 'resetDefaults').name('Reset Transform');
    }

    // =========================================================================
    // 2. Idle Animation Controls Folder
    // =========================================================================
    const idleFolder = this.gui.addFolder('Idle Animation');

    if (tree) {
      idleFolder.add(tree.idleParams, 'enabled').name('Enable Idle Motion').onChange(() => tree.saveTweaks());

      const presetCtrl = idleFolder.add(tree.idleParams, 'preset', Object.keys(IDLE_PRESETS)).name('Motion Preset').onChange((presetName) => {
        const p = IDLE_PRESETS[presetName];
        if (p) {
          Object.assign(tree.idleParams, p);
          idleFolder.controllersRecursive().forEach((c) => c.updateDisplay());
          tree.saveTweaks();
        }
      });

      this.controllers.swaySpeed = idleFolder.add(tree.idleParams, 'swaySpeed', 0, 5, 0.1).name('Tree Sway Speed').onChange(() => tree.saveTweaks());
      this.controllers.swayAngle = idleFolder.add(tree.idleParams, 'swayAngle', 0, 0.1, 0.002).name('Tree Sway Angle').onChange(() => tree.saveTweaks());

      this.controllers.floatSpeed = idleFolder.add(tree.idleParams, 'floatSpeed', 0, 5, 0.1).name('Float Speed').onChange(() => tree.saveTweaks());
      this.controllers.floatAmp = idleFolder.add(tree.idleParams, 'floatAmplitude', 0, 0.15, 0.005).name('Float Amplitude').onChange(() => tree.saveTweaks());

      this.controllers.foliageSpeed = idleFolder.add(tree.idleParams, 'foliageWindSpeed', 0, 8, 0.1).name('Foliage Wind Speed').onChange(() => tree.saveTweaks());
      this.controllers.foliageStrength = idleFolder.add(tree.idleParams, 'foliageWindStrength', 0, 0.06, 0.002).name('Foliage Strength').onChange(() => tree.saveTweaks());

      this.controllers.lanternSpeed = idleFolder.add(tree.idleParams, 'lanternSwingSpeed', 0, 8, 0.1).name('Lantern Swing Speed').onChange(() => tree.saveTweaks());
      this.controllers.lanternAngle = idleFolder.add(tree.idleParams, 'lanternSwingAngle', 0, 0.25, 0.01).name('Lantern Swing Angle').onChange(() => tree.saveTweaks());
    }

    // =========================================================================
    // 3. Bloom & Shading Tweaks Folder
    // =========================================================================
    const bloomFolder = this.gui.addFolder('Bloom & Blossom Glow');

    if (tree) {
      const bloomParams = {
        glowTarget: 1.0,
        roughnessMult: 1.0,
        envMapIntensity: 1.25,
        triggerCelebration: () => {
          tree.setBloomProgress(1.8, 1.8);
          tree.burstPetals();
        },
        triggerPetals: () => {
          tree.burstPetals();
        }
      };

      bloomFolder.add(bloomParams, 'glowTarget', 0.5, 3.0, 0.05).name('Bloom Level').onChange((v) => {
        tree.setBloomProgress(v, 0.6);
      });

      bloomFolder.add(bloomParams, 'roughnessMult', 0.2, 2.0, 0.05).name('Roughness Mult').onChange((mult) => {
        tree.blossomMaterials.forEach((mat) => {
          if (mat.roughness !== undefined) mat.roughness = THREE.MathUtils.clamp(mat.roughness * mult, 0.1, 1.0);
        });
      });

      bloomFolder.add(bloomParams, 'envMapIntensity', 0.0, 3.0, 0.1).name('EnvMap Intensity').onChange((val) => {
        tree.blossomMaterials.forEach((mat) => {
          if (mat.envMapIntensity !== undefined) mat.envMapIntensity = val;
        });
      });

      bloomFolder.add(bloomParams, 'triggerCelebration').name('Trigger Bloom');
      bloomFolder.add(bloomParams, 'triggerPetals').name('Burst Petals');
    }

    // =========================================================================
    // 4. Lighting & Environment Folder
    // =========================================================================
    const env = this.sceneManager?.world?.environment;
    if (env) {
      const lightFolder = this.gui.addFolder('Scene Lighting');
      if (env.sunLight) {
        lightFolder.add(env.sunLight, 'intensity', 0, 5, 0.1).name('Sun Intensity');
      }
      if (env.ambientLight) {
        lightFolder.add(env.ambientLight, 'intensity', 0, 3, 0.1).name('Ambient Intensity');
      }
      lightFolder.close();
    }

    // =========================================================================
    // 5. Garden Props (Canopy & Table)
    // =========================================================================
    const garden = this.sceneManager?.world?.japaneseGarden;
    if (garden) {
      const propsFolder = this.gui.addFolder('Garden Props (Canopy & Table)');
      if (garden.parasolGroup) {
        propsFolder.add(garden.parasolGroup.position, 'x', 0, 8, 0.05).name('Canopy X');
        propsFolder.add(garden.parasolGroup.position, 'z', -5, 5, 0.05).name('Canopy Z');
      }
      if (garden.tableGroup) {
        propsFolder.add(garden.tableGroup.position, 'x', 0, 8, 0.05).name('Table X');
        propsFolder.add(garden.tableGroup.position, 'z', -5, 5, 0.05).name('Table Z');
      }
      propsFolder.close();
    }

    // =========================================================================
    // 6. Camera Path Scrubber Folder
    // =========================================================================
    const camera = this.sceneManager?.camera;
    if (camera && camera.track) {
      const camFolder = this.gui.addFolder('Camera Flight Track');
      const camParams = {
        progress: camera.track.progress || 0.0,
        fov: camera.instance ? camera.instance.fov : 45
      };

      camFolder.add(camParams, 'progress', 0.0, 1.0, 0.005).name('Track Progress').onChange((p) => {
        camera.track.transitionTo(p, 0.1);
      });

      camFolder.add(camParams, 'fov', 25, 80, 1).name('Camera FOV').onChange((fov) => {
        if (camera.instance) {
          camera.instance.fov = fov;
          camera.instance.updateProjectionMatrix();
        }
      });
      camFolder.close();
    }
  }

  createBadge() {
    if (this.badgeEl) return;

    this.badgeEl = document.createElement('div');
    this.badgeEl.className = 'debug-mode-badge';
    this.badgeEl.innerHTML = `
      <div style="
        position: fixed;
        bottom: 16px;
        right: 16px;
        background: #ffffff;
        color: #d81b60;
        border: 1.5px solid #ffd1dc;
        padding: 6px 14px;
        border-radius: 20px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 11px;
        font-weight: 700;
        z-index: 99998;
        display: flex;
        align-items: center;
        gap: 8px;
        box-shadow: 0 4px 16px rgba(230, 77, 120, 0.15);
        user-select: none;
      ">
        <span>DEBUG ACTIVE (#debug)</span>
        <button id="btn-close-debug" style="
          background: #ff4d88;
          border: none;
          color: #ffffff;
          border-radius: 10px;
          padding: 3px 8px;
          cursor: pointer;
          font-size: 10px;
          font-weight: 600;
          margin-left: 4px;
        ">&times; Tutup</button>
      </div>
    `;

    document.body.appendChild(this.badgeEl);

    const closeBtn = this.badgeEl.querySelector('#btn-close-debug');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        window.location.hash = '';
      });
    }
  }

  removeBadge() {
    if (this.badgeEl && this.badgeEl.parentNode) {
      this.badgeEl.parentNode.removeChild(this.badgeEl);
    }
    this.badgeEl = null;
  }

  destroyGUI() {
    if (this.gui) {
      this.gui.destroy();
      this.gui = null;
    }
    this.removeBadge();
    this.controllers = {};
  }

  dispose() {
    window.removeEventListener('hashchange', this._onHashChange);
    window.removeEventListener('keydown', this._onKeyDown);
    this.destroyGUI();
  }
}
