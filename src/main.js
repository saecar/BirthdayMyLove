import { SceneManager } from './core/SceneManager.js';

let app = null;

function bootstrap() {
  const canvas = document.querySelector('canvas.webgl');
  if (!canvas) {
    console.error('[main] Canvas .webgl not found');
    return;
  }

  app = new SceneManager(canvas);

  // Expose on window for easy developer testing and lifecycle validation
  window.sceneManager = app;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}

// Vite HMR Clean Teardown
if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    if (app) {
      console.log('[HMR] Disposing SceneManager instance...');
      app.dispose();
      app = null;
    }
  });
}
