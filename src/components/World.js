import { Environment } from './Environment.js';
import { Sky } from './Sky.js';
import { Ground } from './Ground.js';
import { SakuraTree } from './SakuraTree.js';
import { Petals } from './Petals.js';
import { PolaroidManager } from './PolaroidManager.js';
import { JapaneseGarden } from './JapaneseGarden.js';

export class World {
  constructor(sceneManager) {
    this.sceneManager = sceneManager;
    this.scene = this.sceneManager.scene;

    this.elapsedTime = 0;

    this.init();
  }

  // Backward compatibility getter for any callers expecting picnicScene
  get picnicScene() {
    return this.sakuraTree;
  }

  init() {
    // 1. Lighting Setup
    this.environment = new Environment(this.sceneManager);

    // 2. Atmospheric Gradient Sky Dome (ShaderMaterial)
    this.sky = new Sky(this.sceneManager);

    // 3. Stylized Japanese Garden Ground
    this.ground = new Ground(this.sceneManager);

    // 4. 3D Sakura Spring Picnic Diorama (GLTF Model replacing procedural tree)
    this.sakuraTree = new SakuraTree(this.sceneManager);

    // 5. Authentic Japanese Garden Scene (Mount Fuji, Dedicated Birthday Cake & Ema Tablet for Nur Syarifa Syuhada)
    this.japaneseGarden = new JapaneseGarden(this.sceneManager);

    // 6. 2500 Falling Sakura Petals (InstancedMesh + GPU Wind Vertex Shader)
    this.petals = new Petals(this.sceneManager, 2500);

    // 7. 3D Floating Polaroids Gallery - attached to tree pivot so ropes sway with branches
    this.polaroids = new PolaroidManager(this.sceneManager);
    if (this.sakuraTree?.pivot && this.polaroids?.group) {
      this.sakuraTree.pivot.add(this.polaroids.group);
    }
  }

  update(delta) {
    this.elapsedTime += delta;

    if (this.sakuraTree) {
      this.sakuraTree.update(delta);
    }

    if (this.japaneseGarden) {
      this.japaneseGarden.update(delta, this.elapsedTime);
    }

    if (this.petals) {
      this.petals.update(delta, this.elapsedTime);
    }

    if (this.polaroids) {
      this.polaroids.update(delta, this.elapsedTime);
    }

    if (this.ground) {
      this.ground.update(delta);
    }

    if (this.sky) {
      this.sky.update(delta);
    }
  }

  dispose() {
    if (this.japaneseGarden) {
      this.japaneseGarden.dispose();
      this.japaneseGarden = null;
    }

    if (this.polaroids) {
      this.polaroids.dispose();
      this.polaroids = null;
    }

    if (this.environment) {
      this.environment.dispose();
      this.environment = null;
    }

    if (this.sky) {
      this.sky.dispose();
      this.sky = null;
    }

    if (this.ground) {
      this.ground.dispose();
      this.ground = null;
    }

    if (this.sakuraTree) {
      this.sakuraTree.dispose();
      this.sakuraTree = null;
    }

    if (this.petals) {
      this.petals.dispose();
      this.petals = null;
    }
  }
}
