export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(newSize) {
    this._size = newSize;
  }

  get location() {
    return this._location;
  }

  set location(newLocation) {
    this._location = newLocation;
  }

  [Symbol.toPrimitive](obj) {
    if (obj === 'string') {
      return this.location;
    }
    if (obj === 'number') {
      return this.size;
    }
    return this;
  }
}

