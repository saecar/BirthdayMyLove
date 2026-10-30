import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { EventEmitter } from '../utils/EventEmitter.js';

export class PicnicScene extends EventEmitter {
  constructor(sceneManager) {
    super();

    this.sceneManager = sceneManager;
    this.scene = this.sceneManager.scene;
    this.group = new THREE.Group();
    this.group.name = 'PicnicSceneGroup';
    this.scene.add(this.group);

    this.model = null;
    this.isLoaded = false;
    this.interactiveMeshes = [];

    this.init();
  }

  async init() {
    // Use the LoadingManager from AssetLoader so the loading screen tracks GLB progress
    const manager = this.sceneManager?.assetLoader?.manager || new THREE.LoadingManager();
    const loader = new GLTFLoader(manager);

    const modelUrl = '/models/sakura_spring_picnic.glb';

    try {
      console.log('[PicnicScene] Loading Sakura Spring Picnic asset from:', modelUrl);
      const gltf = await loader.loadAsync(modelUrl, (xhr) => {
        if (xhr.total > 0) {
          const mbLoaded = (xhr.loaded / (1024 * 1024)).toFixed(1);
          const mbTotal = (xhr.total / (1024 * 1024)).toFixed(1);
          const percent = Math.round((xhr.loaded / xhr.total) * 100);
          console.log(`[PicnicScene] Downloading: ${mbLoaded}MB / ${mbTotal}MB (${percent}%)`);

          if (this.sceneManager?.loadingScreen?.statusElement) {
            this.sceneManager.loadingScreen.statusElement.textContent = 
              `Memuat 3D Sakura Spring Picnic (${mbLoaded} / ${mbTotal} MB)...`;
          }
        }
      });

      this.model = gltf.scene;
      this.model.name = 'SakuraSpringPicnicModel';

      // 1. Traverse and configure materials, shadows, and color space
      this.processModel(this.model);

      // 2. Measure raw bounding box and find picnic blanket surface
      const rawBox = new THREE.Box3().setFromObject(this.model);
      const rawSize = new THREE.Vector3();
      rawBox.getSize(rawSize);
      const rawCenter = new THREE.Vector3();
      rawBox.getCenter(rawCenter);

      // Locate picnic blanket to set exact ground height and focal center
      let blanketMesh = null;
      this.model.traverse((child) => {
        if (!blanketMesh && child.name && (child.name.includes('Plane.008') || child.name.includes('blanket'))) {
          blanketMesh = child;
        }
      });

      let surfaceY = rawBox.min.y;
      let centerRef = rawCenter;
      if (blanketMesh) {
        const bBox = new THREE.Box3().setFromObject(blanketMesh);
        surfaceY = bBox.min.y;
        centerRef = bBox.getCenter(new THREE.Vector3());
      }

      console.log('[PicnicScene] Model dimensions:', {
        rawSize: rawSize.toArray(),
        surfaceY,
        centerRef: centerRef.toArray()
      });

      // 3. Center model horizontally on picnic blanket and align blanket to ground level (y = 0.04)
      this.model.position.x = -centerRef.x;
      this.model.position.z = -centerRef.z;
      this.model.position.y = -surfaceY + 0.04;

      // 4. Wrap inside a sub-pivot for transform & placement in garden
      this.pivot = new THREE.Group();
      this.pivot.name = 'PicnicPivot';
      this.pivot.add(this.model);
      this.group.add(this.pivot);

      // 5. Position & Scale tuning:
      // Scale down so picnic setup sits harmoniously in the garden scene
      const targetScale = 0.42;
      this.pivot.scale.set(targetScale, targetScale, targetScale);
      
      // Position gently in the front-right garden area near the sakura tree and benches
      this.pivot.position.set(1.2, 0.0, 0.2);
      this.pivot.rotation.y = -0.35;

      this.isLoaded = true;
      this.trigger('loaded', [this.model]);

      // Register interactive items if interaction manager is available
      this.setupInteractivity();

      console.log('[PicnicScene] Sakura Spring Picnic successfully loaded and placed in scene!');
    } catch (err) {
      console.error('[PicnicScene] Failed to load sakura_spring_picnic.glb:', err);
    }
  }

  processModel(root) {
    root.traverse((child) => {
      if (child.isMesh) {
        // Hide the outer diorama glass bubble (Sphere.005) so the picnic sits seamlessly in our open garden
        if (child.name && child.name.includes('Sphere.005')) {
          child.visible = false;
          return;
        }

        child.castShadow = true;
        child.receiveShadow = true;

        // Mark meshes for raycasting / picnic interaction
        child.userData = { isPicnicItem: true, nodeName: child.name };
        this.interactiveMeshes.push(child);

        if (child.material) {
          const mats = Array.isArray(child.material) ? child.material : [child.material];
          mats.forEach((mat) => {
            if (mat.map) {
              mat.map.colorSpace = THREE.SRGBColorSpace;
              mat.map.needsUpdate = true;
            }
            if (mat.emissiveMap) {
              mat.emissiveMap.colorSpace = THREE.SRGBColorSpace;
              mat.emissiveMap.needsUpdate = true;
            }

            // Enhance vibrancy for garden sunlight
            if (mat.isMeshStandardMaterial || mat.isMeshPhysicalMaterial) {
              mat.roughness = Math.min(0.85, Math.max(0.2, mat.roughness));
              mat.envMapIntensity = 1.2;
            }

            // Handle glass & water materials transparently
            const lowerName = (mat.name || '').toLowerCase();
            if (lowerName.includes('glass') || lowerName.includes('water')) {
              mat.transparent = true;
              mat.opacity = lowerName.includes('water') ? 0.75 : 0.45;
              mat.depthWrite = false;
            }
          });
        }
      }
    });
  }

  setupInteractivity() {
    if (this.sceneManager?.interaction) {
      const current = this.sceneManager.interaction.clickableTargets || [];
      const combined = Array.from(new Set([...current, ...this.interactiveMeshes]));
      this.sceneManager.interaction.setClickables(combined);

      this.sceneManager.interaction.on('picnicClick', (mesh) => {
        if (this.sceneManager?.sceneOverlay) {
          this.sceneManager.sceneOverlay.showToast(
            'Piknik Musim Semi Sakura bersama Nur Syarifa Syuhada',
            ''
          );
        }
      });
    }
  }

  update(delta, elapsedTime) {
    if (!this.isLoaded || !this.pivot) return;

    // Subtle gentle breathing float/sway for picnic lantern or ambient warmth
  }

  dispose() {
    if (this.group && this.group.parent) {
      this.group.parent.remove(this.group);
    }

    if (this.model) {
      this.model.traverse((child) => {
        if (child.isMesh) {
          if (child.geometry) child.geometry.dispose();
          if (child.material) {
            const mats = Array.isArray(child.material) ? child.material : [child.material];
            mats.forEach((m) => {
              if (m.map) m.map.dispose();
              if (m.emissiveMap) m.emissiveMap.dispose();
              m.dispose();
            });
          }
        }
      });
      this.model = null;
    }

    this.interactiveMeshes = [];
    super.dispose();
  }
}
