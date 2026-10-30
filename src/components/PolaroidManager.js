import * as THREE from 'three';
import gsap from 'gsap';
import { EventEmitter } from '../utils/EventEmitter.js';

export class PolaroidManager extends EventEmitter {
  constructor(sceneManager) {
    super();

    this.sceneManager = sceneManager;
    this.scene = this.sceneManager.scene;
    this.renderer = this.sceneManager.renderer;

    this.group = new THREE.Group();
    this.group.name = 'PolaroidGallery';
    // Managed and attached to sakuraTree.pivot in World.js so ropes naturally move with the tree branches

    this.polaroids = [];
    this.interactiveMeshes = [];
    this.loadedTextures = new Map();
    this.hoveredPolaroid = null;
    this.activePolaroid = null;

    this.textureLoader = new THREE.TextureLoader();

    // Shared reusable geometries (Minimalist, delicate Japanese hanging card scale)
    this.frameGeometry = new THREE.BoxGeometry(0.58, 0.74, 0.012);
    this.photoGeometry = new THREE.PlaneGeometry(0.50, 0.50);
    this.pegGeometry = new THREE.BoxGeometry(0.038, 0.12, 0.028);
    this.stringGeometry = new THREE.CylinderGeometry(0.003, 0.003, 1.2, 6);

    // Shared materials
    this.frameMaterial = new THREE.MeshStandardMaterial({
      color: 0xfdfaf6,
      roughness: 0.85,
      metalness: 0.05,
      emissive: 0x000000,
      emissiveIntensity: 0.6
    });

    this.pegMaterial = new THREE.MeshStandardMaterial({
      color: 0xb5845c,
      roughness: 0.7,
      metalness: 0.1
    });

    this.stringMaterial = new THREE.MeshStandardMaterial({
      color: 0xdfcbaf,
      roughness: 0.9,
      metalness: 0.2
    });

    this.barkMaterial = new THREE.MeshStandardMaterial({
      color: 0x3d251a, // Dark Japanese cherry bark wood
      roughness: 0.85,
      metalness: 0.05
    });

    this.leafMaterial = new THREE.MeshStandardMaterial({
      color: 0x487d3a, // Fresh cherry leaf green
      roughness: 0.75,
      side: THREE.DoubleSide
    });

    this.blossomMaterial = new THREE.MeshStandardMaterial({
      color: 0xffadc2, // Soft sakura petal pink
      roughness: 0.6
    });

    this.init();
  }

  async init() {
    let memoriesData = [];
    try {
      const response = await fetch('/memories.json');
      if (response.ok) {
        memoriesData = await response.json();
      }
    } catch (err) {
      console.warn('[PolaroidManager] Failed to fetch /memories.json, using fallback data.', err);
    }

    if (!memoriesData || memoriesData.length === 0) {
      memoriesData = this.getFallbackMemories();
    }

    this.memories = memoriesData;
    this.buildPolaroids();
    this.trigger('loaded', [this.memories]);
  }

  getFallbackMemories() {
    return [
      {
        id: 'syarifa-potret',
        title: 'Nur Syarifa Syuhada',
        date: 'Spesial',
        location: 'Momen Ulang Tahun',
        tag: 'Birthday',
        caption: 'Potret manis Nur Syarifa Syuhada di hari ulang tahunnya.',
        fullStory: 'Selamat bertambah usia untuk Nur Syarifa Syuhada. Semoga di usia yang baru ini senantiasa diberi kesehatan, kebahagiaan, kemudahan dalam setiap urusan, dan tercapai semua harapan baik yang diinginkan.',
        position: [-1.55, 1.95, 1.65],
        rotation: [0.05, 0.32, -0.03],
        image: '/photos/photo-5.jpg'
      },
      {
        id: 'syarifa-selfie',
        title: 'Senyum Syarifa',
        date: 'Momen Favorit',
        location: 'Sudut Santai',
        tag: 'Foto Favorit',
        caption: 'Salah satu foto favorit yang selalu membawa suasana adem.',
        fullStory: 'Foto simpel tapi selalu punya tempat tersendiri. Terima kasih sudah selalu jadi sosok yang menyenangkan dan membawa energi positif di setiap hariku.',
        position: [-0.95, 2.45, 1.05],
        rotation: [0.04, 0.18, -0.02],
        image: '/photos/photo-6.jpg'
      },
      {
        id: 'syarifa-4grid',
        title: '4 Frame Syarifa',
        date: 'Koleksi Momen',
        location: 'Galeri Kenangan',
        tag: 'Aesthetic',
        caption: 'Empat ekspresi lucu yang tertangkap kamera.',
        fullStory: 'Setiap ekspresi punya keunikannya sendiri. Momen-momen santai seperti ini yang bikin memori kita selalu seru dan berkesan.',
        position: [-2.25, 2.10, 1.25],
        rotation: [0.04, 0.45, -0.03],
        image: '/photos/photo-7.jpg'
      },
      {
        id: 'roblox-jembatan',
        title: 'Duduk Santai di Jembatan',
        date: 'Roblox Moment',
        location: 'Puncak Salju Roblox',
        tag: 'Gaming',
        caption: 'Nongkrong berdua di pagar jembatan berlatar gunung salju.',
        fullStory: 'Momen waktu kita asyik main game bareng, nyari spot estetik di jembatan lalu duduk santai berdua sambil ngobrol santai sampai lupa waktu.',
        position: [1.55, 1.95, 1.55],
        rotation: [-0.05, -0.32, 0.03],
        image: '/photos/photo-3.jpg'
      },
      {
        id: 'roblox-rumput',
        title: 'Rebahan di Rumput',
        date: 'Roblox Moment',
        location: 'Padang Rumput Roblox',
        tag: 'Kembaran Creeper',
        caption: 'Rebahan di rumput hijau pakai baju Creeper kembaran.',
        fullStory: 'Keseruan waktu kita sengaja pakai baju hijau Creeper yang sama persis dan pose rebahan di tengah rumput sambil bawa boneka kecil.',
        position: [0.95, 2.45, 0.95],
        rotation: [-0.04, -0.18, 0.02],
        image: '/photos/photo-4.jpg'
      },
      {
        id: 'roblox-bukit',
        title: 'Pemandangan Bukit Hijau',
        date: 'Roblox Adventure',
        location: 'Tebing Padang Hijau',
        tag: 'Adventure',
        caption: 'Duduk di atas batu tebing melihat bukit dan barisan pohon pinus.',
        fullStory: 'Eksplorasi map berdua sampai nemu tebing batu tinggi dengan view pegunungan yang luas dan adem. Selalu seru setiap kali keliling map bareng kamu.',
        position: [2.25, 2.10, 1.15],
        rotation: [-0.04, -0.45, 0.03],
        image: '/photos/photo-8.jpg'
      },
      {
        id: 'roblox-kupu',
        title: 'Kupu-kupu Merah Muda',
        date: 'Momen Tenang',
        location: 'Ruang Santai',
        tag: 'Chill Time',
        caption: 'Istirahat berdua ditemani kupu-kupu merah muda yang beterbangan.',
        fullStory: 'Momen santai waktu rebahan di lantai kayu dengan suasana yang tenang dan kupu-kupu pink di sekitar kita.',
        position: [0.0, 2.95, 0.50],
        rotation: [0.06, 0.0, 0.0],
        image: '/photos/photo-9.jpg'
      },
      {
        id: 'roblox-batik',
        title: 'Lentera & Celana Batik',
        date: 'Momen Lucu',
        location: 'Rumah Kayu',
        tag: 'Outfit Unik',
        caption: 'Eksplorasi ruangan kayu dengan lentera dan outfit batik khas.',
        fullStory: 'Outfit paling unik waktu main bareng, bawa lentera antik dan celana motif batik yang bikin suasana game jadi makin ikonik dan seru.',
        position: [-1.75, 2.35, -0.35],
        rotation: [0.02, 0.55, 0.02],
        image: '/photos/photo-1.jpg'
      },
      {
        id: 'roblox-luna',
        title: 'Koleksi Hewan Lucu',
        date: 'Mini Game',
        location: 'Arena Hewan',
        tag: 'Fun Time',
        caption: 'Pose bareng laba-laba kecil yang gemes @Luna0evelyn.',
        fullStory: 'Tangkapan layar waktu main mini game bareng Luna, ngumpulin hewan kecil sampai lengkap dan pose bareng di akhir ronde permainan.',
        position: [1.75, 2.35, -0.30],
        rotation: [-0.02, -0.55, -0.02],
        image: '/photos/photo-2.jpg'
      }
    ];
  }

  /**
   * Center-crops any image onto a 512x512 CanvasTexture (cover mode)
   */
  loadCroppedPhotoTexture(imageSrc, photoMaterial, pGroup) {
    if (!imageSrc) return;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');

      const imgAspect = img.width / img.height;
      let sWidth, sHeight, sx, sy;
      if (imgAspect > 1) {
        sHeight = img.height;
        sWidth = img.height;
        sx = (img.width - sWidth) / 2;
        sy = 0;
      } else {
        sWidth = img.width;
        sHeight = img.width;
        sx = 0;
        sy = (img.height - sHeight) / 2;
      }

      ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, 512, 512);

      // Subtle warm vignette finish
      const vigGrad = ctx.createRadialGradient(256, 256, 190, 256, 256, 360);
      vigGrad.addColorStop(0, 'rgba(0,0,0,0)');
      vigGrad.addColorStop(1, 'rgba(0,0,0,0.16)');
      ctx.fillStyle = vigGrad;
      ctx.fillRect(0, 0, 512, 512);

      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.generateMipmaps = true;
      texture.minFilter = THREE.LinearMipmapLinearFilter;

      photoMaterial.map = texture;
      photoMaterial.needsUpdate = true;
      if (pGroup) {
        pGroup.userData.textureLoaded = true;
      }
    };
    img.src = imageSrc;
  }

  buildPolaroids() {
    // Exact branch coordinates directly encircling the sculpted tree trunk boughs in SakuraTree
    const branchAnchors = [
      new THREE.Vector3(-0.65, 2.15, 0.60), // 1. Syarifa Potret (Left-Front Primary Bough)
      new THREE.Vector3(-0.45, 2.25, 0.40), // 2. Syarifa Selfie (Left Inner Bough)
      new THREE.Vector3(-0.95, 2.10, 0.35), // 3. Syarifa 4-Grid (Left Lateral Bough)
      new THREE.Vector3(0.65, 2.15, 0.60),  // 4. Roblox Jembatan (Right-Front Primary Bough)
      new THREE.Vector3(0.45, 2.25, 0.40),  // 5. Roblox Rumput Creeper (Right Inner Bough)
      new THREE.Vector3(0.95, 2.10, 0.35),  // 6. Roblox Bukit Pinus (Right Lateral Bough)
      new THREE.Vector3(0.0, 2.30, 0.55),   // 7. Roblox Kupu (Center Arch Bough)
      new THREE.Vector3(-0.80, 2.20, -0.20),// 8. Roblox Batik (Left Canopy Flank)
      new THREE.Vector3(0.80, 2.20, -0.20)  // 9. Roblox Luna (Right Canopy Flank)
    ];

    this.memories.forEach((memory, index) => {
      const anchor = branchAnchors[index % branchAnchors.length];
      const [px, py, pz] = memory.position;
      const [rx, ry, rz] = memory.rotation;

      // 1. Branch Anchor Rig (Fixed at the tree branch wood)
      const rigGroup = new THREE.Group();
      rigGroup.name = `PolaroidRig_${memory.id}`;
      rigGroup.position.copy(anchor);

      // --- Handcrafted Hemp Twine Knot Encircling the Tree Branch ---
      const knotGroup = new THREE.Group();

      // Sprouting green twig offshoot with fresh leaves at the tie point
      const twigGeo = new THREE.CylinderGeometry(0.016, 0.01, 0.22, 6);
      twigGeo.rotateZ(0.65);
      twigGeo.translate(0.10, 0.06, 0.03);
      const twigMesh = new THREE.Mesh(twigGeo, this.barkMaterial);
      knotGroup.add(twigMesh);

      // 2 delicate green leaves on the twig
      const leafGeo = new THREE.PlaneGeometry(0.065, 0.12);
      leafGeo.rotateZ(0.4);
      const leaf1 = new THREE.Mesh(leafGeo, this.leafMaterial);
      leaf1.position.set(0.18, 0.12, 0.05);
      leaf1.rotation.y = 0.5;
      knotGroup.add(leaf1);

      const leaf2 = new THREE.Mesh(leafGeo, this.leafMaterial);
      leaf2.position.set(0.13, 0.10, -0.04);
      leaf2.rotation.y = -0.6;
      knotGroup.add(leaf2);

      // Cherry blossom petal puff at the knot
      const puffGeo = new THREE.IcosahedronGeometry(0.045, 1);
      const puff1 = new THREE.Mesh(puffGeo, this.blossomMaterial);
      puff1.position.set(-0.06, 0.06, 0.04);
      knotGroup.add(puff1);

      // Hemp twine collar encircling the branch tube
      const torusGeo = new THREE.TorusGeometry(0.065, 0.012, 8, 20);
      torusGeo.rotateX(Math.PI / 2);
      const torusMesh = new THREE.Mesh(torusGeo, this.stringMaterial);
      torusMesh.castShadow = true;
      knotGroup.add(torusMesh);

      // Tied knot center
      const knotBulb = new THREE.Mesh(new THREE.SphereGeometry(0.018, 8, 8), this.stringMaterial);
      knotBulb.position.set(0, -0.05, 0);
      knotBulb.castShadow = true;
      knotGroup.add(knotBulb);

      // Two dangling loose ends of twine
      const tail1 = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.002, 0.07, 6), this.stringMaterial);
      tail1.position.set(0.014, -0.075, 0.012);
      tail1.rotation.z = -0.28;
      knotGroup.add(tail1);

      const tail2 = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.002, 0.055, 6), this.stringMaterial);
      tail2.position.set(-0.012, -0.070, -0.01);
      tail2.rotation.z = 0.32;
      knotGroup.add(tail2);

      rigGroup.add(knotGroup);

      // --- 2. Pendulum Arm (Pivots at branch point 0,0,0 without detaching) ---
      const pendulumArm = new THREE.Group();

      // String length from branch knot down to top of peg
      const pegTopY = 0.43;
      const stringLength = 0.46 + (index % 3) * 0.05;

      // Twine Cylinder extending downward (delicate hemp string)
      const strGeo = new THREE.CylinderGeometry(0.0032, 0.0032, stringLength, 8);
      strGeo.translate(0, -stringLength * 0.5, 0);
      const stringMesh = new THREE.Mesh(strGeo, this.stringMaterial);
      stringMesh.castShadow = true;
      pendulumArm.add(stringMesh);

      // --- 3. Polaroid Card Group ---
      const pGroup = new THREE.Group();
      pGroup.name = `Polaroid_${memory.id}`;
      // Exact alignment: peg top touches -stringLength
      pGroup.position.set(0, -stringLength - pegTopY, 0);
      pGroup.rotation.set(rx, ry, rz);

      // Paper Frame
      const frameMesh = new THREE.Mesh(this.frameGeometry, this.frameMaterial.clone());
      frameMesh.castShadow = true;
      frameMesh.receiveShadow = true;
      pGroup.add(frameMesh);

      // Canvas / Photo texture (previews actual photo)
      const canvasTexture = this.createArtisticPlaceholder(memory, index);
      const photoMaterial = new THREE.MeshStandardMaterial({
        map: canvasTexture,
        roughness: 0.35,
        metalness: 0.02
      });
      const photoMesh = new THREE.Mesh(this.photoGeometry, photoMaterial);
      photoMesh.position.set(0, 0.07, 0.008);
      pGroup.add(photoMesh);

      // Immediately load and apply the real cropped photo texture
      if (memory.image && memory.image.trim() !== '') {
        this.loadCroppedPhotoTexture(memory.image, photoMaterial, pGroup);
      }

      // Wooden Peg (Clip) gripping top of frame
      const pegMesh = new THREE.Mesh(this.pegGeometry, this.pegMaterial);
      pegMesh.position.set(0, 0.37, 0.012);
      pegMesh.castShadow = true;
      pGroup.add(pegMesh);

      pendulumArm.add(pGroup);
      rigGroup.add(pendulumArm);

      // Save animation & interaction data
      pGroup.userData = {
        memory,
        index,
        baseRotX: rx,
        baseRotY: ry,
        baseRotZ: rz,
        frameMesh,
        photoMesh,
        pendulumArm,
        rigGroup,
        isPolaroid: true,
        textureLoaded: false
      };

      // Mark interactive picking targets
      frameMesh.userData = { polaroidGroup: pGroup, memory, index };
      photoMesh.userData = { polaroidGroup: pGroup, memory, index };

      this.group.add(rigGroup);
      this.polaroids.push(pGroup);
      this.interactiveMeshes.push(frameMesh, photoMesh);
    });

    console.log(`[PolaroidManager] ${this.polaroids.length} 3D Polaroids instantiated with tree-anchored pendulums.`);
  }

  /**
   * Generates a charming, retro-pastel watercolor placeholder canvas
   */
  createArtisticPlaceholder(memory, index) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Background romantic gradient
    const gradients = [
      ['#ffe6ec', '#ffb6c1', '#f6869e'], // Rose
      ['#fff4e6', '#ffe0b2', '#ffa726'], // Peach
      ['#e8f4fd', '#b3e5fc', '#81d4fa'], // Soft Sky Blue
      ['#f3e5f5', '#e1bee7', '#ce93d8']  // Twilight Violet
    ];
    const [c1, c2, c3] = gradients[index % gradients.length];
    const grad = ctx.createLinearGradient(0, 0, 0, 512);
    grad.addColorStop(0, c1);
    grad.addColorStop(0.5, c2);
    grad.addColorStop(1, c3);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);

    // Decorative inner vignette border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 14;
    ctx.strokeRect(16, 16, 480, 480);

    // Subtle bokeh dots
    ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
    for (let i = 0; i < 18; i++) {
      const bx = (Math.sin(i * 47) * 0.5 + 0.5) * 480 + 16;
      const by = (Math.cos(i * 83) * 0.5 + 0.5) * 480 + 16;
      const br = 8 + (i % 6) * 5;
      ctx.beginPath();
      ctx.arc(bx, by, br, 0, Math.PI * 2);
      ctx.fill();
    }

    // Number illustration per memory
    ctx.font = 'bold 84px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = '#422d6e';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(String(index + 1).padStart(2, '0'), 256, 190);

    // Date & Tag Text
    ctx.font = 'bold 26px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = '#422d6e';
    ctx.fillText(memory.title, 256, 305);

    ctx.font = '600 20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = '#ff2a70';
    ctx.fillText(`${memory.date} • ${memory.tag}`, 256, 350);

    // Hint text
    ctx.font = 'italic 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = 'rgba(66, 45, 110, 0.75)';
    ctx.fillText('Tap untuk membaca kenangan', 256, 420);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    return texture;
  }

  /**
   * Lazy load the real image when needed
   */
  async lazyLoadPhoto(pGroup) {
    if (!pGroup || pGroup.userData.textureLoaded) return;
    const memory = pGroup.userData.memory;

    if (!memory.image || memory.image.trim() === '') {
      return;
    }

    const photoMesh = pGroup.userData.photoMesh;
    if (photoMesh && photoMesh.material) {
      this.loadCroppedPhotoTexture(memory.image, photoMesh.material, pGroup);
    }
  }

  setHovered(polaroidGroup, isHovered) {
    if (this.hoveredPolaroid === polaroidGroup && isHovered) return;

    if (this.hoveredPolaroid && this.hoveredPolaroid !== polaroidGroup) {
      this._unhover(this.hoveredPolaroid);
    }

    if (isHovered && polaroidGroup) {
      this.hoveredPolaroid = polaroidGroup;
      const frameMesh = polaroidGroup.userData.frameMesh;
      if (frameMesh && frameMesh.material) {
        frameMesh.material.emissive.set(0xff75a0);
        frameMesh.material.emissiveIntensity = 0.45;
      }

      gsap.to(polaroidGroup.scale, {
        x: 1.08,
        y: 1.08,
        z: 1.08,
        duration: 0.35,
        ease: 'power2.out'
      });
    } else if (!isHovered && polaroidGroup) {
      this._unhover(polaroidGroup);
      if (this.hoveredPolaroid === polaroidGroup) {
        this.hoveredPolaroid = null;
      }
    }
  }

  _unhover(polaroidGroup) {
    const frameMesh = polaroidGroup.userData.frameMesh;
    if (frameMesh && frameMesh.material) {
      frameMesh.material.emissive.set(0x000000);
      frameMesh.material.emissiveIntensity = 0;
    }

    gsap.to(polaroidGroup.scale, {
      x: 1.0,
      y: 1.0,
      z: 1.0,
      duration: 0.35,
      ease: 'power2.out'
    });
  }

  setActive(polaroidGroup) {
    this.activePolaroid = polaroidGroup;
    if (polaroidGroup) {
      this.lazyLoadPhoto(polaroidGroup);
    }
  }

  update(delta, elapsed) {
    // Realistic pendular harmonic sway pivoting at branch connection
    for (let i = 0; i < this.polaroids.length; i++) {
      const p = this.polaroids[i];
      const u = p.userData;
      if (!u || !u.pendulumArm) continue;

      // Pendulum harmonic sway around the branch connection point
      const swayZ = Math.sin(elapsed * 1.3 + i * 1.4) * 0.032;
      const swayX = Math.cos(elapsed * 1.05 + i * 1.2) * 0.025;
      u.pendulumArm.rotation.z = swayZ;
      u.pendulumArm.rotation.x = swayX;

      // Subtle natural yaw fluttering on the card
      p.rotation.y = u.baseRotY + Math.sin(elapsed * 0.85 + i * 1.1) * 0.038;
    }
  }

  dispose() {
    this.polaroids.forEach((pGroup) => {
      gsap.killTweensOf(pGroup.scale);
      pGroup.traverse((child) => {
        if (child.isMesh) {
          if (child.material) {
            if (child.material.map) child.material.map.dispose();
            child.material.dispose();
          }
        }
      });
    });

    this.loadedTextures.forEach((tex) => tex.dispose());
    this.loadedTextures.clear();

    if (this.frameGeometry) this.frameGeometry.dispose();
    if (this.photoGeometry) this.photoGeometry.dispose();
    if (this.pegGeometry) this.pegGeometry.dispose();
    if (this.stringGeometry) this.stringGeometry.dispose();

    if (this.frameMaterial) this.frameMaterial.dispose();
    if (this.pegMaterial) this.pegMaterial.dispose();
    if (this.stringMaterial) this.stringMaterial.dispose();

    if (this.group && this.group.parent) {
      this.group.parent.remove(this.group);
    }

    this.group = null;
    this.polaroids = [];
    this.interactiveMeshes = [];
    super.dispose();
  }
}
