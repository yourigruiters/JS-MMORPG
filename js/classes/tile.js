// Tile class holds all possible tile atributes
class Tile {
  constructor(tx, ty, tt) {
    this.x = tx;
    this.y = ty;
    this.type = tt; // Kind of tile type (Grass, sand, water AS 0, 1, 2)
    this.roof = null; // Check if roof on this tile
    this.roofType = 0; // Rooftype if above is true
    this.eventEnter = null; // Event on entering tile
    this.object = null; // What object is on this tile
    this.itemStack = null; // Holds placedItemStack on tile
  }
}
