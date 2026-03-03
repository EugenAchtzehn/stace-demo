export class ManagedLayer {
  constructor(id, name, type, params = {}) {
    this.id = id;
    this.name = name;
    // VectorLayer, TileLayer, etc.
    this.type = type;
    this.params = params;
  }
}
