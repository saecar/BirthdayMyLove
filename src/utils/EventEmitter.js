/**
 * Simple lightweight Event Emitter for decoupled components
 */
export class EventEmitter {
  constructor() {
    this.callbacks = {};
  }

  on(names, callback) {
    if (typeof names === 'undefined' || names === '') {
      console.warn('Wrong names');
      return false;
    }

    if (typeof callback === 'undefined') {
      console.warn('Wrong callback');
      return false;
    }

    const nameList = names.split(' ');

    for (const name of nameList) {
      if (!this.callbacks[name]) {
        this.callbacks[name] = [];
      }
      this.callbacks[name].push(callback);
    }

    return this;
  }

  off(names) {
    if (typeof names === 'undefined' || names === '') {
      console.warn('Wrong name');
      return false;
    }

    const nameList = names.split(' ');

    for (const name of nameList) {
      delete this.callbacks[name];
    }

    return this;
  }

  trigger(name, args = []) {
    if (typeof name === 'undefined' || name === '') {
      console.warn('Wrong name');
      return false;
    }

    if (this.callbacks[name]) {
      for (const callback of this.callbacks[name]) {
        callback.apply(this, args);
      }
    }

    return this;
  }

  dispose() {
    this.callbacks = {};
  }
}
