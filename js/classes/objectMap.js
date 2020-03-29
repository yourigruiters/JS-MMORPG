// MapObject class stores the objects on the map
class ObjectMap {
  constructor(nt) {
    this.x = 0;
    this.y = 0;
    this.type = nt; // Taken from objectTypes
  }

  // Method to place object at specific tile position.
  // If previously placed, destroy the object at current tile
  placeAt = (nx, ny) => {
    if (tileMapData.map[toIndex(this.x, this.y)].object === this) {
      tileMapData.map[toIndex(this.x, this.y)].object = null;
    }

    this.x = nx;
    this.y = ny;

    tileMapData.map[toIndex(nx, ny)].object = this;
  };
}
