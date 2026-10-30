import * as THREE from 'three';
import { Sizes } from './Sizes.js';
import { Camera } from './Camera.js';
import { Renderer } from './Renderer.js';
import { Loop } from './Loop.js';
import { AssetLoader } from '../loaders/AssetLoader.js';
import { LoadingScreen } from '../ui/LoadingScreen.js';
import { PerfHUD } from '../ui/PerfHUD.js';
import { SceneOverlay } from '../ui/SceneOverlay.js';
import { PostProcessing } from '../postprocessing/PostProcessing.js';
import { World } from '../components/World.js';
import { InteractionManager } from '../interaction/InteractionManager.js';
import { StoryPanel } from '../ui/StoryPanel.js';
import { MiniTimeline } from '../ui/MiniTimeline.js';
import { PetalCatchGame } from '../games/PetalCatchGame.js';
import { LetterModal } from '../ui/LetterModal.js';
import { EasterEggModal } from '../ui/EasterEggModal.js';
import { CandleBlowModal } from '../interaction/CandleBlowModal.js';
import { BGMController } from '../audio/BGMController.js';
import { DebugGUI } from '../ui/DebugGUI.js';

export class SceneManager {
  static instance = null;

  constructor(canvas) {
    if (SceneManager.instance) {
      return SceneManager.instance;
    }
    SceneManager.instance = this;

    this.canvas = canvas || document.querySelector('canvas.webgl');
    if (!this.canvas) {
      throw new Error('[SceneManager] Canvas element .webgl not found in DOM.');
    }

    this._onResize = this._onResize.bind(this);
    this.init();
  }

  init() {
    // 1. Core Scene (Clear Japanese Sky Color)
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x82d5ff);

    // 2. Responsive Sizes & DPR Handler
    this.sizes = new Sizes();

    // 3. Camera Setup with CatmullRomCurve3 Track & Scroll/Swipe
    this.camera = new Camera(this);

    // 4. WebGL Renderer
    this.renderer = new Renderer(this);

    // 5. Post-Processing Pipeline (Bloom + Vignette + OutputPass) with Auto-Fallback
    this.postProcessing = new PostProcessing(this);

    // 6. Asset Loader & Initial Loading Screen
    this.assetLoader = new AssetLoader();
    this.loadingScreen = new LoadingScreen(this.assetLoader);

    // 7. World (Sky, Ground, SakuraTree, Petals, Polaroids)
    this.world = new World(this);

    // 8. Performance HUD & Telemetry
    this.perfHUD = new PerfHUD(this);

    // 9. Chapter Navigation Overlay, Hub & Controls
    this.sceneOverlay = new SceneOverlay(this);

    // 10. Pointer Interaction & Raycasting (Clean tap vs scroll detection)
    this.interaction = new InteractionManager(this);

    // 11. Story Panel Modal & Mini Timeline
    this.storyPanel = new StoryPanel(this);
    this.miniTimeline = new MiniTimeline(this);

    // 12. Mini Game: Tangkap Kelopak
    this.petalCatchGame = new PetalCatchGame();

    // 13. Finale Letter Modal & Secret Easter Egg
    this.letterModal = new LetterModal(this);
    this.easterEggModal = new EasterEggModal(this);

    // 14. Interactive Candle Blow Modal (Microphone Breath & Tap)
    this.candleBlowModal = new CandleBlowModal(this);
    this.candleBlowModal.on('close', () => {
      if (this.camera && this.camera.track) {
        this.camera.track.exitFocus(1.2);
      }
    });

    // 15. Background Music Controller (YouTube Q49pnA4jsp8)
    this.bgm = new BGMController('Q49pnA4jsp8');

    this.sceneOverlay.on('toggleBGM', () => {
      const isPlaying = this.bgm.toggle();
      this.sceneOverlay.updateMusicButton(isPlaying);
      this.sceneOverlay.showToast(
        isPlaying ? 'Musik diputar (YouTube)' : 'Musik dijeda',
        ''
      );
    });

    this.bgm.on('stateChange', (isPlaying) => {
      this.sceneOverlay.updateMusicButton(isPlaying);
    });

    this.sceneOverlay.on('playGame', () => {
      this.petalCatchGame.open();
    });

    this.sceneOverlay.on('openLetter', () => {
      this.letterModal.open();
    });

    this.sceneOverlay.on('openCake', () => {
      this.openCandleExperience();
    });

    this.petalCatchGame.on('win', () => {
      this.sceneOverlay.awardGoldenPetal();
    });

    this.letterModal.on('restart', () => {
      if (this.camera && this.camera.track) {
        this.camera.track.transitionTo(0.0, 2.0);
      }
      if (this.world?.sakuraTree) {
        this.world.sakuraTree.setBloomProgress(1.0, 1.5);
      }
    });

    // Wire World Polaroids with Interaction & UI
    this.initPolaroidInteractions();

    // 16. Live Tweaks & Idle Animation Debug Menu (#debug)
    this.debugGUI = new DebugGUI(this);

    // 14. Animation Loop
    this.loop = new Loop(this);

    this.sizes.on('resize', this._onResize);

    this.loop.start();
    this.assetLoader.loadInitialAssets();

    console.log('[SceneManager] 3D Polaroids, Raycasting, Camera Zoom, Story Panel & Timeline ready.');
  }

  initPolaroidInteractions() {
    if (!this.world || !this.world.polaroids) return;

    const setupUI = (memories) => {
      const targets = [...this.world.polaroids.interactiveMeshes];
      if (this.world.sakuraTree && this.world.sakuraTree.barkMesh) {
        targets.push(this.world.sakuraTree.barkMesh);
      }
      if (this.world.japaneseGarden && this.world.japaneseGarden.interactiveObjects) {
        targets.push(...this.world.japaneseGarden.interactiveObjects);
      }
      this.interaction.setClickables(targets);
      this.storyPanel.setMemories(memories);
      this.miniTimeline.setMemories(memories);
    };

    if (this.world.polaroids.memories && this.world.polaroids.memories.length > 0) {
      setupUI(this.world.polaroids.memories);
    } else {
      this.world.polaroids.on('loaded', (memories) => setupUI(memories));
    }

    // Hover response
    this.interaction.on('hover', (polaroidGroup, isHovered) => {
      this.world.polaroids.setHovered(polaroidGroup, isHovered);
    });

    // Japanese Garden Click Reactions (Cake, Ema Tablet, Hanami Bench, Birthday Sign)
    this.interaction.on('birthdaySignClick', () => {
      if (this.world?.japaneseGarden) {
        this.world.japaneseGarden.triggerCakeCelebration();
      }
      if (this.sceneOverlay) {
        this.sceneOverlay.showToast(
          'Selamat Ulang Tahun, Nur Syarifa Syuhada! Semoga panjang umur, sehat selalu, dan bahagia selamanya!',
          ''
        );
      }
      if (this.camera && this.camera.track) {
        this.camera.track.focusOnTarget(
          new THREE.Vector3(-2.45, 1.35, 3.8),
          new THREE.Vector3(-2.55, 1.05, 2.15),
          1.4
        );
        setTimeout(() => {
          this.camera.track.exitFocus(1.5);
        }, 4500);
      }
    });

    this.interaction.on('cakeClick', () => {
      this.openCandleExperience();
    });

    this.interaction.on('emaClick', () => {
      if (this.sceneOverlay) {
        this.sceneOverlay.showToast(
          'Papan Doa Ema: "Semoga Nur Syarifa Syuhada senantiasa dipenuhi cinta dan kebahagiaan abadi."',
          ''
        );
      }
      if (this.camera && this.camera.track) {
        this.camera.track.focusOnTarget(
          new THREE.Vector3(0.95, 0.95, 3.1),
          new THREE.Vector3(0.95, 0.85, 2.2),
          1.3
        );
        setTimeout(() => {
          this.camera.track.exitFocus(1.5);
        }, 4000);
      }
    });

    this.interaction.on('benchClick', () => {
      if (this.sceneOverlay) {
        this.sceneOverlay.showToast(
          'Duduk santai di bangku Hanami di bawah rindangnya bunga sakura...',
          ''
        );
      }
      if (this.camera && this.camera.track) {
        this.camera.track.focusOnTarget(
          new THREE.Vector3(2.25, 1.4, 2.9),
          new THREE.Vector3(2.1, 0.4, 1.05),
          1.4
        );
        setTimeout(() => {
          this.camera.track.exitFocus(1.5);
        }, 4200);
      }
    });

    this.interaction.on('centerBenchClick', () => {
      if (this.sceneOverlay) {
        this.sceneOverlay.showToast(
          'Bangku Kenangan Nur Syarifa Syuhada & Dill — Selamanya Bersamamu',
          ''
        );
      }
      if (this.world?.sakuraTree) {
        this.world.sakuraTree.burstPetals?.();
      }
      if (this.camera && this.camera.track) {
        this.camera.track.focusOnTarget(
          new THREE.Vector3(0.0, 1.25, 3.4),
          new THREE.Vector3(0.0, 0.48, 1.55),
          1.4
        );
        setTimeout(() => {
          this.camera.track.exitFocus(1.5);
        }, 4500);
      }
    });

    // 3D Raycasting Tap / Click
    this.interaction.on('select', (polaroidGroup, memory) => {
      this.openMemory(polaroidGroup, memory);
    });

    // Timeline selection
    this.miniTimeline.on('select', (memory, index) => {
      const polaroidGroup = this.world.polaroids.polaroids[index];
      if (polaroidGroup) {
        this.openMemory(polaroidGroup, memory);
      }
    });

    // Story Panel next/prev navigation
    this.storyPanel.on('navigate', (memory, index) => {
      const polaroidGroup = this.world.polaroids.polaroids[index];
      if (polaroidGroup) {
        this.openMemory(polaroidGroup, memory);
      }
    });

    // Story Panel close -> restore camera back to track
    this.storyPanel.on('closed', () => {
      if (this.camera && this.camera.track) {
        this.camera.track.exitFocus();
      }
      this.miniTimeline.clearActive();
      this.world.polaroids.setActive(null);
    });
  }

  openMemory(polaroidGroup, memory) {
    if (!polaroidGroup) return;

    this.world.polaroids.setActive(polaroidGroup);

    // Compute front-facing vantage point for polaroid zoom
    const pPos = new THREE.Vector3();
    polaroidGroup.getWorldPosition(pPos);

    const pQuat = new THREE.Quaternion();
    polaroidGroup.getWorldQuaternion(pQuat);

    const forward = new THREE.Vector3(0, 0, 1).applyQuaternion(pQuat).normalize();

    // 2.0 units in front of polaroid + 0.05 slight upward offset for balanced framing
    const targetPos = pPos.clone().addScaledVector(forward, 2.0).add(new THREE.Vector3(0, 0.05, 0));
    const targetLookAt = pPos.clone().add(new THREE.Vector3(0, 0.05, 0));

    if (this.camera && this.camera.track) {
      this.camera.track.focusOnTarget(targetPos, targetLookAt, 1.4);
    }

    const memoryIndex = polaroidGroup.userData?.index ?? 0;
    this.miniTimeline.setActive(memoryIndex);
    this.storyPanel.open(memory, memoryIndex);
  }

  openCandleExperience() {
    if (this.camera && this.camera.track) {
      // Dynamic focal point on the Birthday Cake celebration table in Japanese Garden
      const cakeWorldPos = new THREE.Vector3();
      if (this.world?.japaneseGarden?.cakeGroup) {
        this.world.japaneseGarden.cakeGroup.getWorldPosition(cakeWorldPos);
      } else {
        cakeWorldPos.set(2.15, 0.40, 1.65);
      }

      // Camera looks directly at the cake & candle flame
      const targetLookAt = new THREE.Vector3(cakeWorldPos.x, cakeWorldPos.y + 0.32, cakeWorldPos.z);
      // Position camera slightly elevated and in front of the cake table
      const targetCamPos = new THREE.Vector3(cakeWorldPos.x, cakeWorldPos.y + 0.58, cakeWorldPos.z + 1.15);

      this.camera.track.focusOnTarget(targetCamPos, targetLookAt, 1.25);
    }

    if (this.candleBlowModal) {
      // Slight delay for smooth camera motion before the modal interface fades in
      setTimeout(() => {
        this.candleBlowModal.open();
      }, 300);
    }
  }

  _onResize() {
    this.resize();
  }

  resize() {
    if (this.camera) this.camera.resize();
    if (this.renderer) this.renderer.resize();
    if (this.postProcessing) this.postProcessing.resize();
  }

  update(delta) {
    if (this.world) this.world.update(delta);
    if (this.camera) this.camera.update(delta);
    if (this.perfHUD) this.perfHUD.update();
  }

  render() {
    // Delegate to post-processing pipeline (handles auto-fallback to direct WebGL if FPS drops)
    if (this.postProcessing) {
      this.postProcessing.render();
    } else if (this.renderer) {
      this.renderer.render();
    }
  }

  dispose() {
    console.log('[SceneManager] Disposing scene resources...');

    if (this.loop) {
      this.loop.dispose();
      this.loop = null;
    }

    if (this.sizes) {
      this.sizes.off('resize');
      this.sizes.dispose();
      this.sizes = null;
    }

    if (this.letterModal) {
      this.letterModal.dispose();
      this.letterModal = null;
    }

    if (this.candleBlowModal) {
      this.candleBlowModal.dispose();
      this.candleBlowModal = null;
    }

    if (this.bgm) {
      this.bgm.dispose();
      this.bgm = null;
    }

    if (this.easterEggModal) {
      this.easterEggModal.dispose();
      this.easterEggModal = null;
    }

    if (this.petalCatchGame) {
      this.petalCatchGame.dispose();
      this.petalCatchGame = null;
    }

    if (this.interaction) {
      this.interaction.dispose();
      this.interaction = null;
    }

    if (this.storyPanel) {
      this.storyPanel.dispose();
      this.storyPanel = null;
    }

    if (this.miniTimeline) {
      this.miniTimeline.dispose();
      this.miniTimeline = null;
    }

    if (this.sceneOverlay) {
      this.sceneOverlay.dispose();
      this.sceneOverlay = null;
    }

    if (this.perfHUD) {
      this.perfHUD.dispose();
      this.perfHUD = null;
    }

    if (this.debugGUI) {
      this.debugGUI.dispose();
      this.debugGUI = null;
    }

    if (this.postProcessing) {
      this.postProcessing.dispose();
      this.postProcessing = null;
    }

    if (this.world) {
      this.world.dispose();
      this.world = null;
    }

    if (this.camera) {
      this.camera.dispose();
      this.camera = null;
    }

    if (this.scene) {
      this.scene.traverse((child) => {
        if (child.isMesh) {
          if (child.geometry) child.geometry.dispose();
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach((mat) => mat.dispose());
            } else {
              child.material.dispose();
            }
          }
        }
      });
      this.scene.clear();
      this.scene = null;
    }

    if (this.assetLoader) {
      this.assetLoader.dispose();
      this.assetLoader = null;
    }

    if (this.loadingScreen) {
      this.loadingScreen.dispose();
      this.loadingScreen = null;
    }

    if (this.renderer) {
      this.renderer.dispose();
      this.renderer = null;
    }

    SceneManager.instance = null;
    console.log('[SceneManager] All resources disposed.');
  }
}
