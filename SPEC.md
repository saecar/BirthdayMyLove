# SPEC.md — 3D Three.js Interactive Application Specification

## 1. Project Overview & Architecture
A high-performance, modular, and responsive 3D Web application built with **Vite** and **Three.js (r186)**. The architecture strictly follows an object-oriented, lifecycle-managed pattern (`init()`, `update()`, `dispose()`) to eliminate memory leaks and guarantee smooth 60 FPS performance on both desktop and mobile devices.

### Core Stack
- **Bundler**: Vite
- **Engine**: Three.js (ES Modules, modern WebGLRenderer)
- **Timing**: `THREE.Timer` with document connection for freeze-on-blur
- **Asset Pipeline**: `THREE.LoadingManager` with GLTFLoader (Draco/Meshopt) & TextureLoader

---

## 2. Directory Structure
```text
birthday/
├── public/
│   ├── assets/
│   │   ├── models/
│   │   └── textures/
├── src/
│   ├── core/
│   │   ├── SceneManager.js    # Central engine lifecycle coordinator
│   │   ├── Renderer.js        # WebGLRenderer, tone mapping, color management
│   │   ├── Camera.js          # PerspectiveCamera rig with aspect calculations
│   │   ├── Sizes.js           # Window resize listener and DPR clamp
│   │   └── Loop.js            # RequestAnimationFrame loop driven by THREE.Timer
│   ├── components/
│   │   ├── World.js           # Scene graph container for 3D entities
│   │   └── Environment.js     # Lights and atmospheric setup
│   ├── loaders/
│   │   └── AssetLoader.js     # Unified LoadingManager & progress tracker
│   ├── ui/
│   │   └── LoadingScreen.js   # DOM Loading bar, percentage & fade transition
│   ├── utils/
│   │   └── EventEmitter.js    # Custom event emitter for loose coupling
│   ├── main.js                # App entry point
│   └── style.css              # Fullscreen canvas and UI styling
├── index.html                 # Canvas & loader DOM template
├── package.json
└── vite.config.js
```

---

## 3. Work Phases & Skill Mapping

| Phase | Description | Skill Requirements | Acceptance Criteria |
| :--- | :--- | :--- | :--- |
| **Tahap 1** | **Setup Vite + Three.js & Core Engine**<br>Scaffold project, implement `SceneManager` (`init`, `update`, `dispose`), `LoadingManager` with animated UI progress bar, and responsive resize handler. | `threejs-fundamentals`<br>`threejs-loaders` | `npm run dev` serves with 0 console errors, loading bar animates and smoothly fades out, canvas resizes without distortion, lifecycle methods functional. |
| **Tahap 2** | **Asset Loading & Pipeline**<br>Configure Draco/Meshopt decoders, load 3D GLTF models, environment maps, and textures. | `threejs-loaders`<br>`threejs-asset-pipeline`<br>`threejs-textures` | All assets load asynchronously through manifest with error handling and fallback cues. |
| **Tahap 3** | **Lighting, Environment & Shadows**<br>Directional sun light, ambient light, tone mapping (ACESFilmic), and optimized shadow maps. | `threejs-lighting`<br>`threejs-materials` | Natural PBR lighting, zero shadow acne, well-balanced dynamic range. |
| **Tahap 4** | **Geometry & Materials**<br>Stage elements, particle systems, procedural meshes, or custom shader materials. | `threejs-geometry`<br>`threejs-materials`<br>`threejs-shaders` | Meshes positioned cleanly in hierarchy, sharing geometries/materials where applicable. |
| **Tahap 5** | **Animation & Camera Rigs**<br>Object rotation, floating hover effects, camera transitions using delta time. | `threejs-animation`<br>`threejs-fundamentals` | Smooth animations independent of display refresh rate (60Hz / 120Hz / 144Hz). |
| **Tahap 6** | **User Interaction**<br>Pointer raycasting, touch/click response, OrbitControls or smooth drag rotation. | `threejs-interaction` | Seamless touch responsiveness on mobile and mouse click on desktop. |
| **Tahap 7** | **Post-Processing (Desktop/High-End)**<br>Subtle Bloom and Vignette with automatic mobile bypass. | `threejs-postprocessing` | Visual depth enhanced on capable hardware, zero regression on low-end. |
| **Tahap 8** | **Mobile Optimization & Production Audit**<br>DPR limit verification, draw call batching, memory leak audit via `dispose()`. | `threejs-performance` | Steady 60 FPS on mobile, no WebGL context loss, memory cleans up on unmount. |

---

## 4. Mobile Performance Rules
1. **DPR Clamping**: Always clamp `renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))`.
2. **Tab Inactivity**: Connect `THREE.Timer` to document to halt frame calculations when tab is hidden.
3. **Disposal**: Every geometry, material, texture, and render target must be traversed and `.dispose()`d upon scene teardown.
4. **Draw Calls**: Group static elements, avoid unique materials per mesh, and keep total draw calls < 50 for mobile.

---

## 5. Mini-Game Specification (Hub & Golden Petals)

The application features modular romantic mini-games that award **Kelopak Emas (Golden Petals)** to the central Hub upon victory:

### 1. Tangkap Kelopak (Catch The Petals)
- **Mechanics**: Petals fall with wind sway from the top. Player navigates a cherry-blossom bamboo basket left/right via mouse/touch or keyboard (`A`/`D` or Arrow keys) and mobile on-screen buttons.
- **Items**:
  - Pink Petal: +1 Point
  - Golden Petal: +3 Points & Sparkle Trail
  - Whirlwind Obstacle: -1 Life
- **Objective**: Reach 15 points with 3 initial lives.
- **Victory Condition**: Victory fanfare sound, celebratory confetti particle effect, awards **1 Kelopak Emas** to the Hub, persisted in `localStorage`.
- **Teardown**: Pauses RAF loop and unbinds listeners upon close.

### 2. Memory Match (Card Pairs)
- 6 pairs of romantic pixel/photo memory cards with flip animations.

### 3. Kuis Pasangan (Trivia Quiz)
- Fun interactive multiple choice trivia questions.

### 4. Tiup Lilin (Candle Blow Finale)
- Interactive birthday cake with animated flickering candles and blow mechanism.
