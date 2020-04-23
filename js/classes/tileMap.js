// // Tilemap is used for managing and drawing the map
class TileMap {
  constructor() {
    this.map = []; // Contains complete map including roofs
    this.w = 0;
    this.h = 0;
    this.levels = 4; // In future calculate dynamically (Layers)
  }

  //Generate the map
  //Dimensions, width and height
  //D = array containing the tileType id to use for each map tile
  buildMapFromData = (map, mapW, mapH) => {
    this.w = mapW;
    this.h = mapH;

    // Is length given equal to size of the map?
    if (map.length != mapW * mapH) {
      alert("test");
      return false;
    }

    // Cannot be created, clear map and create new.
    this.map.length = 0;

    // Building new with tile on each x/y position
    for (let y = 0; y < mapH; y++) {
      for (let x = 0; x < mapW; x++) {
        // Build map of tiles
        this.map.push(new Tile(x, y, map[y * mapW + x]));
      }
    }

    return true;
  };

  // Generate the roofs
  buildRoofsFromData = (roofs) => {
    // Check every roof
    for (let index in roofs) {
      let roof = roofs[index];

      // Check if roof in map bounds
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
          // Calculate X position of roof
          let tileIdx = (roof.y + y) * this.w + roof.x + x;

          // Set roof on active on specific tile
          this.map[tileIdx].roof = roof;
          // Set rooftype of specific tile
          this.map[tileIdx].roofType = roof.data[y * roof.w + x];
        }
      }
    }
  };
}
