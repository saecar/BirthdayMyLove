export class LoadingScreen {
  constructor(assetLoader) {
    this.assetLoader = assetLoader;

    this.screenElement = document.getElementById('loading-screen');
    this.barElement = document.getElementById('progress-bar');
    this.percentElement = document.getElementById('loader-percent');
    this.itemsElement = document.getElementById('loader-items');
    this.statusElement = document.getElementById('loader-status');

    this.init();
  }

  init() {
    if (!this.screenElement) return;

    this._onProgress = this._onProgress.bind(this);
    this._onReady = this._onReady.bind(this);

    this.assetLoader.on('progress', this._onProgress);
    this.assetLoader.on('ready', this._onReady);
  }

  _onProgress(data) {
    if (!data) return;

    if (this.barElement) {
      this.barElement.style.width = `${data.percentage}%`;
    }

    if (this.percentElement) {
      this.percentElement.textContent = `${data.percentage}%`;
    }

    if (this.itemsElement) {
      this.itemsElement.textContent = `${data.loaded} / ${data.total}`;
    }

    if (this.statusElement) {
      if (data.percentage < 40) {
        this.statusElement.textContent = 'Memuat tekstur dan konfigurasi...';
      } else if (data.percentage < 90) {
        this.statusElement.textContent = 'Mengompilasi materi PBR dan pipeline...';
      } else {
        this.statusElement.textContent = 'Menyelesaikan setup visual...';
      }
    }
  }

  _onReady() {
    if (this.statusElement) {
      this.statusElement.textContent = 'Siap! Memasuki dunia 3D...';
    }

    setTimeout(() => {
      if (this.screenElement) {
        this.screenElement.classList.add('fade-out');

        // Remove from document flow after CSS transition finishes
        setTimeout(() => {
          if (this.screenElement) {
            this.screenElement.style.display = 'none';
          }
        }, 850);
      }
    }, 400);
  }

  dispose() {
    this.assetLoader.off('progress');
    this.assetLoader.off('ready');

    if (this.screenElement && this.screenElement.parentNode) {
      this.screenElement.parentNode.removeChild(this.screenElement);
    }

    this.screenElement = null;
    this.barElement = null;
    this.percentElement = null;
    this.itemsElement = null;
    this.statusElement = null;
  }
}
