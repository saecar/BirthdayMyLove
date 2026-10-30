import * as THREE from 'three';

export class Sky {
  constructor(sceneManager) {
    this.sceneManager = sceneManager;
    this.scene = this.sceneManager.scene;

    this.elapsedTime = 0;
    this.init();
  }

  init() {
    // Inverted sphere for 360-degree atmospheric sky dome
    this.geometry = new THREE.SphereGeometry(75, 32, 24);

    this.material = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uTopColor: { value: new THREE.Color(0x2a7ed8) },     // Japanese Anime Azure Blue
        uMidColor: { value: new THREE.Color(0x82d5ff) },     // Luminous Cerulean / Cyan
        uBottomColor: { value: new THREE.Color(0xfff7ea) },  // Warm Sunlit Spring Horizon
        uSunPosition: { value: new THREE.Vector3(12, 18, -25).normalize() },
        uSunColor: { value: new THREE.Color(0xfffaea) }
      },
      vertexShader: /* glsl */ `
        varying vec3 vWorldPosition;
        varying vec3 vNormal;

        void main() {
          vNormal = normalize(normal);
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPosition;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform float uTime;
        uniform vec3 uTopColor;
        uniform vec3 uMidColor;
        uniform vec3 uBottomColor;
        uniform vec3 uSunPosition;
        uniform vec3 uSunColor;

        varying vec3 vWorldPosition;
        varying vec3 vNormal;

        void main() {
          // Normalize direction from center
          vec3 dir = normalize(vWorldPosition);
          float height = dir.y; // -1.0 to 1.0

          // Smooth vertical anime sky gradient
          vec3 skyColor;
          if (height > 0.0) {
            float t = smoothstep(0.0, 0.72, height);
            skyColor = mix(uMidColor, uTopColor, t);
          } else {
            float t = smoothstep(-0.35, 0.0, height);
            skyColor = mix(uBottomColor, uMidColor, t);
          }

          // Stylized Drifting Anime Clouds (Makoto Shinkai / Ghibli Style)
          if (dir.y > 0.06 && dir.y < 0.62) {
            vec2 cloudUv = vec2(dir.x / (dir.y + 0.22), dir.z / (dir.y + 0.22)) * 0.75 + vec2(uTime * 0.005, 0.0);
            float n1 = sin(cloudUv.x * 3.4 + sin(cloudUv.y * 2.6)) * 0.5 + 0.5;
            float n2 = sin(cloudUv.x * 7.1 - cloudUv.y * 5.8) * 0.5 + 0.5;
            float cloudNoise = n1 * 0.68 + n2 * 0.32;
            float cloudMask = smoothstep(0.52, 0.76, cloudNoise);
            float hFade = smoothstep(0.06, 0.18, dir.y) * smoothstep(0.62, 0.38, dir.y);

            vec3 cloudCol = vec3(0.99, 0.98, 0.97);
            // Soft cloud shadow / volume tint
            vec3 cloudShade = mix(vec3(0.85, 0.91, 0.98), cloudCol, smoothstep(0.6, 0.8, cloudNoise));
            skyColor = mix(skyColor, cloudShade, cloudMask * hFade * 0.78);
          }

          // Radiant Sun Disc & Horizon Corona Glow
          float sunDot = max(dot(dir, uSunPosition), 0.0);
          float sunGlow = pow(sunDot, 12.0) * 0.55;
          float sunDisc = pow(sunDot, 320.0) * 1.2;
          skyColor += uSunColor * (sunGlow + sunDisc);

          // Dithering noise to prevent banding
          float dither = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) * 0.006;
          skyColor += dither;

          gl_FragColor = vec4(skyColor, 1.0);

          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);
  }

  update(delta) {
    this.elapsedTime += delta;
    if (this.material && this.material.uniforms && this.material.uniforms.uTime) {
      this.material.uniforms.uTime.value = this.elapsedTime;
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
