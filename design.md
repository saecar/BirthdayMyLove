# Design and Architecture Specification

## 1. Executive Summary

This interactive 3D web experience is built using **Three.js (r174)**, **Vite**, and **GSAP**. The application renders a minimalist Japanese garden centered around a 3D Sakura Spring Picnic diorama (`sakura_spring_picnic.glb`). Visitors navigate a guided camera track, explore hanging memories attached directly to cherry blossom boughs, interact with garden elements, blow out birthday candles on the diorama picnic table using microphone breath detection, and read a personal dedication letter.

The system is optimized for 60 FPS performance across desktop and mobile devices, adhering to strict memory disposal lifecycles, draw call budgets, DPR clamping, and clean minimalist user interface design.

---

## 2. Technology Stack and Dependencies

- **Bundler and Dev Server**: Vite 6.2.0
- **3D Graphics Engine**: Three.js 0.174.0 (WebGLRenderer, GLTFLoader, BufferGeometryUtils)
- **Animation and Tweening**: GSAP 3.15.0
- **Live Debugging**: lil-gui 0.21.0
- **Audio Processing**: Web Audio API (real-time breath detection via AnalyserNode)
- **Audio Playback**: YouTube IFrame API integration with Web Audio API Japanese ambient pentatonic synthesizer fallback
- **Typography**: Plus Jakarta Sans (Google Fonts) with system UI fallbacks

---

## 3. Directory Structure

```text
birthday/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── sakura_spring_picnic.glb      # Primary 3D diorama model
│   ├── audio/
│   │   └── BGMController.js              # Background music coordinator and ambient fallback synth
│   ├── components/
│   │   ├── Environment.js                # Directional sun, ambient light, hemi light
│   │   ├── Ground.js                     # Stepping stones, grass ring, pebble beds
│   │   ├── JapaneseGarden.js             # Stone lanterns, torii gate, Mount Fuji backdrop
│   │   ├── Petals.js                     # Instanced cherry blossom petal physics
│   │   ├── PicnicScene.js                # Compatibility and picnic entity exports
│   │   ├── PolaroidManager.js            # 3D polaroid photos suspended from tree trunk boughs
│   │   ├── SakuraTree.js                 # GLB diorama manager, idle animation, cake mount
│   │   ├── Sky.js                        # Procedural sky dome with cloud layers
│   │   └── World.js                      # Central scene graph container
│   ├── core/
│   │   ├── Camera.js                     # PerspectiveCamera rig with smooth lerp
│   │   ├── CameraTrack.js                # CatmullRomCurve3 spline and progress tracking
│   │   ├── Loop.js                       # Render loop driven by THREE.Timer
│   │   ├── Renderer.js                   # WebGLRenderer, shadow maps, color management
│   │   ├── SceneManager.js               # Central engine lifecycle coordinator
│   │   └── Sizes.js                      # Viewport sizing, DPR clamp, resize handler
│   ├── games/
│   │   └── PetalCatchGame.js             # Canvas 2D petal catching mini-game
│   ├── interaction/
│   │   ├── CandleBlowModal.js            # Responsive microphone breath detection and cake ceremony
│   │   └── InteractionManager.js         # Raycasting with tap vs drag disambiguation
│   ├── loaders/
│   │   └── AssetLoader.js                # Asset manager and loading screen reporter
│   ├── postprocessing/
│   │   └── PostProcessing.js             # UnrealBloomPass, OutputPass, device tiering
│   ├── ui/
│   │   ├── DebugGUI.js                   # lil-gui panel for idle animation and prop tweaks
│   │   ├── EasterEggModal.js             # Hidden secret modal trigger
│   │   ├── LetterModal.js                # Typographic birthday letter modal
│   │   ├── LoadingScreen.js              # Initial loading bar and smooth fade-out
│   │   ├── MiniTimeline.js               # Collapsible memory progression drawer
│   │   ├── PerfHUD.js                    # Telemetry HUD (FPS, draw calls, triangles)
│   │   ├── SceneOverlay.js               # Navigation dock, fullscreen and Zen UI toggles
│   │   └── StoryPanel.js                 # Slide-over memory detail card
│   ├── utils/
│   │   ├── EventEmitter.js               # Decoupled observer pattern
│   │   └── ProgressStore.js              # LocalStorage progress state manager
│   ├── main.js                           # Application entry point and bootstrap
│   └── style.css                         # Clean white and pink minimalist theme
├── index.html                            # Root HTML template and WebGL canvas mount
├── package.json
└── vite.config.js
```

---

## 4. Scene Graph and 3D Systems

### 4.1 SceneManager Coordination
`SceneManager` operates as the singleton coordinator for the entire runtime. It handles instantiation in deterministic order:
1. `THREE.Scene` with clear sky background (`#82d5ff`).
2. `Sizes` with DPR clamped between 1.0 and 2.0.
3. `Camera` containing a `CameraTrack` based on a `CatmullRomCurve3` spline.
4. `Renderer` configured with ACESFilmic tone mapping and PCFSoftShadowMap.
5. `PostProcessing` setup with automatic mobile bypass.
6. `World` containing all 3D environment components.
7. User interaction, UI layers, audio controllers, and telemetry HUD.

### 4.2 Diorama Integration (`SakuraTree.js`)
The scene centers on the `sakura_spring_picnic.glb` diorama:
- **Model Ingestion**: Loaded asynchronously via `GLTFLoader`. Auto-centered on its bounding box, with base geometry aligned to `y = 0.0` ground level.
- **Glass Dome Removal**: The outer glass sphere (`Sphere.005`, `Sphere.005_glass_0`, and `glass` materials) is physically removed from the scene graph to provide an open, minimalist environment.
- **Birthday Cake Reparenting (`mountBirthdayCake`)**: The interactive birthday cake is moved directly onto the diorama picnic table stand (`Plane.002`). By mounting it to the tree pivot at the table surface, the cake coordinates with diorama idle sway and breathing animations.
- **Hierarchy Segmentation**: Node traversal categorizes objects into distinct arrays: `treeNodes`, `foliageNodes`, `blossomMaterials`, `baseMoundMeshes`, and `picnicPropMeshes`.
- **Shadow Configuration**: Cast and receive shadow flags are enabled on opaque meshes; double-sided rendering is preserved for foliage petals.

### 4.3 Procedural Idle Animation Architecture
The GLB diorama features multi-frequency procedural animation updated in the render loop:
- **Compound Tree Sway**: Dual sine-wave swaying along X and Z axes (`swaySpeed: 1.2`, `swayAngle: 0.016 rad`), simulating aerodynamic inertia.
- **Foliage Wind Flutter**: Individual foliage clusters oscillate with spatial phase offsets based on vertex world coordinates (`foliageWindSpeed: 2.2`, `foliageWindStrength: 0.012 rad`).
- **Floating Breathing**: A vertical hover cycle applied to the pivot point (`floatSpeed: 0.9`, `floatAmplitude: 0.025 units`).
- **Lantern Pendulum Swing**: Tangential pendulum rotation applied to the hanging lantern (`lanternSwingSpeed: 2.0`, `lanternSwingAngle: 0.05 rad`).
- **Blossom Shimmer**: Subtle emission intensity pulsation simulating sunlight filtering through moving branches.

Four selectable idle presets are provided:
- `Gentle Spring` (default balanced motion)
- `Deep Breathing` (slow, meditative rhythm)
- `Windy Hanami` (energetic gusts)
- `Calm Stillness` (static preview mode)

### 4.4 Suspended Polaroid Ropes (`PolaroidManager.js`)
- The floating polaroid photos are suspended via suspension cords connecting directly into the primary wooden boughs of the sakura tree (`SakuraTree`).
- `branchAnchors` are positioned at exact wood geometry vertices (`Y ~ 2.15m to 2.25m`, radius `~0.6m to 1.1m`), with cords descending directly to each photo frame.
- The entire polaroid group is parented into `SakuraTree.pivot`, causing the photos and cords to sway synchronously with the tree under wind oscillation.

### 4.5 Japanese Garden Architecture (`JapaneseGarden.js`)
The environment surrounds the diorama with traditional Japanese landscape architecture:
- **Mount Fuji Backdrop**: Custom vertex/fragment shader rendering snow-capped elevation, mist interpolation, and directional lighting.
- **Stone Lanterns (Toro)**: Granite lanterns flanking pathways, illuminated by warm point lights (`0xff9944`) with candle flicker oscillation.
- **Torii Gate**: Vermilion gate marking the scenic entrance.
- **Minimalist Cleanup**: Procedural benches and duplicate picnic tables have been removed to highlight the authentic assets in the GLB diorama.

### 4.6 Particle Physics (`Petals.js`)
- 1,200 cherry blossom petals managed in a single `THREE.InstancedMesh`.
- Petals update each frame using curling wind vectors, gravity descent, and ground boundary recycling.
- Dynamic burst mode triggers on milestone events, increasing rotational velocity and horizontal spread.

---

## 5. Camera Track and Viewport Controls

### 5.1 Spline Trajectory
The camera moves along a smooth `CatmullRomCurve3` curve defining key staging points:
- Progress `0.00`: Garden Entrance and Full Diorama Overview `(0.0, 3.4, 9.2)` looking toward `(0.0, 2.6, 0.0)`.
- Progress `0.45`: Close-up of Sakura Tree, suspended memories, and the diorama picnic table with birthday cake.
- Progress `1.00`: Finale Shrine and Letter Reading View.

### 5.2 Input Handling
- **Wheel / Touch Drag**: Translates delta distance into normalized track progress `[0.0, 1.0]`.
- **Inertial Smoothing**: Uses exponential decay lerp for fluid camera deceleration.
- **Mobile FOV Clamping**: Evaluates aspect ratios dynamically; when aspect ratio falls below `1.0`, vertical FOV adjusts upward to preserve lateral framing.

---

## 6. Interaction System

### 6.1 Disambiguation Logic (`InteractionManager.js`)
Distinguishes between viewport navigation (dragging) and object selection (tapping):
- Pointer movement distance is measured between `pointerdown` and `pointerup`.
- Actions with displacement under 5 pixels and duration under 250 milliseconds register as taps.
- Raycaster tests against `interactiveObjects` including Polaroids, Garden Gate, Inscribed Plaque, and Birthday Cake.

### 6.2 Birthday Cake and Candle Ceremony (`CandleBlowModal.js`)
- Raycasting the birthday cake triggers a camera focus and opens the candle modal.
- Integrates the Web Audio API to detect acoustic microphone input.
- Real-time breath analysis calculates RMS sound levels from `Uint8Array` frequency data with sensitive thresholds (`breathScore > 0.15 || rms > 0.16`, `confidence >= 2`).
- When input crosses the threshold, the flame particle emitter extinguishes, smoke particles spawn, and celebration confetti triggers.
- A button tap fallback is available when microphone permissions are denied.

### 6.3 Mini-Game: Petal Catching (`PetalCatchGame.js`)
- A lightweight 2D canvas overlay mini-game.
- Falling petals are gathered by moving a collection basket with mouse or touch input.
- Reaching the score target awards a Golden Petal milestone recorded in `ProgressStore`.

---

## 7. User Interface Design System

### 7.1 Visual Architecture: Clean White and Pink Minimalist
The interface is designed with a simple, high-legibility theme:
- **Backgrounds**: Solid pure white (`#ffffff`) and soft blush (`#fff5f8`), completely free of glassmorphism or `backdrop-filter: blur`.
- **Borders**: Defined pastel outlines (`#ffd1dc` and `#ffb3c6`) ensuring sharp contrast on all displays.
- **Accents**: Sakura vibrant pink (`#ff4d88`), hover tone (`#e63973`), and deep magenta (`#d81b60`).
- **Typography**: Modern typography utilizing Plus Jakarta Sans with geometric letter-spacing and smooth antialiasing.
- **Safe Area Insets**: Full support for iOS and mobile notches via `env(safe-area-inset-top)` and `env(safe-area-inset-bottom)`.

### 7.2 Minimalist Navigation Components
- **Top Center Hub**: Streamlined floating pill dock displaying days together, golden petal badge, background music toggle, mini-game launcher, and letter button.
- **Chapter Dock**: Minimal 2-chapter dock (`01 Taman Sakura` and `02 Surat Ucapan`) anchored at the bottom center.
- **Collapsible Mini Timeline**: Floating pill (`Kenangan`) that expands on click into a vertical list of memories with auto-scrolling to the active memory. By default, it stays collapsed to leave the 3D scene open and uncluttered.
- **Performance HUD**: Collapsed by default into an FPS pill on top-left, expandable on click to reveal draw calls and triangle metrics.

### 7.3 Fullscreen and Zen Clean View Mode

| Control | Trigger | Keyboard Shortcut | Behavior |
| :--- | :--- | :--- | :--- |
| **Layar Penuh (Maximize Page)** | Overlay Button `#btn-toggle-fullscreen` | `F` | Calls `document.documentElement.requestFullscreen()`. Exits on repeat press or native `Esc`. |
| **Sembunyikan UI (Zen Clean View)** | Overlay Button `#btn-toggle-ui` | `U` | Appends `.ui-hidden` to `document.body`. Hides HUD, chapter dock, status pills, and debug menus. |
| **Tampilkan UI (Restore View)** | Floating Pill `#btn-restore-ui` | `U` or `Escape` | Removes `.ui-hidden` from `document.body`. Restores all UI components. |

---

## 8. Debugging and Calibration System

### 8.1 URL Hash and Shortcut Activation (`DebugGUI.js`)
The `lil-gui` panel is activated dynamically:
- Navigating with the `#debug` URL hash (`http://localhost:5173/#debug`).
- Pressing `Shift + D` on any page view.
- Clicking the debug shortcut link inside the Performance HUD.

### 8.2 Live Tuning Controls
- **Model Transform**: Live adjustment of X, Y, Z position, pitch/yaw/roll rotations, and uniform scale.
- **Component Visibility**: Toggles for picnic prop items and terrain mound.
- **Idle Animation Controls**: Direct tuning of sway speed, sway angle, float amplitude, foliage wind strength, and lantern swing angle, alongside one-click preset buttons.
- **Persistence**: "Save to LocalStorage" preserves calibrated coordinates across page refreshes; "Reset Defaults" restores baseline values.

---

## 9. Performance and Memory Lifecycle

### 9.1 Render Optimization
- **Draw Call Management**: Static garden props utilize geometry merging through `BufferGeometryUtils.mergeGeometries`.
- **Instancing**: 1,200 petals rendered in a single draw call via `THREE.InstancedMesh`.
- **DPR Throttling**: `window.devicePixelRatio` is clamped between 1.0 and 2.0 to protect mobile GPUs from thermal throttling.
- **Pause on Blur**: `THREE.Timer` pauses delta accumulation when the browser tab loses focus, preventing delta spikes and animation jump glitches upon return.

### 9.2 Teardown and Disposal
The application implements strict disposal routines across all components:
- Recursive geometry disposal (`geometry.dispose()`).
- Material and texture unloading (`material.dispose()`, `texture.dispose()`).
- Event listener detachment (`removeEventListener` on window, document, and canvas).
- Complete DOM cleanup on Vite HMR module replacement (`import.meta.hot.dispose`).
