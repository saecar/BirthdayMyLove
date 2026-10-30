import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import gsap from 'gsap';

export class JapaneseGarden {
  constructor(sceneManager) {
    this.sceneManager = sceneManager;
    this.scene = this.sceneManager.scene;
    this.group = new THREE.Group();
    this.group.name = 'JapaneseGarden';

    this.interactiveObjects = [];
    this.candleLit = true;
    this.butterflies = [];

    this.init();
  }

  init() {
    this.buildMountFuji();
    // Benches and procedural tea table removed per user request for a cleaner, minimalist scene
    this.buildNodateParasol();
    this.buildBirthdayCake();
    this.buildBranchEmaPlaque();
    this.buildStoneLantern();
    this.buildFūrinWindChime();
    this.buildIrisFlowerBeds();
    this.buildFallenPetalsPatch();
    this.buildKomorebiLightMotes();
    this.buildAnimatedButterflies();
    this.buildSparkleSystem();
    this.buildCeremonialBirthdaySign();

    this.scene.add(this.group);
  }

  // =========================================================================
  // 1. Mount Fuji (富士山) in the Distance
  // =========================================================================
  buildMountFuji() {
    const fujiGroup = new THREE.Group();
    fujiGroup.position.set(-14, 2.5, -46);
    fujiGroup.rotation.y = 0.35;

    const radius = 24;
    const height = 15;
    const radialSegments = 40;
    const heightSegments = 16;
    const geo = new THREE.ConeGeometry(radius, height, radialSegments, heightSegments, true);

    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      const normalizedH = (y + height / 2) / height;
      const fujiProfile = Math.pow(1.0 - normalizedH, 1.45);
      const angle = Math.atan2(pos.getZ(i), pos.getX(i));
      const targetR = radius * fujiProfile;

      pos.setX(i, Math.cos(angle) * targetR);
      pos.setZ(i, Math.sin(angle) * targetR);

      if (normalizedH > 0.94) {
        pos.setY(i, height / 2 - 0.25);
      }
    }
    geo.computeVertexNormals();

    const fujiMat = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      depthWrite: true,
      uniforms: {
        uSnowColor: { value: new THREE.Color(0xffffff) },
        uBaseColor: { value: new THREE.Color(0x3e557d) },
        uMistColor: { value: new THREE.Color(0xa8dbf8) }
      },
      vertexShader: /* glsl */ `
        varying vec3 vWorldPos;
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uSnowColor;
        uniform vec3 uBaseColor;
        uniform vec3 uMistColor;
        varying vec3 vWorldPos;
        varying vec3 vNormal;

        void main() {
          float elevation = vWorldPos.y;
          float snowThreshold = 10.5 + sin(vWorldPos.x * 0.45) * 0.6;
          float snowT = smoothstep(snowThreshold - 1.2, snowThreshold + 0.8, elevation);

          vec3 mountainCol = mix(uBaseColor, uSnowColor, snowT);
          float mistT = smoothstep(6.0, -1.0, elevation);
          vec3 finalColor = mix(mountainCol, uMistColor, mistT * 0.65);

          vec3 lightDir = normalize(vec3(0.5, 0.8, 0.3));
          float diff = max(dot(vNormal, lightDir), 0.25);
          finalColor *= (0.75 + diff * 0.35);

          gl_FragColor = vec4(finalColor, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `
    });

    const fujiMesh = new THREE.Mesh(geo, fujiMat);
    fujiGroup.add(fujiMesh);
    this.group.add(fujiGroup);
  }

  // =========================================================================
  // 2. Bench #1: Traditional Japanese Red Tea Ceremony Bench (Nodate-dai)
  // =========================================================================
  buildTraditionalBench() {
    this.benchGroup = new THREE.Group();
    this.benchGroup.position.set(2.1, 0.0, 1.1);
    this.benchGroup.rotation.y = -0.38;

    const woodGeometries = [];
    const redClothGeometries = [];

    this.woodMaterial = new THREE.MeshStandardMaterial({
      color: 0x4a2d18,
      roughness: 0.8,
      metalness: 0.05
    });

    this.redClothMaterial = new THREE.MeshStandardMaterial({
      color: 0xba2434,
      roughness: 0.9,
      metalness: 0.05
    });

    this.goldHemMaterial = new THREE.MeshStandardMaterial({
      color: 0xdfb43a,
      roughness: 0.4,
      metalness: 0.6
    });

    // Bench top wooden board
    const benchTop = new THREE.BoxGeometry(1.65, 0.08, 0.68);
    benchTop.translate(0, 0.42, 0);
    woodGeometries.push(benchTop);

    // 4 Wooden legs (touching ground at Y = 0.0)
    const legGeo = new THREE.BoxGeometry(0.09, 0.42, 0.09);
    const legPositions = [
      [-0.72, 0.21, -0.25],
      [0.72, 0.21, -0.25],
      [-0.72, 0.21, 0.25],
      [0.72, 0.21, 0.25]
    ];
    legPositions.forEach(([x, y, z]) => {
      const g = legGeo.clone();
      g.translate(x, y, z);
      woodGeometries.push(g);
    });

    const strutLong1 = new THREE.BoxGeometry(1.48, 0.05, 0.05);
    strutLong1.translate(0, 0.16, -0.25);
    woodGeometries.push(strutLong1);

    const strutLong2 = new THREE.BoxGeometry(1.48, 0.05, 0.05);
    strutLong2.translate(0, 0.16, 0.25);
    woodGeometries.push(strutLong2);

    // Red Felt Runner (Mosen)
    const clothTop = new THREE.BoxGeometry(1.68, 0.035, 0.72);
    clothTop.translate(0, 0.47, 0);
    redClothGeometries.push(clothTop);

    const skirtFront = new THREE.BoxGeometry(1.68, 0.16, 0.02);
    skirtFront.translate(0, 0.39, 0.36);
    redClothGeometries.push(skirtFront);

    const skirtBack = new THREE.BoxGeometry(1.68, 0.16, 0.02);
    skirtBack.translate(0, 0.39, -0.36);
    redClothGeometries.push(skirtBack);

    const mergedWoodGeo = BufferGeometryUtils.mergeGeometries(woodGeometries);
    woodGeometries.forEach((g) => g.dispose());
    const benchWoodMesh = new THREE.Mesh(mergedWoodGeo, this.woodMaterial);
    benchWoodMesh.castShadow = true;
    benchWoodMesh.receiveShadow = true;
    this.benchGroup.add(benchWoodMesh);

    const mergedClothGeo = BufferGeometryUtils.mergeGeometries(redClothGeometries);
    redClothGeometries.forEach((g) => g.dispose());
    const benchClothMesh = new THREE.Mesh(mergedClothGeo, this.redClothMaterial);
    benchClothMesh.castShadow = true;
    benchClothMesh.receiveShadow = true;
    benchClothMesh.userData = { isBench: true };
    this.benchGroup.add(benchClothMesh);
    this.interactiveObjects.push(benchClothMesh);

    const goldTrim1 = new THREE.Mesh(new THREE.BoxGeometry(1.69, 0.015, 0.025), this.goldHemMaterial);
    goldTrim1.position.set(0, 0.31, 0.365);
    this.benchGroup.add(goldTrim1);

    const goldTrim2 = new THREE.Mesh(new THREE.BoxGeometry(1.69, 0.015, 0.025), this.goldHemMaterial);
    goldTrim2.position.set(0, 0.31, -0.365);
    this.benchGroup.add(goldTrim2);

    // Ivory Silk Cushion on one side of bench
    const cushionGeo = new THREE.BoxGeometry(0.44, 0.06, 0.38);
    cushionGeo.translate(-0.48, 0.51, 0.0);
    const cushionMat = new THREE.MeshStandardMaterial({ color: 0xfff0f3, roughness: 0.8 });
    const cushionMesh = new THREE.Mesh(cushionGeo, cushionMat);
    cushionMesh.castShadow = true;
    this.benchGroup.add(cushionMesh);

    this.group.add(this.benchGroup);
  }

  // =========================================================================
  // 3. Bench #2: Romantic Japanese Couple Park Bench with Slatted Backrest
  // =========================================================================
  buildRomanticParkBench() {
    this.parkBenchGroup = new THREE.Group();
    // Situated on the left side under the sakura canopy
    this.parkBenchGroup.position.set(-2.1, 0.0, 1.1);
    this.parkBenchGroup.rotation.y = 0.35;

    const woodSlatGeos = [];
    const castIronGeos = [];

    const slatWoodMat = new THREE.MeshStandardMaterial({
      color: 0x6e3c1b, // Warm cherry cedar planks
      roughness: 0.72,
      metalness: 0.05
    });

    const ironFrameMat = new THREE.MeshStandardMaterial({
      color: 0x1f1915, // Dark cast-iron / mahogany metal frame
      roughness: 0.6,
      metalness: 0.4
    });

    // 1. Seat Slats (4 contoured horizontal wooden planks)
    for (let i = 0; i < 4; i++) {
      const zOffset = -0.18 + i * 0.11;
      const slat = new THREE.BoxGeometry(1.45, 0.035, 0.09);
      slat.translate(0, 0.42 + (i === 0 ? 0.015 : 0), zOffset);
      woodSlatGeos.push(slat);
    }

    // 2. Backrest Slats (4 horizontal curved planks)
    for (let i = 0; i < 4; i++) {
      const yOffset = 0.52 + i * 0.1;
      const zOffset = -0.22 - i * 0.025;
      const slat = new THREE.BoxGeometry(1.45, 0.08, 0.025);
      slat.translate(0, yOffset, zOffset);
      woodSlatGeos.push(slat);
    }

    // 3. Cast Iron / Curved Wood Frame Sides (Legs & Curved Armrests)
    const legX = [-0.68, 0.68];
    legX.forEach((lx) => {
      // Front leg (rests at Y = 0.0)
      const fLeg = new THREE.CylinderGeometry(0.035, 0.04, 0.42, 8);
      fLeg.translate(lx, 0.21, 0.16);
      castIronGeos.push(fLeg);

      // Back leg & backrest support
      const bLeg = new THREE.CylinderGeometry(0.035, 0.04, 0.85, 8);
      bLeg.rotateX(-0.15);
      bLeg.translate(lx, 0.44, -0.22);
      castIronGeos.push(bLeg);

      // Curved Armrest
      const armrest = new THREE.BoxGeometry(0.05, 0.04, 0.42);
      armrest.translate(lx, 0.56, -0.02);
      castIronGeos.push(armrest);
    });

    const mergedSlats = BufferGeometryUtils.mergeGeometries(woodSlatGeos);
    woodSlatGeos.forEach((g) => g.dispose());
    const benchSlatsMesh = new THREE.Mesh(mergedSlats, slatWoodMat);
    benchSlatsMesh.castShadow = true;
    benchSlatsMesh.receiveShadow = true;
    benchSlatsMesh.userData = { isBench: true };
    this.parkBenchGroup.add(benchSlatsMesh);
    this.interactiveObjects.push(benchSlatsMesh);

    const mergedIron = BufferGeometryUtils.mergeGeometries(castIronGeos);
    castIronGeos.forEach((g) => g.dispose());
    const benchIronMesh = new THREE.Mesh(mergedIron, ironFrameMat);
    benchIronMesh.castShadow = true;
    benchIronMesh.receiveShadow = true;
    this.parkBenchGroup.add(benchIronMesh);

    // Couple's Silk Cushions on the Park Bench
    const cushionGeo = new THREE.BoxGeometry(0.42, 0.06, 0.36);
    const pinkCushionMat = new THREE.MeshStandardMaterial({
      color: 0xff75a0, // Sakura pink silk cushion
      roughness: 0.85
    });
    const cushion1 = new THREE.Mesh(cushionGeo, pinkCushionMat);
    cushion1.position.set(0.28, 0.45, -0.02);
    cushion1.castShadow = true;
    this.parkBenchGroup.add(cushion1);

    const creamCushionMat = new THREE.MeshStandardMaterial({
      color: 0xfff2e0, // Cream silk cushion
      roughness: 0.85
    });
    const cushion2 = new THREE.Mesh(cushionGeo, creamCushionMat);
    cushion2.position.set(-0.28, 0.45, -0.02);
    cushion2.castShadow = true;
    this.parkBenchGroup.add(cushion2);

    // Fresh Sakura Flower Bouquet resting in between cushions
    const bouquetGeo = new THREE.SphereGeometry(0.08, 8, 8);
    const bouquetMat = new THREE.MeshStandardMaterial({ color: 0xffadc2, roughness: 0.7 });
    const bouquetMesh = new THREE.Mesh(bouquetGeo, bouquetMat);
    bouquetMesh.scale.set(1.4, 0.6, 1.0);
    bouquetMesh.position.set(0.0, 0.46, -0.02);
    this.parkBenchGroup.add(bouquetMesh);

    this.group.add(this.parkBenchGroup);
  }

  // =========================================================================
  // 4. Center Cherry Tree Bench: Dedicated to Nur Syarifa Syuhada & Dill
  // =========================================================================
  buildCenterTreeBench() {
    this.centerBenchGroup = new THREE.Group();
    // Positioned right in the center lawn in front of the curved tree trunk
    this.centerBenchGroup.position.set(0.0, 0.0, 1.55);
    this.centerBenchGroup.rotation.y = 0.0;

    const woodSlatGeos = [];
    const castIronGeos = [];

    // Warm Japanese Hinoki / Polished Cedar Wood
    const benchWoodMat = new THREE.MeshStandardMaterial({
      color: 0x763e1d,
      roughness: 0.62,
      metalness: 0.06
    });

    // Antique Black Cast-Iron Metal Frame with subtle metallic sheen
    const castIronMat = new THREE.MeshStandardMaterial({
      color: 0x1b1c1e,
      roughness: 0.45,
      metalness: 0.65
    });

    // 1. Contoured Wooden Seat Slats (5 horizontal slats)
    const seatSlatDefs = [
      { y: 0.405, z: -0.15 },
      { y: 0.416, z: -0.06 },
      { y: 0.422, z: 0.03 },
      { y: 0.418, z: 0.12 },
      { y: 0.405, z: 0.21 }
    ];

    seatSlatDefs.forEach((def) => {
      const slat = new THREE.BoxGeometry(1.52, 0.032, 0.078);
      slat.translate(0, def.y, def.z);
      woodSlatGeos.push(slat);
    });

    // 2. Ergonomic Backrest Slats (5 horizontal slats)
    const backSlatDefs = [
      { y: 0.49, z: -0.18, h: 0.065, t: 0.024 },
      { y: 0.58, z: -0.21, h: 0.065, t: 0.024 },
      { y: 0.67, z: -0.24, h: 0.065, t: 0.024 },
      { y: 0.76, z: -0.27, h: 0.065, t: 0.024 },
      { y: 0.85, z: -0.30, h: 0.08,  t: 0.032 } // Sculpted crown crest
    ];

    backSlatDefs.forEach((def) => {
      const slat = new THREE.BoxGeometry(1.52, def.h, def.t);
      slat.rotateX(-0.16);
      slat.translate(0, def.y, def.z);
      woodSlatGeos.push(slat);
    });

    // 3. Antique Cast-Iron Support Stanchions (Left, Center, Right)
    const stanchionX = [-0.68, 0.0, 0.68];
    stanchionX.forEach((sx, idx) => {
      // Front curved leg (resting on lawn at Y = 0.0)
      const fLeg = new THREE.CylinderGeometry(0.032, 0.038, 0.42, 8);
      fLeg.rotateX(0.08);
      fLeg.translate(sx, 0.21, 0.18);
      castIronGeos.push(fLeg);

      // Foot pad front
      const footPadF = new THREE.CylinderGeometry(0.05, 0.055, 0.02, 10);
      footPadF.translate(sx, 0.01, 0.20);
      castIronGeos.push(footPadF);

      // Rear support leg
      const rLeg = new THREE.CylinderGeometry(0.032, 0.038, 0.43, 8);
      rLeg.rotateX(-0.16);
      rLeg.translate(sx, 0.21, -0.16);
      castIronGeos.push(rLeg);

      // Foot pad rear
      const footPadR = new THREE.CylinderGeometry(0.05, 0.055, 0.02, 10);
      footPadR.translate(sx, 0.01, -0.19);
      castIronGeos.push(footPadR);

      // Backrest spine upright
      const spine = new THREE.CylinderGeometry(0.03, 0.034, 0.52, 8);
      spine.rotateX(-0.16);
      spine.translate(sx, 0.65, -0.24);
      castIronGeos.push(spine);

      // Horizontal seat runner bar
      const seatBar = new THREE.BoxGeometry(0.045, 0.04, 0.44);
      seatBar.translate(sx, 0.38, 0.03);
      castIronGeos.push(seatBar);

      // Outer Armrests (left and right sides only)
      if (idx !== 1) {
        // Armrest top curve
        const armBar = new THREE.BoxGeometry(0.05, 0.035, 0.42);
        armBar.translate(sx, 0.55, 0.02);
        castIronGeos.push(armBar);

        // Armrest front post
        const armPost = new THREE.CylinderGeometry(0.025, 0.028, 0.16, 8);
        armPost.translate(sx, 0.46, 0.19);
        castIronGeos.push(armPost);
      }
    });

    // Cross brace stretcher bar underneath connecting legs
    const crossBar1 = new THREE.CylinderGeometry(0.022, 0.022, 1.42, 8);
    crossBar1.rotateZ(Math.PI / 2);
    crossBar1.translate(0, 0.14, 0.17);
    castIronGeos.push(crossBar1);

    const crossBar2 = new THREE.CylinderGeometry(0.022, 0.022, 1.42, 8);
    crossBar2.rotateZ(Math.PI / 2);
    crossBar2.translate(0, 0.14, -0.16);
    castIronGeos.push(crossBar2);

    // Merge slats geometry for performance
    const mergedSlats = BufferGeometryUtils.mergeGeometries(woodSlatGeos);
    woodSlatGeos.forEach((g) => g.dispose());
    const benchSlatsMesh = new THREE.Mesh(mergedSlats, benchWoodMat);
    benchSlatsMesh.castShadow = true;
    benchSlatsMesh.receiveShadow = true;
    benchSlatsMesh.userData = {
      isCenterBench: true,
      isBench: true,
      name: 'Bangku Kenangan Nur Syarifa Syuhada & Dill'
    };
    this.interactiveObjects.push(benchSlatsMesh);
    this.centerBenchGroup.add(benchSlatsMesh);

    // Merge iron geometry
    const mergedIron = BufferGeometryUtils.mergeGeometries(castIronGeos);
    castIronGeos.forEach((g) => g.dispose());
    const benchIronMesh = new THREE.Mesh(mergedIron, castIronMat);
    benchIronMesh.castShadow = true;
    benchIronMesh.receiveShadow = true;
    this.centerBenchGroup.add(benchIronMesh);

    // 4. Polished Brass Dedication Plaque on Backrest
    const plaqueCanvas = document.createElement('canvas');
    plaqueCanvas.width = 512;
    plaqueCanvas.height = 256;
    const pCtx = plaqueCanvas.getContext('2d');

    // Rich metallic brass gradient
    const grad = pCtx.createLinearGradient(0, 0, 512, 256);
    grad.addColorStop(0.0, '#ffe082');
    grad.addColorStop(0.3, '#d4af37');
    grad.addColorStop(0.5, '#fff4cc');
    grad.addColorStop(0.7, '#c59b27');
    grad.addColorStop(1.0, '#ffd54f');
    pCtx.fillStyle = grad;
    pCtx.fillRect(0, 0, 512, 256);

    // Ornate Border
    pCtx.strokeStyle = '#6d4c13';
    pCtx.lineWidth = 8;
    pCtx.strokeRect(12, 12, 488, 232);
    pCtx.strokeStyle = '#bfa15f';
    pCtx.lineWidth = 3;
    pCtx.strokeRect(22, 22, 468, 212);

    // Corner decorative sakura blossoms
    pCtx.fillStyle = '#ff6f91';
    [[32, 32], [480, 32], [32, 224], [480, 224]].forEach(([cx, cy]) => {
      pCtx.beginPath();
      pCtx.arc(cx, cy, 7, 0, Math.PI * 2);
      pCtx.fill();
    });

    // Text Inscription
    pCtx.textAlign = 'center';
    pCtx.textBaseline = 'middle';

    // Japanese kanji header
    pCtx.font = '600 24px "Noto Serif JP", serif';
    pCtx.fillStyle = '#4a2c11';
    pCtx.fillText('〜 桜の木の下で 〜', 256, 56);

    // Main Names
    pCtx.font = 'bold 36px "Cinzel", "Playfair Display", serif';
    pCtx.fillStyle = '#8b1e3f'; // Elegant deep crimson
    pCtx.fillText('Nur Syarifa Syuhada & Dill', 256, 114);

    // Warm Birthday Greeting
    pCtx.font = '600 23px "Playfair Display", Georgia, serif';
    pCtx.fillStyle = '#5d3814';
    pCtx.fillText('Selamat Ulang Tahun • Happy Birthday', 256, 172);

    pCtx.font = '500 18px "Noto Serif JP", serif';
    pCtx.fillStyle = '#7a4e23';
    pCtx.fillText('祝・お誕生日おめでとう', 256, 212);

    const plaqueTex = new THREE.CanvasTexture(plaqueCanvas);
    const plaqueMat = new THREE.MeshStandardMaterial({
      map: plaqueTex,
      metalness: 0.8,
      roughness: 0.25
    });

    const plaqueMesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.52, 0.24, 0.015),
      plaqueMat
    );
    plaqueMesh.rotateX(-0.16);
    plaqueMesh.position.set(0.0, 0.70, -0.248);
    plaqueMesh.userData = {
      isCenterBench: true,
      isBench: true,
      name: 'Plakat Cinta Nur Syarifa Syuhada'
    };
    this.interactiveObjects.push(plaqueMesh);
    this.centerBenchGroup.add(plaqueMesh);

    // 4 Corner Gold Screws/Rivets on Plaque
    const screwMat = new THREE.MeshStandardMaterial({ color: 0xffd700, metalness: 0.9, roughness: 0.2 });
    const screwGeo = new THREE.CylinderGeometry(0.008, 0.008, 0.02, 8);
    screwGeo.rotateX(Math.PI / 2);
    [
      [-0.23, 0.09], [0.23, 0.09],
      [-0.23, -0.09], [0.23, -0.09]
    ].forEach(([sx, sy]) => {
      const screw = new THREE.Mesh(screwGeo, screwMat);
      screw.position.set(sx, sy, 0.008);
      plaqueMesh.add(screw);
    });

    // 5. Couple's Silk Cushions
    // Sakura Pink Silk Cushion (Left)
    const cushionGeo = new THREE.BoxGeometry(0.42, 0.075, 0.38);
    const pinkCushionMat = new THREE.MeshStandardMaterial({
      color: 0xff8da1,
      roughness: 0.75,
      metalness: 0.05
    });
    const cushion1 = new THREE.Mesh(cushionGeo, pinkCushionMat);
    cushion1.position.set(-0.38, 0.445, 0.03);
    cushion1.castShadow = true;
    cushion1.userData = { isCenterBench: true, isBench: true };
    this.interactiveObjects.push(cushion1);
    this.centerBenchGroup.add(cushion1);

    // Cushion Button indentation
    const buttonMat = new THREE.MeshStandardMaterial({ color: 0xff5376, roughness: 0.4 });
    const button1 = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.08, 10), buttonMat);
    button1.position.set(-0.38, 0.448, 0.03);
    this.centerBenchGroup.add(button1);

    // Ivory Cream Silk Cushion (Right)
    const creamCushionMat = new THREE.MeshStandardMaterial({
      color: 0xfff6ec,
      roughness: 0.75,
      metalness: 0.05
    });
    const cushion2 = new THREE.Mesh(cushionGeo, creamCushionMat);
    cushion2.position.set(0.38, 0.445, 0.03);
    cushion2.castShadow = true;
    cushion2.userData = { isCenterBench: true, isBench: true };
    this.interactiveObjects.push(cushion2);
    this.centerBenchGroup.add(cushion2);

    const goldBtnMat = this.goldHemMaterial || new THREE.MeshStandardMaterial({ color: 0xdfb43a, roughness: 0.4, metalness: 0.6 });
    const button2 = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.08, 10), goldBtnMat);
    button2.position.set(0.38, 0.448, 0.03);
    this.centerBenchGroup.add(button2);

    // 6. Celebratory Birthday Flower Bouquet in the Center
    const bouquetGroup = new THREE.Group();
    bouquetGroup.position.set(0.0, 0.455, 0.04);
    bouquetGroup.rotation.z = -0.08;

    // Kraft paper wrapping
    const paperMat = new THREE.MeshStandardMaterial({ color: 0xc4a482, roughness: 0.85 });
    const paperCone = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.22, 10, 1, true), paperMat);
    paperCone.rotation.x = Math.PI / 2.3;
    paperCone.position.set(0, 0.02, -0.04);
    bouquetGroup.add(paperCone);

    // Ribbon bow
    const bowMat = new THREE.MeshStandardMaterial({ color: 0xff6b8b, roughness: 0.6 });
    const bowMesh = new THREE.Mesh(new THREE.TorusGeometry(0.035, 0.012, 8, 12), bowMat);
    bowMesh.rotation.y = Math.PI / 2;
    bowMesh.position.set(0, 0.03, 0.05);
    bouquetGroup.add(bowMesh);

    // Fresh Flowers (Blush Sakura Roses, White Camellias)
    const flowerColors = [0xff8da1, 0xffffff, 0xffb7c5, 0xff6f91, 0xffe0b2];
    flowerColors.forEach((col, fIdx) => {
      const fMat = new THREE.MeshStandardMaterial({ color: col, roughness: 0.5 });
      const flower = new THREE.Mesh(new THREE.DodecahedronGeometry(0.035, 1), fMat);
      const angle = (fIdx / flowerColors.length) * Math.PI * 2;
      const rad = 0.042;
      flower.position.set(Math.cos(angle) * rad, 0.04 + (fIdx % 2) * 0.015, 0.08 + Math.sin(angle) * rad);
      flower.scale.set(1.0, 0.7, 1.0);
      bouquetGroup.add(flower);
    });

    // Delicate green leaves
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x4a7c59, roughness: 0.7 });
    for (let l = 0; l < 4; l++) {
      const leaf = new THREE.Mesh(new THREE.ConeGeometry(0.025, 0.07, 4), leafMat);
      const lAngle = (l / 4) * Math.PI * 2 + 0.3;
      leaf.position.set(Math.cos(lAngle) * 0.07, 0.03, 0.08 + Math.sin(lAngle) * 0.07);
      leaf.rotation.set(0.4, lAngle, 0.4);
      bouquetGroup.add(leaf);
    }
    this.centerBenchGroup.add(bouquetGroup);

    // 7. Scattered Sakura Petals on the Wooden Seat
    const petalGeo = new THREE.IcosahedronGeometry(0.026, 1);
    petalGeo.scale(1.2, 0.2, 0.8);
    const petalMat = new THREE.MeshStandardMaterial({ color: 0xffadc2, roughness: 0.6 });
    for (let i = 0; i < 9; i++) {
      const p = new THREE.Mesh(petalGeo, petalMat);
      p.position.set((Math.random() - 0.5) * 1.35, 0.428, -0.08 + Math.random() * 0.28);
      p.rotation.set((Math.random() - 0.5) * 0.2, Math.random() * Math.PI, (Math.random() - 0.5) * 0.2);
      this.centerBenchGroup.add(p);
    }

    // 8. Subtle Warm Ambient Lighting Underneath Bench
    const underBenchLight = new THREE.PointLight(0xffbe85, 0.4, 2.2);
    underBenchLight.position.set(0.0, 0.2, 0.0);
    this.centerBenchGroup.add(underBenchLight);

    this.group.add(this.centerBenchGroup);
  }

  // =========================================================================
  // 5. Traditional Japanese Red Parasol (Nodate-gasa)
  // =========================================================================
  buildNodateParasol() {
    this.parasolGroup = new THREE.Group();
    // Shifted rightward along X from user perspective to open up the central garden
    this.parasolGroup.position.set(3.55, 0.0, 0.65);
    this.parasolGroup.rotation.z = 0.05;
    this.parasolGroup.rotation.y = 0.4;

    const poleGeo = new THREE.CylinderGeometry(0.038, 0.045, 2.7, 10);
    poleGeo.translate(0, 1.35, 0);
    const bambooMat = new THREE.MeshStandardMaterial({
      color: 0x3d2716,
      roughness: 0.7
    });
    const poleMesh = new THREE.Mesh(poleGeo, bambooMat);
    poleMesh.castShadow = true;
    this.parasolGroup.add(poleMesh);

    const baseGeo = new THREE.CylinderGeometry(0.22, 0.26, 0.16, 8);
    baseGeo.translate(0, 0.08, 0);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x2e2f33,
      roughness: 0.9
    });
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.castShadow = true;
    this.parasolGroup.add(baseMesh);

    const canopyGeo = new THREE.ConeGeometry(1.25, 0.45, 24, 1, true);
    canopyGeo.translate(0, 2.65, 0);
    const canopyMat = new THREE.MeshStandardMaterial({
      color: 0xba2233,
      roughness: 0.75,
      metalness: 0.05,
      side: THREE.DoubleSide
    });
    const canopyMesh = new THREE.Mesh(canopyGeo, canopyMat);
    canopyMesh.castShadow = true;
    canopyMesh.receiveShadow = true;
    this.parasolGroup.add(canopyMesh);

    const finialGeo = new THREE.CylinderGeometry(0.06, 0.1, 0.12, 12);
    finialGeo.translate(0, 2.9, 0);
    const finialMat = new THREE.MeshStandardMaterial({
      color: 0x111111,
      roughness: 0.4
    });
    const finialMesh = new THREE.Mesh(finialGeo, finialMat);
    this.parasolGroup.add(finialMesh);

    this.group.add(this.parasolGroup);
  }

  // =========================================================================
  // 6. Japanese Tea Table (Chabudai) with Teapot, Matcha & Hanami Dango
  // =========================================================================
  buildTeaTableAndPicnic() {
    this.tableGroup = new THREE.Group();
    // Shifted rightward along X from user perspective to sit harmoniously beside the bench
    this.tableGroup.position.set(2.15, 0.0, 1.8);
    this.tableGroup.rotation.y = 0.25;

    // 1. Low Wooden Table (Chabudai)
    const tableTopGeo = new THREE.CylinderGeometry(0.42, 0.44, 0.05, 20);
    tableTopGeo.translate(0, 0.32, 0);
    const tableMesh = new THREE.Mesh(tableTopGeo, this.woodMaterial);
    tableMesh.castShadow = true;
    tableMesh.receiveShadow = true;
    this.tableGroup.add(tableMesh);

    // 3 Curved table legs (touching ground at Y = 0.0)
    const legGeo = new THREE.CylinderGeometry(0.028, 0.035, 0.30, 8);
    for (let i = 0; i < 3; i++) {
      const angle = (i / 3) * Math.PI * 2;
      const legMesh = new THREE.Mesh(legGeo, this.woodMaterial);
      legMesh.position.set(Math.cos(angle) * 0.32, 0.15, Math.sin(angle) * 0.32);
      legMesh.castShadow = true;
      this.tableGroup.add(legMesh);
    }

    // 2. Ceramic Japanese Teapot (Kyusu)
    const teapotMat = new THREE.MeshStandardMaterial({
      color: 0x2d3a34, // Celadon dark green ceramic
      roughness: 0.4,
      metalness: 0.1
    });
    const teapotBody = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 12), teapotMat);
    teapotBody.position.set(-0.14, 0.42, -0.08);
    teapotBody.castShadow = true;
    this.tableGroup.add(teapotBody);

    const teapotSpout = new THREE.Mesh(new THREE.ConeGeometry(0.025, 0.08, 8), teapotMat);
    teapotSpout.rotation.z = -Math.PI / 3;
    teapotSpout.position.set(-0.06, 0.43, -0.08);
    this.tableGroup.add(teapotSpout);

    // 3. Two Ceramic Tea Cups (Yunomi) with Green Tea
    const cupMat = new THREE.MeshStandardMaterial({
      color: 0xf5f3ee,
      roughness: 0.3
    });
    const teaMat = new THREE.MeshStandardMaterial({
      color: 0x5a7d36, // Fresh green matcha
      roughness: 0.2
    });

    [[-0.14, 0.37, 0.1], [-0.02, 0.37, 0.14]].forEach(([cx, cy, cz]) => {
      const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.03, 0.06, 12), cupMat);
      cup.position.set(cx, cy, cz);
      cup.castShadow = true;
      this.tableGroup.add(cup);

      const teaLiquid = new THREE.Mesh(new THREE.CircleGeometry(0.032, 12), teaMat);
      teaLiquid.rotation.x = -Math.PI / 2;
      teaLiquid.position.set(cx, cy + 0.025, cz);
      this.tableGroup.add(teaLiquid);
    });

    // 4. Hanami Dango Skewer on Small Wooden Tray (Pink, White, Green)
    const trayGeo = new THREE.BoxGeometry(0.24, 0.02, 0.14);
    const trayMat = new THREE.MeshStandardMaterial({ color: 0x8b5a2b, roughness: 0.7 });
    const trayMesh = new THREE.Mesh(trayGeo, trayMat);
    trayMesh.position.set(0.14, 0.355, 0.02);
    trayMesh.rotation.y = -0.3;
    this.tableGroup.add(trayMesh);

    // Dango Skewer Bamboo Stick
    const skewerGeo = new THREE.CylinderGeometry(0.003, 0.003, 0.2, 6);
    skewerGeo.rotateZ(Math.PI / 2);
    skewerGeo.translate(0.14, 0.38, 0.02);
    const skewerMesh = new THREE.Mesh(skewerGeo, new THREE.MeshBasicMaterial({ color: 0xd2b48c }));
    this.tableGroup.add(skewerMesh);

    // 3 Dango Dumpling Balls (Pink, White, Green)
    const dangoColors = [0xff8da1, 0xffffff, 0x6bb354];
    dangoColors.forEach((col, idx) => {
      const ballGeo = new THREE.SphereGeometry(0.026, 10, 10);
      const ballMat = new THREE.MeshStandardMaterial({ color: col, roughness: 0.5 });
      const ball = new THREE.Mesh(ballGeo, ballMat);
      ball.position.set(0.08 + idx * 0.05, 0.38, 0.02);
      ball.castShadow = true;
      this.tableGroup.add(ball);
    });

    // 5. Birthday Gift Box for Nur Syarifa Syuhada (Wrapped in Pink Furoshiki with Silk Ribbon)
    const giftBoxGeo = new THREE.BoxGeometry(0.22, 0.16, 0.2);
    giftBoxGeo.translate(0.22, 0.12, 0.35);
    const giftBoxMat = new THREE.MeshStandardMaterial({
      color: 0xffa0bc, // Pastel rose gift wrapping
      roughness: 0.5
    });
    const giftMesh = new THREE.Mesh(giftBoxGeo, giftBoxMat);
    giftMesh.castShadow = true;
    this.tableGroup.add(giftMesh);

    // Golden Ribbon band
    const ribbon1 = new THREE.Mesh(new THREE.BoxGeometry(0.225, 0.165, 0.035), this.goldHemMaterial);
    ribbon1.position.set(0.22, 0.12, 0.35);
    this.tableGroup.add(ribbon1);

    const ribbon2 = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.165, 0.205), this.goldHemMaterial);
    ribbon2.position.set(0.22, 0.12, 0.35);
    this.tableGroup.add(ribbon2);

    this.group.add(this.tableGroup);
  }

  // =========================================================================
  // 7. Dedicated Celebration Area & Birthday Cake for Nur Syarifa Syuhada
  // =========================================================================
  buildBirthdayCake() {
    this.cakeTableGroup = new THREE.Group();
    this.cakeTableGroup.name = 'BirthdayCakeCelebrationArea';
    // Dedicated celebratory spot in the front-right open lawn area
    this.cakeTableGroup.position.set(2.15, 0.0, 1.65);
    this.cakeTableGroup.rotation.y = -0.32;

    // 1. Traditional Japanese Hinoki wooden celebration table (Chabudai)
    const tableTopGeo = new THREE.CylinderGeometry(0.48, 0.50, 0.05, 32);
    tableTopGeo.translate(0, 0.35, 0);
    const tableMat = new THREE.MeshStandardMaterial({
      color: 0x4e2b14, // Rich polished cedar / Hinoki wood
      roughness: 0.65,
      metalness: 0.08
    });
    const tableTopMesh = new THREE.Mesh(tableTopGeo, tableMat);
    tableTopMesh.castShadow = true;
    tableTopMesh.receiveShadow = true;
    tableTopMesh.userData = { isCake: true };
    this.cakeTableGroup.add(tableTopMesh);
    this.interactiveObjects.push(tableTopMesh);

    // 4 Curved wooden legs
    const legGeo = new THREE.CylinderGeometry(0.026, 0.036, 0.35, 12);
    for (let i = 0; i < 4; i++) {
      const angle = (i / 4) * Math.PI * 2 + Math.PI / 4;
      const legMesh = new THREE.Mesh(legGeo, tableMat);
      legMesh.position.set(Math.cos(angle) * 0.36, 0.175, Math.sin(angle) * 0.36);
      legMesh.castShadow = true;
      this.cakeTableGroup.add(legMesh);
    }

    // Traditional Red Felt Runner Mat (Mosen) on table
    const runnerGeo = new THREE.CylinderGeometry(0.44, 0.44, 0.015, 32);
    runnerGeo.translate(0, 0.38, 0);
    const runnerMat = new THREE.MeshStandardMaterial({
      color: 0xba1e32, // Festive crimson red
      roughness: 0.85,
      metalness: 0.05
    });
    const runnerMesh = new THREE.Mesh(runnerGeo, runnerMat);
    runnerMesh.castShadow = true;
    runnerMesh.receiveShadow = true;
    runnerMesh.userData = { isCake: true };
    this.cakeTableGroup.add(runnerMesh);
    this.interactiveObjects.push(runnerMesh);

    // Decorative golden border ring around runner
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xe5b838,
      roughness: 0.35,
      metalness: 0.65
    });
    const goldRingGeo = new THREE.TorusGeometry(0.438, 0.008, 8, 32);
    goldRingGeo.rotateX(Math.PI / 2);
    goldRingGeo.translate(0, 0.388, 0);
    const goldRing = new THREE.Mesh(goldRingGeo, goldMat);
    this.cakeTableGroup.add(goldRing);

    // 2. Birthday Gift Box for Nur Syarifa Syuhada (Wrapped in Pink Furoshiki with Golden Ribbon)
    const giftBoxGeo = new THREE.BoxGeometry(0.18, 0.14, 0.18);
    giftBoxGeo.translate(0, 0.07, 0);
    const giftBoxMat = new THREE.MeshStandardMaterial({
      color: 0xffa0bc, // Pastel rose gift wrapping
      roughness: 0.5
    });
    const giftMesh = new THREE.Mesh(giftBoxGeo, giftBoxMat);
    giftMesh.position.set(-0.25, 0.388, -0.12);
    giftMesh.rotation.y = 0.25;
    giftMesh.castShadow = true;
    giftMesh.userData = { isCake: true };
    this.cakeTableGroup.add(giftMesh);
    this.interactiveObjects.push(giftMesh);

    // Golden Ribbon band for Gift Box
    const ribbon1 = new THREE.Mesh(new THREE.BoxGeometry(0.185, 0.145, 0.025), goldMat);
    ribbon1.position.copy(giftMesh.position);
    ribbon1.position.y += 0.07;
    ribbon1.rotation.y = 0.25;
    this.cakeTableGroup.add(ribbon1);

    const ribbon2 = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.145, 0.185), goldMat);
    ribbon2.position.copy(giftMesh.position);
    ribbon2.position.y += 0.07;
    ribbon2.rotation.y = 0.25;
    this.cakeTableGroup.add(ribbon2);

    const bowGeo = new THREE.SphereGeometry(0.03, 8, 8);
    bowGeo.scale(1.2, 0.6, 1.2);
    const bowMesh = new THREE.Mesh(bowGeo, goldMat);
    bowMesh.position.copy(giftMesh.position);
    bowMesh.position.y += 0.145;
    this.cakeTableGroup.add(bowMesh);

    // 3. Scattered Sakura Petals on celebration table
    const petalGeo = new THREE.IcosahedronGeometry(0.02, 1);
    petalGeo.scale(1.2, 0.2, 0.8);
    const petalMat = new THREE.MeshStandardMaterial({ color: 0xffadc2, roughness: 0.6 });
    for (let i = 0; i < 7; i++) {
      const p = new THREE.Mesh(petalGeo, petalMat);
      const pAngle = (i / 7) * Math.PI * 2 + 0.4;
      p.position.set(Math.cos(pAngle) * 0.32, 0.392, Math.sin(pAngle) * 0.32);
      p.rotation.set((Math.random() - 0.5) * 0.2, Math.random() * Math.PI, (Math.random() - 0.5) * 0.2);
      this.cakeTableGroup.add(p);
    }

    // 4. Warm Ambient Light underneath celebration table
    const underTableLight = new THREE.PointLight(0xffbe85, 0.45, 2.0);
    underTableLight.position.set(0, 0.2, 0);
    this.cakeTableGroup.add(underTableLight);

    // 5. Build Cake Group placed centered on table
    this.cakeGroup = new THREE.Group();
    this.cakeGroup.name = 'BirthdayCakeModel';
    this.cakeGroup.position.set(0.06, 0.388, 0.02);
    this.cakeGroup.scale.set(0.85, 0.85, 0.85);

    // Cake Stand
    const plateGeo = new THREE.CylinderGeometry(0.38, 0.32, 0.03, 24);
    const plateMat = new THREE.MeshStandardMaterial({
      color: 0xfaf6f0,
      roughness: 0.3,
      metalness: 0.2
    });
    const plateMesh = new THREE.Mesh(plateGeo, plateMat);
    plateMesh.position.y = 0.015;
    plateMesh.castShadow = true;
    this.cakeGroup.add(plateMesh);

    // Tier 1 Base Sponge + Whipped Cream
    const tier1Geo = new THREE.CylinderGeometry(0.3, 0.3, 0.14, 28);
    const cakeCreamMat = new THREE.MeshStandardMaterial({
      color: 0xfffcf7,
      roughness: 0.65,
      metalness: 0.02
    });
    const tier1Mesh = new THREE.Mesh(tier1Geo, cakeCreamMat);
    tier1Mesh.position.y = 0.1;
    tier1Mesh.castShadow = true;
    this.cakeGroup.add(tier1Mesh);

    // Strawberry cream ribbon
    const bandGeo = new THREE.CylinderGeometry(0.303, 0.303, 0.03, 28);
    const strawberryPinkMat = new THREE.MeshStandardMaterial({
      color: 0xff85a1,
      roughness: 0.6
    });
    const bandMesh = new THREE.Mesh(bandGeo, strawberryPinkMat);
    bandMesh.position.y = 0.1;
    this.cakeGroup.add(bandMesh);

    // Tier 2 Top Layer
    const tier2Geo = new THREE.CylinderGeometry(0.2, 0.2, 0.11, 24);
    const tier2Mesh = new THREE.Mesh(tier2Geo, cakeCreamMat);
    tier2Mesh.position.y = 0.225;
    tier2Mesh.castShadow = true;
    this.cakeGroup.add(tier2Mesh);

    // Fresh Strawberries
    const strawberryGeos = [];
    const berryBaseGeo = new THREE.ConeGeometry(0.035, 0.065, 8);
    berryBaseGeo.rotateX(Math.PI);

    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const r = 0.14;
      const g = berryBaseGeo.clone();
      g.translate(Math.cos(angle) * r, 0.31, Math.sin(angle) * r);
      strawberryGeos.push(g);
    }
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2 + 0.2;
      const r = 0.25;
      const g = berryBaseGeo.clone();
      g.translate(Math.cos(angle) * r, 0.19, Math.sin(angle) * r);
      strawberryGeos.push(g);
    }

    const mergedBerryGeo = BufferGeometryUtils.mergeGeometries(strawberryGeos);
    berryBaseGeo.dispose();
    strawberryGeos.forEach((g) => g.dispose());

    const berryMat = new THREE.MeshStandardMaterial({
      color: 0xdc143c,
      roughness: 0.35,
      metalness: 0.1
    });
    const strawberriesMesh = new THREE.Mesh(mergedBerryGeo, berryMat);
    strawberriesMesh.castShadow = true;
    this.cakeGroup.add(strawberriesMesh);

    // Birthday Candle
    const candleGeo = new THREE.CylinderGeometry(0.012, 0.012, 0.16, 12);
    const candleMat = new THREE.MeshStandardMaterial({
      color: 0xffd13b,
      roughness: 0.4
    });
    const candleMesh = new THREE.Mesh(candleGeo, candleMat);
    candleMesh.position.set(0, 0.36, 0);
    candleMesh.castShadow = true;
    this.cakeGroup.add(candleMesh);

    // Candle Flame
    const flameGeo = new THREE.ConeGeometry(0.022, 0.05, 8);
    this.flameMat = new THREE.MeshBasicMaterial({ color: 0xffaa22 });
    this.flameMesh = new THREE.Mesh(flameGeo, this.flameMat);
    this.flameMesh.position.set(0, 0.46, 0);
    this.cakeGroup.add(this.flameMesh);

    this.candleLight = new THREE.PointLight(0xff9922, 1.6, 3.5, 2.0);
    this.candleLight.position.set(0, 0.48, 0);
    this.cakeGroup.add(this.candleLight);

    // Chocolate Name Plaque on Cake
    const plaqueMesh = this.createCakePlaque();
    plaqueMesh.position.set(0, 0.23, 0.21);
    plaqueMesh.rotation.x = -0.35;
    this.cakeGroup.add(plaqueMesh);

    tier1Mesh.userData = { isCake: true };
    tier2Mesh.userData = { isCake: true };
    plateMesh.userData = { isCake: true };
    candleMesh.userData = { isCake: true };
    strawberriesMesh.userData = { isCake: true };
    plaqueMesh.userData = { isCake: true };
    this.interactiveObjects.push(tier1Mesh, tier2Mesh, plateMesh, candleMesh, strawberriesMesh, plaqueMesh);

    // Candle smoke particle system
    this.buildCandleSmoke();

    this.cakeTableGroup.add(this.cakeGroup);
    this.group.add(this.cakeTableGroup);
  }

  buildCandleSmoke() {
    const count = 30;
    const smokeGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);

    this.smokeVelocities = [];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = 0;
      positions[i * 3 + 1] = 0.46;
      positions[i * 3 + 2] = 0;
      this.smokeVelocities.push({
        x: (Math.random() - 0.5) * 0.04,
        y: 0.12 + Math.random() * 0.22,
        z: (Math.random() - 0.5) * 0.04
      });
    }

    smokeGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const smokeCanvas = document.createElement('canvas');
    smokeCanvas.width = 64;
    smokeCanvas.height = 64;
    const sctx = smokeCanvas.getContext('2d');
    const grad = sctx.createRadialGradient(32, 32, 2, 32, 32, 30);
    grad.addColorStop(0, 'rgba(240, 240, 245, 0.85)');
    grad.addColorStop(0.5, 'rgba(210, 215, 225, 0.4)');
    grad.addColorStop(1, 'rgba(190, 195, 210, 0.0)');
    sctx.fillStyle = grad;
    sctx.fillRect(0, 0, 64, 64);
    const smokeTex = new THREE.CanvasTexture(smokeCanvas);

    this.smokeMat = new THREE.PointsMaterial({
      size: 0.08,
      map: smokeTex,
      transparent: true,
      opacity: 0.0,
      depthWrite: false,
      blending: THREE.NormalBlending
    });

    this.smokePoints = new THREE.Points(smokeGeo, this.smokeMat);
    this.smokePoints.position.set(0, 0, 0);
    this.cakeGroup.add(this.smokePoints);
    this.isSmoking = false;
    this.smokeTimer = 0;
  }

  createCakePlaque() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 160;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#26140d';
    ctx.roundRect(4, 4, 504, 152, 20);
    ctx.fill();

    ctx.strokeStyle = '#e6b840';
    ctx.lineWidth = 6;
    ctx.stroke();

    ctx.strokeStyle = '#ffe485';
    ctx.lineWidth = 2;
    ctx.strokeRect(14, 14, 484, 132);

    ctx.fillStyle = '#ffeaa7';
    ctx.font = 'bold 26px "Segoe UI", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Happy Birthday', 256, 52);

    ctx.fillStyle = '#ff75a0';
    ctx.font = 'bold 32px "Georgia", serif';
    ctx.fillText('Nur Syarifa Syuhada', 256, 96);

    ctx.fillStyle = '#ffffff';
    ctx.font = '22px sans-serif';
    ctx.fillText('祝・お誕生日おめでとう', 256, 134);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;

    const geo = new THREE.PlaneGeometry(0.38, 0.12);
    const mat = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.4,
      metalness: 0.1,
      transparent: true
    });

    const mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = true;
    return mesh;
  }

  // =========================================================================
  // 8. Japanese Ema Prayer Tablet (Hanging from Tree Branch with Tied Knot!)
  // =========================================================================
  buildBranchEmaPlaque() {
    this.emaGroup = new THREE.Group();
    // Suspended directly from designated lower sakura branch
    this.emaGroup.position.set(0.35, 2.65, 0.85);
    this.emaGroup.rotation.y = -0.28;

    // 1. Red Braided Knot encircling the tree branch
    const branchKnotGeo = new THREE.TorusGeometry(0.075, 0.014, 8, 16);
    branchKnotGeo.rotateX(Math.PI / 2);
    branchKnotGeo.translate(0, 0.50, 0);
    const redCordMat = new THREE.MeshStandardMaterial({
      color: 0xd92638,
      roughness: 0.6
    });
    const knotMesh = new THREE.Mesh(branchKnotGeo, redCordMat);
    knotMesh.castShadow = true;
    this.emaGroup.add(knotMesh);

    // 2. Dual Hanging Red Silk Cords
    const cord1Geo = new THREE.CylinderGeometry(0.005, 0.005, 0.38, 6);
    cord1Geo.translate(-0.06, 0.30, 0);
    const cord1 = new THREE.Mesh(cord1Geo, redCordMat);
    this.emaGroup.add(cord1);

    const cord2 = new THREE.Mesh(cord1Geo, redCordMat);
    cord2.position.set(0.12, 0, 0);
    this.emaGroup.add(cord2);

    // 3. Ema Wooden Tablet Canvas Texture
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 420;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#f3ddb6';
    ctx.fillRect(0, 0, 600, 420);

    ctx.fillStyle = '#ebd1a2';
    for (let y = 10; y < 420; y += 18) {
      ctx.fillRect(0, y, 600, 4);
    }

    ctx.strokeStyle = '#7c4826';
    ctx.lineWidth = 14;
    ctx.strokeRect(8, 8, 584, 404);

    ctx.fillStyle = '#c52838';
    ctx.font = 'bold 32px serif';
    ctx.textAlign = 'center';
    ctx.fillText('祝・良き日', 300, 65);

    ctx.fillStyle = '#2d1808';
    ctx.font = 'bold 28px "Georgia", serif';
    ctx.fillText('Taman Doa & Kenangan', 300, 108);

    ctx.fillStyle = '#d92b65';
    ctx.font = 'bold 44px "Georgia", serif';
    ctx.fillText('Nur Syarifa Syuhada', 300, 172);

    ctx.fillStyle = '#3d2511';
    ctx.font = '22px "Noto Serif JP", serif';
    ctx.fillText('「お誕生日おめでとうございます」', 300, 222);

    ctx.font = '20px "Segoe UI", sans-serif';
    ctx.fillText('Semoga selalu diberi kesehatan, kebahagiaan,', 300, 270);
    ctx.fillText('dan kemudahan dalam meraih semua impian.', 300, 305);

    ctx.fillStyle = '#c52838';
    ctx.font = 'bold 24px serif';
    ctx.fillText('Best Wishes, Dill', 300, 365);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;

    const emaGeo = new THREE.PlaneGeometry(0.52, 0.36);
    const emaMat = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.7,
      metalness: 0.05,
      side: THREE.DoubleSide
    });

    const emaMesh = new THREE.Mesh(emaGeo, emaMat);
    emaMesh.position.set(0, 0.18, 0);
    emaMesh.castShadow = true;
    emaMesh.receiveShadow = true;
    emaMesh.userData = { isEma: true };

    this.emaGroup.add(emaMesh);
    this.interactiveObjects.push(emaMesh);

    this.group.add(this.emaGroup);
  }

  // =========================================================================
  // 8. Traditional Japanese Glass Wind Chime (Fūrin / 風鈴)
  // =========================================================================
  buildFūrinWindChime() {
    this.chimeGroup = new THREE.Group();
    // Hanging from the central twig branch
    this.chimeGroup.position.set(-0.35, 3.45, 1.4);

    // Glass Bell
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.85,
      opacity: 1.0,
      transparent: true,
      roughness: 0.1,
      ior: 1.5
    });
    const bellGeo = new THREE.SphereGeometry(0.065, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.65);
    const bellMesh = new THREE.Mesh(bellGeo, glassMat);
    this.chimeGroup.add(bellMesh);

    // Hanging paper strip (Tanzaku / 短冊) with wish text
    const tanzakuCanvas = document.createElement('canvas');
    tanzakuCanvas.width = 128;
    tanzakuCanvas.height = 384;
    const tCtx = tanzakuCanvas.getContext('2d');
    tCtx.fillStyle = '#fff0f5';
    tCtx.fillRect(0, 0, 128, 384);
    tCtx.strokeStyle = '#ff75a0';
    tCtx.lineWidth = 6;
    tCtx.strokeRect(4, 4, 120, 376);
    tCtx.fillStyle = '#ff2a70';
    tCtx.font = 'bold 36px serif';
    tCtx.textAlign = 'center';
    tCtx.fillText('*', 64, 70);
    tCtx.font = 'bold 24px serif';
    tCtx.fillText('風', 64, 140);
    tCtx.fillText('鈴', 64, 180);
    tCtx.font = 'bold 22px serif';
    tCtx.fillText('幸福', 64, 250);
    tCtx.font = 'bold 18px sans-serif';
    tCtx.fillText('Syarifa', 64, 290);

    const tanzakuTex = new THREE.CanvasTexture(tanzakuCanvas);
    const tanzakuMat = new THREE.MeshStandardMaterial({
      map: tanzakuTex,
      side: THREE.DoubleSide
    });
    this.tanzakuMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.08, 0.24), tanzakuMat);
    this.tanzakuMesh.position.set(0, -0.22, 0);
    this.chimeGroup.add(this.tanzakuMesh);

    this.tanzakuMesh.userData = { isChime: true };
    this.interactiveObjects.push(this.tanzakuMesh);

    this.group.add(this.chimeGroup);
  }

  // =========================================================================
  // 10. Japanese Stone Lantern (Tōrō / 石灯籠)
  // =========================================================================
  buildStoneLantern() {
    this.lanternGroup = new THREE.Group();
    this.lanternGroup.position.set(-3.35, 0.0, 1.85);
    this.lanternGroup.rotation.y = 0.5;

    const stoneMat = new THREE.MeshStandardMaterial({
      color: 0x6e727d,
      roughness: 0.92,
      metalness: 0.08
    });

    const stoneGeos = [];

    const baseGeo = new THREE.CylinderGeometry(0.26, 0.32, 0.14, 6);
    baseGeo.translate(0, 0.07, 0);
    stoneGeos.push(baseGeo);

    const pillarGeo = new THREE.CylinderGeometry(0.1, 0.12, 0.55, 6);
    pillarGeo.translate(0, 0.41, 0);
    stoneGeos.push(pillarGeo);

    const midGeo = new THREE.CylinderGeometry(0.28, 0.22, 0.08, 6);
    midGeo.translate(0, 0.72, 0);
    stoneGeos.push(midGeo);

    const roofGeo = new THREE.ConeGeometry(0.38, 0.18, 6);
    roofGeo.translate(0, 1.06, 0);
    stoneGeos.push(roofGeo);

    const jewelGeo = new THREE.SphereGeometry(0.065, 8, 8);
    jewelGeo.translate(0, 1.2, 0);
    stoneGeos.push(jewelGeo);

    const mergedStoneGeo = BufferGeometryUtils.mergeGeometries(stoneGeos);
    stoneGeos.forEach((g) => g.dispose());
    const stoneMesh = new THREE.Mesh(mergedStoneGeo, stoneMat);
    stoneMesh.castShadow = true;
    stoneMesh.receiveShadow = true;
    this.lanternGroup.add(stoneMesh);

    const fireboxGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.18, 6);
    fireboxGeo.translate(0, 0.85, 0);
    const fireboxMat = new THREE.MeshBasicMaterial({ color: 0xffd175 });
    const fireboxMesh = new THREE.Mesh(fireboxGeo, fireboxMat);
    this.lanternGroup.add(fireboxMesh);

    const lanternLight = new THREE.PointLight(0xffb84d, 1.2, 4.0, 1.8);
    lanternLight.position.set(0, 0.85, 0);
    this.lanternGroup.add(lanternLight);

    this.group.add(this.lanternGroup);
  }

  // =========================================================================
  // 11. Japanese Iris Flower Beds & Green Flora (Hanashōbu / 花菖蒲)
  // =========================================================================
  buildIrisFlowerBeds() {
    const irisGroup = new THREE.Group();
    const flowerGeos = [];
    const leafGeos = [];

    const irisPetalMat = new THREE.MeshStandardMaterial({
      color: 0x5d47a8, // Regal purple-blue Japanese iris
      roughness: 0.6,
      side: THREE.DoubleSide
    });

    const irisLeafMat = new THREE.MeshStandardMaterial({
      color: 0x3d702d, // Slender blade leaves
      roughness: 0.8
    });

    const clusterPoints = [
      [-1.9, 0.0, 1.6],
      [-2.5, 0.0, 1.1],
      [1.1, 0.0, 2.3],
      [2.7, 0.0, 0.7],
      [-0.9, 0.0, 2.1]
    ];

    clusterPoints.forEach(([cx, cy, cz]) => {
      // 3-4 flowers per cluster
      for (let f = 0; f < 3; f++) {
        const fx = cx + (Math.random() - 0.5) * 0.25;
        const fz = cz + (Math.random() - 0.5) * 0.25;
        const fh = 0.22 + Math.random() * 0.14;

        // Stem
        const stem = new THREE.CylinderGeometry(0.008, 0.01, fh, 5);
        stem.translate(fx, cy + fh / 2, fz);
        leafGeos.push(stem);

        // Petals
        for (let p = 0; p < 3; p++) {
          const angle = (p / 3) * Math.PI * 2;
          const petal = new THREE.PlaneGeometry(0.045, 0.09);
          petal.rotateX(0.4);
          petal.rotateY(angle);
          petal.translate(fx, cy + fh, fz);
          flowerGeos.push(petal);
        }
      }
    });

    const mergedFlowers = BufferGeometryUtils.mergeGeometries(flowerGeos);
    flowerGeos.forEach((g) => g.dispose());
    const flowersMesh = new THREE.Mesh(mergedFlowers, irisPetalMat);
    flowersMesh.castShadow = true;
    irisGroup.add(flowersMesh);

    const mergedLeaves = BufferGeometryUtils.mergeGeometries(leafGeos);
    leafGeos.forEach((g) => g.dispose());
    const leavesMesh = new THREE.Mesh(mergedLeaves, irisLeafMat);
    irisGroup.add(leavesMesh);

    this.group.add(irisGroup);
  }

  // =========================================================================
  // 11. Fallen Sakura Petals Patch on Grass
  // =========================================================================
  buildFallenPetalsPatch() {
    const count = 380;
    const patchGeo = new THREE.PlaneGeometry(0.08, 0.05);
    patchGeo.rotateX(-Math.PI / 2);

    const patchMat = new THREE.MeshStandardMaterial({
      color: 0xff9db8,
      roughness: 0.85,
      metalness: 0.05,
      side: THREE.DoubleSide
    });

    const instancedMesh = new THREE.InstancedMesh(patchGeo, patchMat, count);
    const dummy = new THREE.Object3D();

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 0.5 + Math.random() * 3.0;
      const x = Math.cos(angle) * radius + (Math.random() - 0.5) * 0.5;
      const z = Math.sin(angle) * radius + 0.3;
      const y = 0.012 + Math.random() * 0.008;

      dummy.position.set(x, y, z);
      dummy.rotation.y = Math.random() * Math.PI * 2;
      dummy.rotation.z = (Math.random() - 0.5) * 0.1;
      dummy.scale.setScalar(0.7 + Math.random() * 0.6);
      dummy.updateMatrix();

      instancedMesh.setMatrixAt(i, dummy.matrix);
    }

    instancedMesh.receiveShadow = true;
    this.group.add(instancedMesh);
  }

  // =========================================================================
  // 12. Komorebi Sunlit Shimmering Motes / Fireflies
  // =========================================================================
  buildKomorebiLightMotes() {
    const count = 45;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    this.moteBases = [];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const bx = (Math.random() - 0.5) * 6.5;
      const by = 0.8 + Math.random() * 3.8;
      const bz = (Math.random() - 0.5) * 5.5 + 0.5;
      positions[i3 + 0] = bx;
      positions[i3 + 1] = by;
      positions[i3 + 2] = bz;
      scales[i] = 0.05 + Math.random() * 0.06;
      this.moteBases.push({ x: bx, y: by, z: bz, speed: 0.8 + Math.random() * 1.2, phase: Math.random() * Math.PI * 2 });
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      color: 0xffea88, // Warm shimmering sunlight gold
      size: 0.09,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.komorebiMesh = new THREE.Points(geo, mat);
    this.group.add(this.komorebiMesh);
  }

  // =========================================================================
  // 13. Animated Fluttering Butterflies (Kupu-kupu Khas Jepang)
  // =========================================================================
  buildAnimatedButterflies() {
    const butterflyConfigs = [
      { color: 0xffe043, speed: 0.70, rX: 2.2, rZ: 1.8, yBase: 1.6, phase: 0.0, scale: 1.2 }, // Tiger Swallowtail Yellow
      { color: 0xff75a0, speed: 0.85, rX: 1.7, rZ: 2.3, yBase: 2.1, phase: 2.2, scale: 1.15 }, // Sakura Pink
      { color: 0x4ef2d2, speed: 0.65, rX: 2.5, rZ: 1.5, yBase: 1.3, phase: 4.1, scale: 1.2 }, // Cyan Swallowtail
      { color: 0xba68c8, speed: 0.78, rX: 1.9, rZ: 2.0, yBase: 1.8, phase: 1.4, scale: 1.15 }, // Lavender Swallowtail
      { color: 0xffffff, speed: 0.90, rX: 0.9, rZ: 1.4, yBase: 0.85, phase: 3.2, scale: 1.3 }, // Pure Pearl White (dancing near center bench)
      { color: 0xffaa33, speed: 0.72, rX: 1.3, rZ: 1.6, yBase: 1.05, phase: 5.1, scale: 1.25 } // Golden Amber Swallowtail
    ];

    butterflyConfigs.forEach((cfg) => {
      const bGroup = new THREE.Group();

      const wingMat = new THREE.MeshStandardMaterial({
        color: cfg.color,
        emissive: cfg.color,
        emissiveIntensity: 0.35,
        roughness: 0.35,
        side: THREE.DoubleSide
      });

      const wingScale = cfg.scale || 1.0;
      // Left Wing
      const wingGeo = new THREE.PlaneGeometry(0.10 * wingScale, 0.14 * wingScale);
      wingGeo.translate(-0.05 * wingScale, 0, 0);
      const wingL = new THREE.Mesh(wingGeo, wingMat);

      // Right Wing
      const wingR = new THREE.Mesh(wingGeo, wingMat);
      wingR.scale.x = -1;

      // Body
      const body = new THREE.Mesh(
        new THREE.CylinderGeometry(0.009 * wingScale, 0.009 * wingScale, 0.09 * wingScale, 6),
        new THREE.MeshBasicMaterial({ color: 0x221a15 })
      );
      body.rotation.x = Math.PI / 2;

      bGroup.add(wingL);
      bGroup.add(wingR);
      bGroup.add(body);

      this.group.add(bGroup);
      this.butterflies.push({ group: bGroup, wingL, wingR, cfg });
    });
  }

  // =========================================================================
  // 14. Interactive Sparkle & Confetti System
  // =========================================================================
  buildSparkleSystem() {
    const pCount = 120;
    const pGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(pCount * 3);
    const velocities = new Float32Array(pCount * 3);
    const colors = new Float32Array(pCount * 3);

    const palette = [
      new THREE.Color(0xffd13b),
      new THREE.Color(0xff75a0),
      new THREE.Color(0x4ef2d2),
      new THREE.Color(0xfff5ea)
    ];

    for (let i = 0; i < pCount; i++) {
      const i3 = i * 3;
      positions[i3 + 0] = 0;
      positions[i3 + 1] = -100;
      positions[i3 + 2] = 0;

      velocities[i3 + 0] = (Math.random() - 0.5) * 1.8;
      velocities[i3 + 1] = 1.0 + Math.random() * 2.2;
      velocities[i3 + 2] = (Math.random() - 0.5) * 1.8;

      const col = palette[Math.floor(Math.random() * palette.length)];
      colors[i3 + 0] = col.r;
      colors[i3 + 1] = col.g;
      colors[i3 + 2] = col.b;
    }

    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pGeo.setAttribute('aVelocity', new THREE.BufferAttribute(velocities, 3));
    pGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const pMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.0,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.sparkleMesh = new THREE.Points(pGeo, pMat);
    this.group.add(this.sparkleMesh);
    this.isSparkling = false;
    this.sparkleTimer = 0;
  }

  extinguishCandle() {
    this.candleLit = false;

    if (this.flameMesh) {
      gsap.to(this.flameMesh.scale, {
        x: 1.8,
        y: 0.2,
        z: 1.8,
        duration: 0.15,
        onComplete: () => {
          gsap.to(this.flameMesh.scale, {
            x: 0.001,
            y: 0.001,
            z: 0.001,
            duration: 0.15,
            onComplete: () => {
              if (this.flameMesh) this.flameMesh.visible = false;
            }
          });
        }
      });
    }

    if (this.candleLight) {
      gsap.to(this.candleLight, { intensity: 0.0, duration: 0.35 });
    }

    // Activate rising candle smoke
    this.isSmoking = true;
    this.smokeTimer = 0;
    if (this.smokeMat) this.smokeMat.opacity = 0.85;

    if (this.smokePoints) {
      const pos = this.smokePoints.geometry.attributes.position;
      for (let i = 0; i < this.smokeVelocities.length; i++) {
        pos.setXYZ(i, (Math.random() - 0.5) * 0.02, 0.46, (Math.random() - 0.5) * 0.02);
        this.smokeVelocities[i] = {
          x: (Math.random() - 0.5) * 0.04,
          y: 0.12 + Math.random() * 0.2,
          z: (Math.random() - 0.5) * 0.04
        };
      }
      pos.needsUpdate = true;
    }

    this.triggerCakeSparkles();
  }

  lightCandle() {
    this.candleLit = true;
    if (this.flameMesh) {
      this.flameMesh.visible = true;
      gsap.to(this.flameMesh.scale, {
        x: 1.0,
        y: 1.0,
        z: 1.0,
        duration: 0.4,
        ease: 'back.out(2.0)'
      });
    }
    if (this.candleLight) {
      gsap.to(this.candleLight, { intensity: 1.6, duration: 0.4 });
    }
  }

  triggerCakeSparkles() {
    this.isSparkling = true;
    this.sparkleTimer = 0;
    if (this.sparkleMesh && this.sparkleMesh.material) {
      this.sparkleMesh.material.opacity = 1.0;
      const pos = this.sparkleMesh.geometry.attributes.position;
      const cakeWorld = new THREE.Vector3();
      this.cakeGroup.getWorldPosition(cakeWorld);

      for (let i = 0; i < pos.count; i++) {
        pos.setXYZ(
          i,
          cakeWorld.x + (Math.random() - 0.5) * 0.25,
          cakeWorld.y + 0.46,
          cakeWorld.z + (Math.random() - 0.5) * 0.25
        );
      }
      pos.needsUpdate = true;
    }

    gsap.fromTo(
      this.cakeGroup.scale,
      { x: 0.95, y: 0.75, z: 0.95 },
      { x: 0.85, y: 0.85, z: 0.85, duration: 0.7, ease: 'elastic.out(1.4, 0.4)' }
    );
  }

  triggerCakeCelebration() {
    if (this.candleLit) {
      this.extinguishCandle();
    } else {
      this.lightCandle();
    }
  }

  update(delta, elapsedTime) {
    // 1. Candle Flame Subtle Flickering
    if (this.candleLit && this.candleLight && this.flameMesh) {
      const flicker = Math.sin(elapsedTime * 18.0) * 0.12 + Math.cos(elapsedTime * 31.0) * 0.08;
      this.candleLight.intensity = 1.6 + flicker * 0.4;
      this.flameMesh.scale.set(1.0 + flicker * 0.2, 1.0 + flicker * 0.35, 1.0 + flicker * 0.2);
    }

    // 1b. Rising Candle Smoke wisps
    if (this.isSmoking && this.smokePoints) {
      this.smokeTimer += delta;
      const pos = this.smokePoints.geometry.attributes.position;
      for (let i = 0; i < this.smokeVelocities.length; i++) {
        const vel = this.smokeVelocities[i];
        const cx = pos.getX(i) + vel.x * delta + Math.sin(elapsedTime * 2.5 + i) * 0.015 * delta;
        const cy = pos.getY(i) + vel.y * delta;
        const cz = pos.getZ(i) + vel.z * delta + Math.cos(elapsedTime * 2.0 + i) * 0.015 * delta;
        pos.setXYZ(i, cx, cy, cz);
      }
      pos.needsUpdate = true;

      if (this.smokeMat) {
        this.smokeMat.opacity = Math.max(0, 0.85 * (1.0 - this.smokeTimer / 2.5));
      }
      if (this.smokeTimer >= 2.5) {
        this.isSmoking = false;
        if (this.smokeMat) this.smokeMat.opacity = 0;
      }
    }

    // 2. Ema Tablet & Tanzaku Pendulum Swaying in the breeze
    if (this.emaGroup) {
      this.emaGroup.rotation.z = Math.sin(elapsedTime * 1.35) * 0.035;
      this.emaGroup.rotation.x = Math.cos(elapsedTime * 1.1) * 0.025;
    }
    if (this.tanzakuMesh) {
      this.tanzakuMesh.rotation.z = Math.sin(elapsedTime * 2.2) * 0.18;
      this.tanzakuMesh.rotation.x = Math.cos(elapsedTime * 1.8) * 0.12;
    }

    // 3. Komorebi Shimmering Sunlight Motes Animation
    if (this.komorebiMesh && this.moteBases) {
      const p = this.komorebiMesh.geometry.attributes.position;
      for (let i = 0; i < this.moteBases.length; i++) {
        const b = this.moteBases[i];
        const y = b.y + Math.sin(elapsedTime * b.speed + b.phase) * 0.35;
        const x = b.x + Math.cos(elapsedTime * 0.6 + b.phase) * 0.2;
        p.setXYZ(i, x, y, b.z);
      }
      p.needsUpdate = true;
    }

    // 4. Fluttering Butterflies Animated Flight
    this.butterflies.forEach(({ group, wingL, wingR, cfg }) => {
      const t = elapsedTime * cfg.speed + cfg.phase;
      // Parametric flight path
      const bx = Math.sin(t) * cfg.rX;
      const bz = Math.cos(t * 0.8) * cfg.rZ;
      const by = cfg.yBase + Math.sin(t * 1.8) * 0.35;
      group.position.set(bx, by, bz);

      // Facing tangent direction
      group.rotation.y = Math.atan2(Math.cos(t) * cfg.rX, -Math.sin(t * 0.8) * cfg.rZ * 0.8);
      group.rotation.z = Math.sin(t * 2.5) * 0.15;

      // Rapid Wing Flapping
      const flap = Math.sin(elapsedTime * 28.0 + cfg.phase) * 0.72;
      wingL.rotation.y = flap;
      wingR.rotation.y = -flap;
    });

    // 5. Sparkle Particle Animation
    if (this.isSparkling && this.sparkleMesh) {
      this.sparkleTimer += delta;
      const pos = this.sparkleMesh.geometry.attributes.position;
      const vel = this.sparkleMesh.geometry.attributes.aVelocity;

      for (let i = 0; i < pos.count; i++) {
        const vx = vel.getX(i);
        const vy = vel.getY(i) - 2.8 * delta;
        const vz = vel.getZ(i);
        vel.setY(i, vy);

        pos.setXYZ(
          i,
          pos.getX(i) + vx * delta,
          pos.getY(i) + vy * delta,
          pos.getZ(i) + vz * delta
        );
      }
      pos.needsUpdate = true;

      if (this.sparkleTimer > 1.8) {
        this.sparkleMesh.material.opacity = Math.max(0, 1.0 - (this.sparkleTimer - 1.8) * 2.0);
        if (this.sparkleTimer > 2.5) {
          this.isSparkling = false;
          this.sparkleMesh.material.opacity = 0.0;
        }
      }
    }
  }

  // =========================================================================
  // 15. Ceremonial Japanese Birthday Greeting Stand (Iwai-kanban / 祝看板)
  // Prominently dedicated to Nur Syarifa Syuhada in Front View
  // =========================================================================
  buildCeremonialBirthdaySign() {
    this.birthdaySignGroup = new THREE.Group();
    // Positioned front garden left entrance, welcoming without blocking the center bench
    this.birthdaySignGroup.position.set(-2.55, 0.0, 2.15);
    this.birthdaySignGroup.rotation.y = 0.38;
    this.birthdaySignGroup.scale.set(0.92, 0.92, 0.92);

    const woodMat = new THREE.MeshStandardMaterial({
      color: 0x422517, // Dark Japanese cedar timber
      roughness: 0.75,
      metalness: 0.08
    });

    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xdfb43a,
      roughness: 0.4,
      metalness: 0.7
    });

    // 1. Two timber posts
    const postGeo = new THREE.BoxGeometry(0.08, 1.45, 0.08);
    postGeo.translate(0, 0.725, 0);

    const postL = new THREE.Mesh(postGeo, woodMat);
    postL.position.x = -0.68;
    postL.castShadow = true;
    this.birthdaySignGroup.add(postL);

    const postR = new THREE.Mesh(postGeo, woodMat);
    postR.position.x = 0.68;
    postR.castShadow = true;
    this.birthdaySignGroup.add(postR);

    // Stone footing blocks
    const footGeo = new THREE.BoxGeometry(0.18, 0.12, 0.18);
    const footMat = new THREE.MeshStandardMaterial({ color: 0x6e727d, roughness: 0.9 });
    const footL = new THREE.Mesh(footGeo, footMat);
    footL.position.set(-0.68, 0.06, 0);
    this.birthdaySignGroup.add(footL);

    const footR = new THREE.Mesh(footGeo, footMat);
    footR.position.set(0.68, 0.06, 0);
    this.birthdaySignGroup.add(footR);

    // Top ornamental Torii crossbeam (Kasagi)
    const roofBeamGeo = new THREE.BoxGeometry(1.68, 0.08, 0.14);
    roofBeamGeo.translate(0, 1.48, 0);
    const roofBeam = new THREE.Mesh(roofBeamGeo, woodMat);
    roofBeam.castShadow = true;
    this.birthdaySignGroup.add(roofBeam);

    // Gold decorative caps on crossbeam ends
    const capGeo = new THREE.BoxGeometry(0.06, 0.085, 0.145);
    const cap1 = new THREE.Mesh(capGeo, goldMat);
    cap1.position.set(-0.81, 1.48, 0);
    this.birthdaySignGroup.add(cap1);

    const cap2 = new THREE.Mesh(capGeo, goldMat);
    cap2.position.set(0.81, 1.48, 0);
    this.birthdaySignGroup.add(cap2);

    // 2. High-Resolution Calligraphy Greeting Board
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 640;
    const ctx = canvas.getContext('2d');

    // Rich Japanese lacquer dark mahogany background
    ctx.fillStyle = '#1c0f0d';
    ctx.roundRect(12, 12, 1000, 616, 28);
    ctx.fill();

    // Inner parchment gradient panel
    const pGrad = ctx.createLinearGradient(0, 30, 0, 610);
    pGrad.addColorStop(0, '#fff4f6');
    pGrad.addColorStop(0.5, '#ffebee');
    pGrad.addColorStop(1, '#ffdde4');
    ctx.fillStyle = pGrad;
    ctx.roundRect(32, 32, 960, 576, 20);
    ctx.fill();

    // Ornate gold border
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 10;
    ctx.stroke();

    ctx.strokeStyle = '#c52838';
    ctx.lineWidth = 3;
    ctx.strokeRect(48, 48, 928, 544);

    // Header Badge
    ctx.fillStyle = '#b71c1c';
    ctx.font = 'bold 36px "Cinzel", "Georgia", serif';
    ctx.textAlign = 'center';
    ctx.fillText('HAPPY BIRTHDAY', 512, 125);

    // Main Celebrated Name: Nur Syarifa Syuhada
    ctx.fillStyle = '#c2185b';
    ctx.font = 'bold 64px "Georgia", serif';
    ctx.fillText('Nur Syarifa Syuhada', 512, 220);

    // Japanese Greeting
    ctx.fillStyle = '#2d1808';
    ctx.font = 'bold 40px "Hiragino Mincho ProN", "Yu Mincho", serif';
    ctx.fillText('祝・お誕生日おめでとう', 512, 290);

    // Decorative divider line
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(180, 330);
    ctx.lineTo(844, 330);
    ctx.stroke();

    // Sincere Birthday Wish Quote
    ctx.fillStyle = '#422517';
    ctx.font = '500 28px "Segoe UI", sans-serif';
    ctx.fillText('Semoga panjang umur, sehat selalu,', 512, 395);
    ctx.fillText('dan dilancarkan segala hal baik yang kamu impikan.', 512, 445);

    // Signature
    ctx.fillStyle = '#b71c1c';
    ctx.font = 'bold 30px "Georgia", serif';
    ctx.fillText('Best Wishes, Dill', 512, 530);

    const boardTex = new THREE.CanvasTexture(canvas);
    boardTex.colorSpace = THREE.SRGBColorSpace;

    const boardGeo = new THREE.PlaneGeometry(1.24, 0.78);
    const boardMat = new THREE.MeshStandardMaterial({
      map: boardTex,
      roughness: 0.35,
      metalness: 0.05,
      side: THREE.DoubleSide
    });
    const boardMesh = new THREE.Mesh(boardGeo, boardMat);
    boardMesh.position.set(0, 0.92, 0.02);
    boardMesh.castShadow = true;
    boardMesh.userData = { isBirthdaySign: true };
    this.birthdaySignGroup.add(boardMesh);
    this.interactiveObjects.push(boardMesh);

    // 3. Two Hanging Paper Lanterns (Chōchin / 提灯) with Warm Glowing Light
    [-0.56, 0.56].forEach((lx) => {
      const lanternGeo = new THREE.SphereGeometry(0.09, 12, 10);
      lanternGeo.scale(0.85, 1.25, 0.85);
      const lanternMat = new THREE.MeshStandardMaterial({
        color: 0xff4d6d,
        emissive: 0xff2a48,
        emissiveIntensity: 0.75,
        roughness: 0.6
      });
      const lanternMesh = new THREE.Mesh(lanternGeo, lanternMat);
      lanternMesh.position.set(lx, 1.28, 0.08);
      lanternMesh.castShadow = true;
      this.birthdaySignGroup.add(lanternMesh);

      const lLight = new THREE.PointLight(0xffaa55, 0.9, 2.5, 2.0);
      lLight.position.set(lx, 1.28, 0.08);
      this.birthdaySignGroup.add(lLight);
    });

    this.group.add(this.birthdaySignGroup);
  }

  dispose() {
    if (this.group && this.group.parent) {
      this.group.parent.remove(this.group);
    }
    this.interactiveObjects = [];
  }
}
