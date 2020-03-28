// // UPDATE: CHANGE TO CLASS
// // TileMap Class used for managing and drawing the map
class TileMap {
  constructor() {
    this.map = [];
    this.w = 0;
    this.h = 0;
    this.levels = 4; // Should calculate this dynamicly, amount of layers
  }

  //Generate the map
  //Dimensions, width and height
  //D = array containing the tileType id to use for each map tile
  buildMapFromData = (d, w, h) => {
    this.w = w;
    this.h = h;

    // Is length given equal to size of the map?
    if (d.length != w * h) {
      return false;
    }

    // Cannot be created, clear map and create new.
    this.map.length = 0;

    // Building new with tile on each x/y position
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        this.map.push(new Tile(x, y, d[y * w + x]));
      }
    }

    return true;
  };

  // Attach roofs to map
  addRoofs = roofs => {
    // Check roof data array
    for (let index in roofs) {
      let roof = roofs[index];

      // Check if roof is not out of bound
      if (
        roof.x < 0 ||
        roof.y < 0 ||
        roof.x >= this.w ||
        roof.y >= this.h ||
        roof.x + roof.w > this.w ||
        roof.y + roof.h > this.h ||
        roof.data.length != roof.w * roof.h
      ) {
        continue;
      }

      // Loop through the positions and calculate the index of the tile for each position
      // Set the tile to this roof entry including the right roof tile.
      for (let y = 0; y < roof.h; y++) {
        for (let x = 0; x < roof.w; x++) {
          let tileIdx = (roof.y + y) * this.w + roof.x + x;

          this.map[tileIdx].roof = roof;
          this.map[tileIdx].roofType = roof.data[y * roof.w + x];
        }
      }
    }
  };
}
