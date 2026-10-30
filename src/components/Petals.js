import * as THREE from 'three';

export class Petals {
  constructor(sceneManager, count = 2500) {
    this.sceneManager = sceneManager;
    this.scene = this.sceneManager.scene;
    this.count = count; // Guaranteed >= 2000 instances

    this.init();
  }

  init() {
    // =========================================================================
    // 1. Petal Geometry (Curved 3D Teardrop Petal)
    // =========================================================================
    // A small curved petal with a center crease so it catches light when tumbling
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.08);
    shape.bezierCurveTo(0.06, -0.04, 0.08, 0.04, 0, 0.1);
    shape.bezierCurveTo(-0.08, 0.04, -0.06, -0.04, 0, -0.08);

    const baseGeo = new THREE.ShapeGeometry(shape, 6);

    // Curve the petal vertices along Z for a realistic organic bowl shape
    const pos = baseGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      // Gentle concavity
      const z = -(x * x * 2.5 + y * y * 0.8);
      pos.setZ(i, z);
    }
    baseGeo.computeVertexNormals();

    this.geometry = baseGeo;

    // =========================================================================
    // 2. Instanced Attributes for GPU Wind & Motion
    // =========================================================================
    const offsets = new Float32Array(this.count * 3);
    const speeds = new Float32Array(this.count * 3);
    const scales = new Float32Array(this.count);
    const phases = new Float32Array(this.count);
    const colors = new Float32Array(this.count * 3);

    const palette = [
      new THREE.Color(0xff88a5), // Rich blossom pink
      new THREE.Color(0xffb2c7), // Soft baby pink
      new THREE.Color(0xffdbe6), // Light highlight pink
      new THREE.Color(0xfff0f5)  // Snow petal white
    ];

    for (let i = 0; i < this.count; i++) {
      const i3 = i * 3;

      // Spawn bounds: cylinder around the tree (offset slightly upwind so drift covers garden)
      const radius = 1.0 + Math.random() * 11.0;
      const angle = Math.random() * Math.PI * 2;
      offsets[i3 + 0] = Math.cos(angle) * radius - 2.2;
      offsets[i3 + 1] = Math.random() * 11.5; // Height 0 to 11.5m
      offsets[i3 + 2] = Math.sin(angle) * radius - 1.2;

      // Motion parameters: fall speed, horizontal drift, sway frequency
      speeds[i3 + 0] = 0.6 + Math.random() * 0.8; // Horizontal sway speed
      speeds[i3 + 1] = 0.8 + Math.random() * 0.7; // Vertical fall speed (m/s)
      speeds[i3 + 2] = 0.5 + Math.random() * 0.8; // Depth sway speed

      // Scale variation
      scales[i] = 0.75 + Math.random() * 0.6;

      // Phase offset for unsynchronized wind turbulence
      phases[i] = Math.random() * Math.PI * 2;

      // Petal Color assignment
      const col = palette[Math.floor(Math.random() * palette.length)];
      colors[i3 + 0] = col.r;
      colors[i3 + 1] = col.g;
      colors[i3 + 2] = col.b;
    }

    this.geometry.setAttribute('aOffset', new THREE.InstancedBufferAttribute(offsets, 3));
    this.geometry.setAttribute('aSpeed', new THREE.InstancedBufferAttribute(speeds, 3));
    this.geometry.setAttribute('aScale', new THREE.InstancedBufferAttribute(scales, 1));
    this.geometry.setAttribute('aPhase', new THREE.InstancedBufferAttribute(phases, 1));
    this.geometry.setAttribute('aColor', new THREE.InstancedBufferAttribute(colors, 3));

    // =========================================================================
    // 3. Custom Vertex & Fragment Shader (Wind + Fluttering)
    // =========================================================================
    this.material = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      transparent: true,
      depthWrite: false, // Prevents z-fighting between thousands of transparent petals
      uniforms: {
        uTime: { value: 0 },
        uWindDir: { value: new THREE.Vector3(1.0, 0.0, 0.4).normalize() },
        uWindStrength: { value: 1.2 }
      },
      vertexShader: /* glsl */ `
        uniform float uTime;
        uniform vec3 uWindDir;
        uniform float uWindStrength;

        attribute vec3 aOffset;
        attribute vec3 aSpeed;
        attribute float aScale;
        attribute float aPhase;
        attribute vec3 aColor;

        varying vec2 vUv;
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          vUv = uv;
          vColor = aColor;

          // 1. Cyclic Fall Height: seamlessly wraps from spawn height (11.0m) to ground (-0.3m)
          float spawnHeight = 11.0;
          float floorHeight = -0.3;
          float heightRange = spawnHeight - floorHeight;
          float fallDistance = aSpeed.y * uTime * 0.85;
          float currentY = spawnHeight - mod((aOffset.y - floorHeight) + fallDistance, heightRange);

          // 2. Continuous Wind Drift & Gentle Natural Gusts (Zero Popping / Zero Shattering)
          // Relative fall progress from 0.0 (top) to 1.0 (ground)
          float fallProgress = (spawnHeight - currentY) / heightRange;

          float time = uTime * 1.35 + aPhase;
          // Decoupled periodic gusts that never grow unbounded with uTime
          float windGust = sin(uTime * 1.2 + aPhase) * 0.45 * uWindStrength;
          float lateralSway = cos(time * aSpeed.z + currentY * 0.4) * 0.75;

          // Natural downwind drift proportional to fall progress + bounded gusts
          float downwindTravel = fallProgress * (6.0 + aSpeed.x * 3.5) + windGust;

          vec3 windDir = normalize(uWindDir);
          vec3 sideDir = vec3(-windDir.z, 0.0, windDir.x);

          vec3 worldPos = aOffset + (windDir * downwindTravel) + (sideDir * lateralSway);
          worldPos.y = currentY;

          // 3. 3D Tumbling & Fluttering Rotation Matrix on GPU
          float roll = sin(time * 3.6 + aPhase) * 1.3;
          float pitch = cos(time * 2.9 + aPhase) * 1.5;
          float yaw = time * aSpeed.x * 2.2;

          mat3 rotZ = mat3(
            cos(roll), -sin(roll), 0.0,
            sin(roll),  cos(roll), 0.0,
            0.0,        0.0,       1.0
          );
          mat3 rotX = mat3(
            1.0, 0.0,         0.0,
            0.0, cos(pitch), -sin(pitch),
            0.0, sin(pitch),  cos(pitch)
          );
          mat3 rotY = mat3(
            cos(yaw), 0.0, sin(yaw),
            0.0,      1.0, 0.0,
           -sin(yaw), 0.0, cos(yaw)
          );

          vec3 localPos = rotY * rotX * rotZ * (position * aScale);

          // 4. Soft Alpha Fade at extreme altitudes (completely hides vertical wrapping)
          float fadeIn = smoothstep(spawnHeight, spawnHeight - 1.0, currentY);
          float fadeOut = smoothstep(floorHeight, floorHeight + 0.6, currentY);
          vAlpha = fadeIn * fadeOut;

          gl_Position = projectionMatrix * viewMatrix * vec4(worldPos + localPos, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform float uTime;
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          // Delicate petal radial gradient: darker at base, soft translucent pastel at tip
          float grad = smoothstep(-0.08, 0.1, vUv.y);
          vec3 petalColor = mix(vColor * 0.92, vColor * 1.08, grad);

          // Soft translucent alpha
          float alpha = vAlpha * 0.92;

          gl_FragColor = vec4(petalColor, alpha);

          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `
    });

    // =========================================================================
    // 4. InstancedMesh Creation (Single Draw Call for all instances!)
    // =========================================================================
    this.mesh = new THREE.InstancedMesh(this.geometry, this.material, this.count);
    this.mesh.frustumCulled = false; // Bounds animated in vertex shader
    this.mesh.instanceMatrix.setUsage(THREE.StaticDrawUsage);

    this.scene.add(this.mesh);
  }

  update(delta, elapsedTime) {
    if (this.material && this.material.uniforms) {
      this.material.uniforms.uTime.value = elapsedTime;
    }
  }

  dispose() {
    if (this.mesh) {
      this.scene.remove(this.mesh);
    }
    if (this.geometry) this.geometry.dispose();
    if (this.material) this.material.dispose();
    this.mesh = null;
    this.geometry = null;
    this.material = null;
  }
}
