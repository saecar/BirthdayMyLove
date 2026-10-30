import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';

/**
 * Calculates accurate ground elevation across the Japanese garden terrain.
 * The central courtyard (dist < 3.2m) is leveled at Y = 0.0 for benches and picnic setups,
 * then gently blends into rolling green hills.
 */
export function getGroundElevation(x, z) {
  const dist = Math.sqrt(x * x + z * z);
  if (dist < 3.2) {
    return 0.0;
  }
  const blend = Math.min(1.0, (dist - 3.2) / 2.5);
  let y = Math.sin(x * 0.32) * Math.cos(z * 0.32) * 0.32 + Math.sin(x * 0.16 + z * 0.2) * 0.18;
  if (dist > 14) {
    y -= (dist - 14) * 0.12;
  }
  return y * blend;
}

export class Ground {
  constructor(sceneManager) {
    this.sceneManager = sceneManager;
    this.scene = this.sceneManager.scene;

    this.init();
  }

  init() {
    // 1. Manicured Japanese Garden Terrain Geometry
    const size = 38;
    const segments = 54;
    this.geometry = new THREE.PlaneGeometry(size, size, segments, segments);
    this.geometry.rotateX(-Math.PI * 0.5);

    const positions = this.geometry.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const z = positions.getZ(i);
      positions.setY(i, getGroundElevation(x, z));
    }

    this.geometry.computeVertexNormals();

    // 2. Stylized Japanese Garden Grass Material with Procedural Moss & Blade Texture
    this.grassTexture = this.createGrassTexture();
    this.grassBumpTexture = this.createGrassBumpTexture();

    this.material = new THREE.MeshStandardMaterial({
      map: this.grassTexture,
      bumpMap: this.grassBumpTexture,
      bumpScale: 0.035,
      roughness: 0.88,
      metalness: 0.02,
      flatShading: false
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.receiveShadow = true;
    this.scene.add(this.mesh);

    // 3. 3D Stylized Grass Blade Tufts (InstancedMesh - Single Draw Call)
    this.initGrassTufts();

    // 4. Merged Garden Stepping Stones (Tobi-ishi / 飛び石) Leading to Benches
    const stoneGeo = new THREE.CylinderGeometry(0.36, 0.42, 0.09, 8);
    const stoneOffsets = [
      { x: 1.35, z: 1.25, r: 0.3 },
      { x: 1.95, z: 0.8, r: -0.2 },
      { x: 2.65, z: 1.45, r: 0.5 },
      { x: 2.15, z: 2.05, r: -0.3 },
      { x: 1.55, z: 2.55, r: 0.4 },
      { x: -1.15, z: 1.45, r: -0.4 },
      { x: -1.75, z: 0.95, r: 0.2 },
      { x: -2.35, z: 1.55, r: 0.35 },
      { x: 0.0, z: 2.85, r: 0.1 }
    ];

    const stoneGeometries = [];
    stoneOffsets.forEach((s) => {
      const g = stoneGeo.clone();
      g.rotateY(s.r);
      const elev = getGroundElevation(s.x, s.z);
      g.translate(s.x, elev + 0.045, s.z);
      stoneGeometries.push(g);
    });

    this.mergedStonesGeo = BufferGeometryUtils.mergeGeometries(stoneGeometries);
    stoneGeo.dispose();
    stoneGeometries.forEach((g) => g.dispose());

    this.stonesMaterial = new THREE.MeshStandardMaterial({
      color: 0x767984,        // Weathered Japanese river stone
      roughness: 0.88,
      metalness: 0.08
    });

    this.stonesMesh = new THREE.Mesh(this.mergedStonesGeo, this.stonesMaterial);
    this.stonesMesh.receiveShadow = true;
    this.stonesMesh.castShadow = true;
    this.scene.add(this.stonesMesh);
  }

  /**
   * Generates a rich, hand-painted Japanese garden moss & lawn texture
   */
  createGrassTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    // 1. Natural Japanese Moss Base (Deep matcha & spring emerald tones)
    ctx.fillStyle = '#3a6628';
    ctx.fillRect(0, 0, 1024, 1024);

    // 2. Multi-tone organic moss & lawn patches
    const tones = ['#4a7b33', '#2d531d', '#54873c', '#335c23', '#416f2d', '#5c9343'];
    for (let i = 0; i < 480; i++) {
      const px = Math.random() * 1024;
      const py = Math.random() * 1024;
      const rad = 25 + Math.random() * 80;
      const grad = ctx.createRadialGradient(px, py, 0, px, py, rad);
      const col = tones[Math.floor(Math.random() * tones.length)];
      grad.addColorStop(0, col);
      grad.addColorStop(1, 'rgba(58, 102, 40, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(px, py, rad, 0, Math.PI * 2);
      ctx.fill();
    }

    // 3. Fine stylized lawn blade strokes
    ctx.lineWidth = 1.4;
    for (let i = 0; i < 22000; i++) {
      const x = Math.random() * 1024;
      const y = Math.random() * 1024;
      const len = 3 + Math.random() * 7;
      const angle = (Math.random() - 0.5) * 0.7 - Math.PI * 0.5;
      const isBright = Math.random() > 0.45;
      ctx.strokeStyle = isBright ? 'rgba(125, 188, 92, 0.28)' : 'rgba(28, 52, 18, 0.32)';
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
      ctx.stroke();
    }

    // 4. Subtle clover & tiny spring wildflower accents
    ctx.fillStyle = 'rgba(165, 220, 130, 0.35)';
    for (let i = 0; i < 600; i++) {
      const cx = Math.random() * 1024;
      const cy = Math.random() * 1024;
      ctx.beginPath();
      ctx.arc(cx, cy, 1.8, 0, Math.PI * 2);
      ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(6, 6);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    return texture;
  }

  /**
   * Generates a subtle micro-bump map for realistic tactile light scattering
   */
  createGrassBumpTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, 512, 512);

    const imgData = ctx.getImageData(0, 0, 512, 512);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const val = 115 + Math.floor(Math.random() * 55);
      data[i] = val;
      data[i + 1] = val;
      data[i + 2] = val;
    }
    ctx.putImageData(imgData, 0, 0);

    const bumpTex = new THREE.CanvasTexture(canvas);
    bumpTex.wrapS = THREE.RepeatWrapping;
    bumpTex.wrapT = THREE.RepeatWrapping;
    bumpTex.repeat.set(12, 12);
    return bumpTex;
  }

  /**
   * Instanced low-poly stylized grass tufts around courtyard pathways
   */
  initGrassTufts() {
    // 2 crossed triangular blades
    const bladeGeo = new THREE.PlaneGeometry(0.16, 0.22);
    bladeGeo.translate(0, 0.11, 0); // Base at Y = 0

    const bladeGeoCross = bladeGeo.clone();
    bladeGeoCross.rotateY(Math.PI * 0.5);

    const tuftGeo = BufferGeometryUtils.mergeGeometries([bladeGeo, bladeGeoCross]);
    bladeGeo.dispose();
    bladeGeoCross.dispose();

    const tuftMat = new THREE.MeshStandardMaterial({
      color: 0x548b3b,
      roughness: 0.72,
      metalness: 0.02,
      side: THREE.DoubleSide
    });

    const count = 130;
    this.tuftsMesh = new THREE.InstancedMesh(tuftGeo, tuftMat, count);
    this.tuftsMesh.receiveShadow = true;

    const dummy = new THREE.Object3D();
    let idx = 0;

    // Disperse tufts naturally around stepping stones, bench base, and tree trunk perimeter
    const clusters = [
      { cx: 0.0, cz: 1.55, count: 25, spread: 1.4 },   // Near center bench
      { cx: 1.8, cz: 1.2, count: 25, spread: 1.2 },    // Near tea table & cake
      { cx: -2.2, cz: 1.8, count: 25, spread: 1.2 },   // Near torii sign
      { cx: 0.0, cz: -0.6, count: 25, spread: 1.6 },   // Behind tree trunk
      { cx: 1.5, cz: 2.3, count: 30, spread: 1.8 }     // Garden stepping stone path
    ];

    clusters.forEach((c) => {
      for (let i = 0; i < c.count && idx < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * c.spread + 0.2;
        const x = c.cx + Math.cos(angle) * dist;
        const z = c.cz + Math.sin(angle) * dist;
        const y = getGroundElevation(x, z);

        dummy.position.set(x, y - 0.01, z);
        dummy.rotation.y = Math.random() * Math.PI;
        const scale = 0.7 + Math.random() * 0.55;
        dummy.scale.set(scale, scale * (0.8 + Math.random() * 0.4), scale);
        dummy.updateMatrix();

        this.tuftsMesh.setMatrixAt(idx++, dummy.matrix);
      }
    });

    this.tuftsMesh.instanceMatrix.needsUpdate = true;
    this.scene.add(this.tuftsMesh);
  }

  update(delta) {
    // Static terrain
  }

  dispose() {
    if (this.mesh) {
      this.scene.remove(this.mesh);
      if (this.geometry) this.geometry.dispose();
      if (this.material) this.material.dispose();
      if (this.grassTexture) this.grassTexture.dispose();
      if (this.grassBumpTexture) this.grassBumpTexture.dispose();
    }

    if (this.tuftsMesh) {
      this.scene.remove(this.tuftsMesh);
      if (this.tuftsMesh.geometry) this.tuftsMesh.geometry.dispose();
      if (this.tuftsMesh.material) this.tuftsMesh.material.dispose();
    }

    if (this.stonesMesh) {
      this.scene.remove(this.stonesMesh);
      if (this.mergedStonesGeo) this.mergedStonesGeo.dispose();
      if (this.stonesMaterial) this.stonesMaterial.dispose();
    }

    this.mesh = null;
    this.geometry = null;
    this.material = null;
    this.tuftsMesh = null;
    this.stonesMesh = null;
    this.mergedStonesGeo = null;
    this.stonesMaterial = null;
  }
}
