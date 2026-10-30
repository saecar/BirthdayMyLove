import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gsap from 'gsap';
import { EventEmitter } from '../utils/EventEmitter.js';

// Import asset via Vite URL resolver
import sakuraModelUrl from '../assets/sakura_spring_picnic.glb?url';

export class SakuraTree extends EventEmitter {
  constructor(sceneManager) {
    super();

    this.sceneManager = sceneManager;
    this.scene = this.sceneManager.scene;

    // Root Group added to the main scene
    this.group = new THREE.Group();
    this.group.name = 'SakuraTreeGLBGroup';
    this.scene.add(this.group);

    // Pivot group for transforms and gentle floating/breathing animation
    this.pivot = new THREE.Group();
    this.pivot.name = 'SakuraTreePivot';
    this.group.add(this.pivot);

    this.model = null;
    this.isLoaded = false;
    this.elapsedTime = 0;
    this.currentBloom = 1.0;

    // Categorized Node & Mesh Collections for Animations and Tweaks
    this.treeNodes = [];
    this.foliageNodes = [];
    this.blossomMaterials = [];
    this.interactiveMeshes = [];
    this.barkMesh = null;
    this.lanternNode = null;
    this.glassDomeMesh = null;
    this.baseMoundMeshes = [];
    this.picnicPropMeshes = [];

    // Model Transform Settings (calibrated for central placement in Japanese garden)
    this.transform = {
      x: 0.0,
      y: 0.0,
      z: 0.0,
      rotX: 0.0,
      rotY: 0.0,
      rotZ: 0.0,
      scale: 0.85
    };

    // Idle Animation Parameters
    this.idleParams = {
      enabled: true,
      preset: 'Gentle Spring',
      swaySpeed: 1.2,
      swayAngle: 0.016,
      floatSpeed: 0.9,
      floatAmplitude: 0.025,
      foliageWindSpeed: 2.2,
      foliageWindStrength: 0.012,
      lanternSwingSpeed: 2.0,
      lanternSwingAngle: 0.05
    };

    // Load any tweaks persisted in localStorage
    this.loadSavedTweaks();

    this.init();
  }

  loadSavedTweaks() {
    try {
      const saved = localStorage.getItem('birthday_sakura_tweaks');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.transform) Object.assign(this.transform, parsed.transform);
        if (parsed.idleParams) Object.assign(this.idleParams, parsed.idleParams);
      }
    } catch (e) {
      console.warn('[SakuraTree] Could not load saved tweaks:', e);
    }
  }

  saveTweaks() {
    try {
      localStorage.setItem('birthday_sakura_tweaks', JSON.stringify({
        transform: this.transform,
        idleParams: this.idleParams
      }));
    } catch (e) {
      console.warn('[SakuraTree] Could not save tweaks:', e);
    }
  }

  resetTweaks() {
    localStorage.removeItem('birthday_sakura_tweaks');
    this.transform = {
      x: 0.0,
      y: 0.0,
      z: 0.0,
      rotX: 0.0,
      rotY: 0.0,
      rotZ: 0.0,
      scale: 0.85
    };
    this.idleParams = {
      enabled: true,
      preset: 'Gentle Spring',
      swaySpeed: 1.2,
      swayAngle: 0.016,
      floatSpeed: 0.9,
      floatAmplitude: 0.025,
      foliageWindSpeed: 2.2,
      foliageWindStrength: 0.012,
      lanternSwingSpeed: 2.0,
      lanternSwingAngle: 0.05
    };
    this.applyTransform();
  }

  async init() {
    const manager = this.sceneManager?.assetLoader?.manager || new THREE.LoadingManager();
    const loader = new GLTFLoader(manager);

    const modelPath = sakuraModelUrl || '/models/sakura_spring_picnic.glb';

    try {
      console.log('[SakuraTree] Loading 3D Sakura Spring Picnic GLB from:', modelPath);
      const gltf = await loader.loadAsync(modelPath, (xhr) => {
        if (xhr.total > 0) {
          const mbLoaded = (xhr.loaded / (1024 * 1024)).toFixed(1);
          const mbTotal = (xhr.total / (1024 * 1024)).toFixed(1);
          const percent = Math.round((xhr.loaded / xhr.total) * 100);

          if (this.sceneManager?.loadingScreen?.statusElement) {
            this.sceneManager.loadingScreen.statusElement.textContent = 
              `Memuat 3D Sakura Spring Picnic (${mbLoaded} / ${mbTotal} MB)...`;
          }
        }
      });

      this.model = gltf.scene;
      this.model.name = 'SakuraSpringPicnicGLB';

      // 1. Traverse and configure nodes, materials, shadows, and interactive collections
      this.processModel(this.model);

      // 2. Measure raw dimensions and compute grounding & centering offset
      this.centerAndGroundModel();

      // 3. Attach model into pivot
      this.pivot.add(this.model);

      // 4. Apply configured transform
      this.applyTransform();

      this.isLoaded = true;
      this.trigger('loaded', [this.model]);

      // 5. Connect interactivity with InteractionManager
      this.setupInteractivity();

      console.log('[SakuraTree] 3D Sakura Spring Picnic GLB successfully mounted and ready!');
    } catch (err) {
      console.error('[SakuraTree] Failed to load sakura_spring_picnic.glb:', err);
    }
  }

  processModel(root) {
    const blossomMatSet = new Set();

    root.traverse((child) => {
      // Store base transforms for procedural idle motion
      child.userData.baseRotX = child.rotation.x;
      child.userData.baseRotY = child.rotation.y;
      child.userData.baseRotZ = child.rotation.z;
      child.userData.basePosY = child.position.y;

      const lowerName = (child.name || '').toLowerCase();

      // Completely remove outer glass bubble and surrounding glass dome
      if (
        lowerName.includes('sphere.005') ||
        lowerName.includes('glass_0') ||
        (child.material && (child.material.name === 'glass' || child.material.name === 'glass_background'))
      ) {
        child.visible = false;
        if (child.material) {
          child.material.visible = false;
          child.material.opacity = 0;
          child.material.transparent = true;
        }
        return;
      }

      // Identify tree trunk and main branch nodes for wind sway
      if (
        lowerName.includes('sakura_tree') ||
        lowerName === 'tree' ||
        lowerName.includes('tree_sakura') ||
        lowerName.includes('sakura03')
      ) {
        if (!this.treeNodes.includes(child)) {
          this.treeNodes.push(child);
        }
      }

      // Identify foliage & petal nodes for gentle wind flutter
      if (
        lowerName.includes('sakura_leaf') ||
        lowerName.includes('plane.001') ||
        lowerName.includes('plane.003') ||
        lowerName.includes('plane.004') ||
        lowerName.includes('plane.161')
      ) {
        if (!this.foliageNodes.includes(child)) {
          this.foliageNodes.push(child);
        }
      }

      // Identify lantern node for pendulum swing
      if (lowerName.includes('cylinder.040') || lowerName.includes('light_metal') || lowerName.includes('light_glass')) {
        if (!this.lanternNode) {
          this.lanternNode = child.parent && child.parent !== root ? child.parent : child;
          this.lanternNode.userData.baseRotZ = this.lanternNode.rotation.z;
        }
      }

      // Identify base mound elements (stone floor, circular grass)
      if (lowerName.includes('sphere.002') || lowerName.includes('sphere.003') || lowerName.includes('sphere.004')) {
        this.baseMoundMeshes.push(child);
      }

      // Identify picnic items (blanket, food, drinks, cushions)
      if (
        lowerName.includes('blanket') ||
        lowerName.includes('cution') ||
        lowerName.includes('chair') ||
        lowerName.includes('bread') ||
        lowerName.includes('wine') ||
        lowerName.includes('cup') ||
        lowerName.includes('cake') ||
        lowerName.includes('teapot') ||
        lowerName.includes('grapes') ||
        lowerName.includes('apple')
      ) {
        this.picnicPropMeshes.push(child);
      }

      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        // Mark meshes for raycasting & interaction
        child.userData.isSakuraTree = true;
        if (this.picnicPropMeshes.includes(child)) {
          child.userData.isPicnicItem = true;
        }

        // Pick primary bark mesh for tree click handler
        if (!this.barkMesh && (lowerName.includes('sakura_tree') || lowerName.includes('tree01'))) {
          this.barkMesh = child;
          child.userData.isBark = true;
        }

        this.interactiveMeshes.push(child);

        // Enhance materials
        if (child.material) {
          const mats = Array.isArray(child.material) ? child.material : [child.material];
          mats.forEach((mat) => {
            const matName = (mat.name || '').toLowerCase();

            // Correct color spaces
            if (mat.map) {
              mat.map.colorSpace = THREE.SRGBColorSpace;
              mat.map.needsUpdate = true;
            }
            if (mat.emissiveMap) {
              mat.emissiveMap.colorSpace = THREE.SRGBColorSpace;
              mat.emissiveMap.needsUpdate = true;
            }

            // Balanced PBR response for sunlight and garden environment
            if (mat.isMeshStandardMaterial || mat.isMeshPhysicalMaterial) {
              mat.roughness = Math.min(0.9, Math.max(0.18, mat.roughness));
              mat.envMapIntensity = 1.25;
            }

            // Glass, liquid & wine transparency
            if (matName.includes('glass') || matName.includes('water')) {
              mat.transparent = true;
              mat.opacity = matName.includes('water') ? 0.78 : 0.42;
              mat.depthWrite = false;
            }

            // Collect blossom materials for dynamic blooming & shimmer
            if (matName.includes('sakura01') || matName.includes('sakura_tree03') || lowerName.includes('sakura')) {
              if (!blossomMatSet.has(mat)) {
                blossomMatSet.add(mat);
                // Subtle natural blossom radiance
                if (!mat.emissive) mat.emissive = new THREE.Color(0xff799f);
                mat.emissive.set(0xff799f);
                mat.emissiveIntensity = 0.12;
              }
            }
          });
        }
      }
    });

    this.blossomMaterials = Array.from(blossomMatSet);
    if (!this.barkMesh && this.interactiveMeshes.length > 0) {
      this.barkMesh = this.interactiveMeshes[0];
    }
  }

  centerAndGroundModel() {
    if (!this.model) return;

    // Temporarily hide glass dome if present to compute bounds accurately
    const domeWasVisible = this.glassDomeMesh?.visible;
    if (this.glassDomeMesh) this.glassDomeMesh.visible = false;

    const box = new THREE.Box3().setFromObject(this.model);
    const size = new THREE.Vector3();
    box.getSize(size);
    const center = new THREE.Vector3();
    box.getCenter(center);

    // Find stone base or circular ground mound to align bottom at ground level Y = 0.0
    let stoneBase = null;
    this.model.traverse((child) => {
      if (!stoneBase && child.name && (child.name.includes('Sphere.002') || child.name.includes('stone_floor'))) {
        stoneBase = child;
      }
    });

    let groundLevelY = box.min.y;
    let horizontalCenter = center.clone();

    if (stoneBase) {
      const bBox = new THREE.Box3().setFromObject(stoneBase);
      groundLevelY = bBox.min.y;
      horizontalCenter = bBox.getCenter(new THREE.Vector3());
    }

    // Offset raw model inside pivot so origin (0, 0, 0) is at the center base of the diorama
    this.model.position.x = -horizontalCenter.x;
    this.model.position.z = -horizontalCenter.z;
    this.model.position.y = -groundLevelY + 0.02; // Sits snuggly on garden lawn

    if (this.glassDomeMesh) {
      this.glassDomeMesh.visible = false;
    }

    console.log('[SakuraTree] Bounding dimensions:', {
      size: size.toArray(),
      groundLevelY,
      center: horizontalCenter.toArray()
    });
  }

  mountBirthdayCake(cakeGroup) {
    // Deprecated: Birthday cake has its own dedicated celebration table in JapaneseGarden
  }

  applyTransform() {
    if (!this.pivot) return;

    this.pivot.position.set(this.transform.x, this.transform.y, this.transform.z);
    this.pivot.rotation.set(this.transform.rotX, this.transform.rotY, this.transform.rotZ);
    this.pivot.scale.set(this.transform.scale, this.transform.scale, this.transform.scale);
  }

  setupInteractivity() {
    if (!this.sceneManager?.interaction) return;

    const current = this.sceneManager.interaction.clickableTargets || [];
    const combined = Array.from(new Set([...current, ...this.interactiveMeshes]));
    this.sceneManager.interaction.setClickables(combined);

    // Handle clicks on picnic items
    this.sceneManager.interaction.on('picnicClick', () => {
      if (this.sceneManager?.sceneOverlay) {
        this.sceneManager.sceneOverlay.showToast(
          'Piknik Musim Semi Sakura bersama Nur Syarifa Syuhada',
          ''
        );
      }
    });

    // Handle clicks on tree trunk
    this.sceneManager.interaction.on('barkClick', () => {
      this.setBloomProgress(1.4, 1.2);
      this.burstPetals();
      if (this.sceneManager?.sceneOverlay) {
        this.sceneManager.sceneOverlay.showToast(
          'Pohon Sakura Musim Semi bersemi indah mekar penuh kelopak!',
          ''
        );
      }
    });
  }

  setBloomProgress(targetValue = 1.0, duration = 2.0) {
    this.currentBloom = targetValue;
    console.log(`[SakuraTree] Blooming scale & glow triggered: uBloom -> ${targetValue}`);

    if (this.blossomMaterials.length > 0) {
      const targetIntensity = targetValue > 1.0 ? (targetValue - 1.0) * 1.5 + 0.25 : 0.12;
      const targetColor = targetValue > 1.0 ? new THREE.Color(0xff85ab) : new THREE.Color(0xff5c8a);

      this.blossomMaterials.forEach((mat) => {
        if (mat.emissive) {
          gsap.to(mat, {
            emissiveIntensity: targetIntensity,
            duration: duration,
            ease: 'power2.out'
          });
          gsap.to(mat.emissive, {
            r: targetColor.r,
            g: targetColor.g,
            b: targetColor.b,
            duration: duration,
            ease: 'power2.out'
          });
        }
      });
    }

    // Subtle gentle pulse scale punch on the blooming canopy
    if (this.pivot && targetValue > 1.0) {
      const baseScale = this.transform.scale;
      gsap.to(this.pivot.scale, {
        x: baseScale * 1.025,
        y: baseScale * 1.025,
        z: baseScale * 1.025,
        duration: duration * 0.4,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut'
      });
    }
  }

  burstPetals() {
    if (this.sceneManager?.world?.petals) {
      this.sceneManager.world.petals.burst?.();
    }
  }

  update(delta) {
    if (!this.isLoaded || !this.pivot) return;

    this.elapsedTime += delta;

    if (!this.idleParams.enabled) return;

    // 1. Gentle Diorama Breathing Float
    const floatOffset = Math.sin(this.elapsedTime * this.idleParams.floatSpeed) * this.idleParams.floatAmplitude;
    this.pivot.position.y = this.transform.y + floatOffset;

    // 2. Tree Trunk & Secondary Branches Sway (Compound Spring Breeze)
    const swayPhase = this.elapsedTime * this.idleParams.swaySpeed;
    const swayZ = Math.sin(swayPhase) * this.idleParams.swayAngle + Math.sin(swayPhase * 1.7) * (this.idleParams.swayAngle * 0.25);
    const swayX = Math.cos(swayPhase * 0.75) * (this.idleParams.swayAngle * 0.5);

    for (let i = 0; i < this.treeNodes.length; i++) {
      const node = this.treeNodes[i];
      node.rotation.z = (node.userData.baseRotZ || 0) + swayZ;
      node.rotation.x = (node.userData.baseRotX || 0) + swayX;
    }

    // 3. Foliage & Blossom Petals Wind Rustle
    const windPhase = this.elapsedTime * this.idleParams.foliageWindSpeed;
    for (let i = 0; i < this.foliageNodes.length; i++) {
      const node = this.foliageNodes[i];
      const offset = i * 1.15;
      node.rotation.z = (node.userData.baseRotZ || 0) + Math.sin(windPhase + offset) * this.idleParams.foliageWindStrength;
      node.rotation.x = (node.userData.baseRotX || 0) + Math.cos(windPhase * 0.85 + offset) * (this.idleParams.foliageWindStrength * 0.6);
    }

    // 4. Hanging Lantern Pendulum Swing
    if (this.lanternNode) {
      const lanternPhase = this.elapsedTime * this.idleParams.lanternSwingSpeed;
      this.lanternNode.rotation.z = (this.lanternNode.userData.baseRotZ || 0) + Math.sin(lanternPhase) * this.idleParams.lanternSwingAngle;
    }

    // 5. Blossom Emissive Shimmer
    const shimmer = Math.sin(this.elapsedTime * 2.2) * 0.035;
    for (let i = 0; i < this.blossomMaterials.length; i++) {
      const mat = this.blossomMaterials[i];
      if (mat.emissive) {
        const baseGlow = this.currentBloom > 1.0 ? (this.currentBloom - 1.0) * 0.8 + 0.25 : 0.12;
        mat.emissiveIntensity = THREE.MathUtils.clamp(baseGlow + shimmer, 0.0, 3.0);
      }
    }
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

    this.treeNodes = [];
    this.foliageNodes = [];
    this.blossomMaterials = [];
    this.interactiveMeshes = [];
    this.barkMesh = null;
    this.lanternNode = null;
    this.glassDomeMesh = null;
    this.baseMoundMeshes = [];
    this.picnicPropMeshes = [];

    super.dispose();
  }
}
