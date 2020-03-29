// Viewport for drawing map (included culling)
class Viewport {
  constructor() {
    this.screen = [0, 0]; // Canvas size (set during onload)
    this.startTile = [0, 0]; // Tile in top left corner
    this.endTile = [0, 0]; // Tile in bottom right corner
    this.offset = [0, 0]; // Offset from center (for culling)
  }

  // Update viewport on the players current positions (set during drawGame)
  update = (px, py) => {
    // Calculate offset of character from default center positions
    this.offset[0] = Math.floor(this.screen[0] / 2 - px);
    this.offset[1] = Math.floor(this.screen[1] / 2 - py);

    // Set players current tile position (equal to tileFrom)
    let tile = [Math.floor(px / tileW), Math.floor(py / tileH)];

    // Calculate culling with extra tile (prevent flickering)
    // Calculate start tile position
    this.startTile[0] = tile[0] - 1 - Math.ceil(this.screen[0] / 2 / tileW);
    this.startTile[1] = tile[1] - 1 - Math.ceil(this.screen[1] / 2 / tileH);
    // Calculating end tile position
    this.endTile[0] = tile[0] + 1 + Math.ceil(this.screen[0] / 2 / tileW);
    this.endTile[1] = tile[1] + 1 + Math.ceil(this.screen[1] / 2 / tileH);

    // Check that start tile doens't fall within map
    if (this.startTile[0] < 0) {
      this.startTile[0] = 0;
    }
    if (this.startTile[1] < 0) {
      this.startTile[1] = 0;
    }
    // Check that end tile doesn't fall outside of map
    if (this.endTile[0] >= mapW) {
      this.endTile[0] = mapW - 1;
    }
    if (this.endTile[1] >= mapH) {
      this.endTile[1] = mapH - 1;
    }
  };
}
