import { EventEmitter } from './EventEmitter.js';

export class ProgressStore extends EventEmitter {
  constructor() {
    super();
    this.STORAGE_KEY = 'birthday_3d_progress_v1';
    this.state = this.load();
  }

  load() {
    const defaultState = {
      goldenPetal: false,
      openedMemories: [],
      letterRead: false,
      easterEggFound: false,
      relationshipStartDate: '2023-01-01' // Dapat dikonfigurasi
    };

    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (saved) {
        return { ...defaultState, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.warn('[ProgressStore] Failed to read localStorage, using default state.', e);
    }

    return defaultState;
  }

  save() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state));
      // Backward compatibility for standalone keys
      if (this.state.goldenPetal) {
        localStorage.setItem('goldenPetal_tangkapKelopak', 'true');
      }
      this.trigger('change', [this.state]);
    } catch (e) {
      console.warn('[ProgressStore] Failed to write localStorage.', e);
    }
  }

  markMemoryOpened(id) {
    if (!this.state.openedMemories.includes(id)) {
      this.state.openedMemories.push(id);
      this.save();
    }
  }

  isMemoryOpened(id) {
    return this.state.openedMemories.includes(id);
  }

  setGoldenPetal(awarded = true) {
    this.state.goldenPetal = awarded;
    this.save();
  }

  hasGoldenPetal() {
    return this.state.goldenPetal || localStorage.getItem('goldenPetal_tangkapKelopak') === 'true';
  }

  setLetterRead(read = true) {
    this.state.letterRead = read;
    this.save();
  }

  hasLetterRead() {
    return this.state.letterRead;
  }

  setEasterEggFound(found = true) {
    this.state.easterEggFound = found;
    this.save();
  }

  hasEasterEggFound() {
    return this.state.easterEggFound;
  }

  resetProgress() {
    this.state = {
      goldenPetal: false,
      openedMemories: [],
      letterRead: false,
      easterEggFound: false,
      relationshipStartDate: '2023-01-01'
    };
    try {
      localStorage.removeItem(this.STORAGE_KEY);
      localStorage.removeItem('goldenPetal_tangkapKelopak');
    } catch (e) {}
    this.save();
  }
}

export const progressStore = new ProgressStore();
