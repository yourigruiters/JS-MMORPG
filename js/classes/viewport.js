// Viewport class
class Viewport {
  constructor() {
    this.screen = [0, 0]; // Dimensions of canvas - Set at beginning
    this.startTile = [0, 0]; // TopLeft tile (first visible)
    this.endTile = [0, 0]; // BottomRight tile (last visible)
    this.offset = [0, 0]; // Offset from center to draw Culling
  }

  // Update: Make viewpoint dead center of the screen
  // PX and PY are character position on the canvas
  update = (px, py) => {
    // Calculate offset of character from default center positions
    this.offset[0] = Math.floor(this.screen[0] / 2 - px);
    this.offset[1] = Math.floor(this.screen[1] / 2 - py);
    // this.offset[x] = Math.floor(400//canvaswidth divided by 2 = 200 - playerPX)

    // Players tile position - Equal to player.tilefrom
    let tile = [Math.floor(px / tileW), Math.floor(py / tileH)];

    // CULLING
    // Calculate extra tile horizontally and vertically so screen doesn't flicker whilst moving
    // Calculate start tile position
    this.startTile[0] = tile[0] - 1 - Math.ceil(this.screen[0] / 2 / tileW);
    this.startTile[1] = tile[1] - 1 - Math.ceil(this.screen[1] / 2 / tileH);
    // Calculating end tile position
    this.endTile[0] = tile[0] + 1 + Math.ceil(this.screen[0] / 2 / tileW);
    this.endTile[1] = tile[1] + 1 + Math.ceil(this.screen[1] / 2 / tileH);

    // Ensure that start tile doens't fall within map bounds
    if (this.startTile[0] < 0) {
      this.startTile[0] = 0;
    }
    if (this.startTile[1] < 0) {
      this.startTile[1] = 0;
    }
    // Ensure that end tile doesn't fall outside of map bounds
    if (this.endTile[0] >= mapW) {
      this.endTile[0] = mapW - 1;
    }
    if (this.endTile[1] >= mapH) {
      this.endTile[1] = mapH - 1;
    }
  };
}
