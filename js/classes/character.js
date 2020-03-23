// Character class

class Character {
  constructor() {
    this.tileFrom = [1, 1]; // Current tile
    this.tileTo = [1, 1]; // Next tile
    this.timeMoved = 0; // Time of starting to move
    this.dimensions = [60, 60]; // Character size
    this.position = [90, 90]; // Position on map
    this.delayMove = 400; // Time to move to next tile
  }

  // Place caracter at specified tile
  placeAt = (x, y) => {
    this.tileFrom = [x, y];
    this.tileTo = [x, y];
    this.position = [
      tileW * x + (tileW - this.dimensions[0]) / 2,
      tileH * y + (tileH - this.dimensions[1]) / 2
    ];
    // this.position start = [45][45]
    // One step to right makes it: [85][45]
  };

  // Process movement of the character
  processMovement = timeElapsed => {
    // Check if character wants to move
    if (
      this.tileFrom[0] === this.tileTo[0] &&
      this.tileFrom[1] === this.tileTo[1]
    ) {
      return false;
    }

    // If character wants to move:
    // Check if time elapsed is greater than time to move a tile
    if (timeElapsed - this.timeMoved >= this.delayMove) {
      // If this is the case, should have reached destination tile
      // (I believe, wait for next drawGame to respond)
      this.placeAt(this.tileTo[0], this.tileTo[1]);
    } else {
      // Calculate pixel position of the character on the map (Equal to placeAt() above)
      // Gives pixel position of the character at their starting tile (tileFrom value)
      this.position[0] =
        this.tileFrom[0] * tileW + (tileW - this.dimensions[0]) / 2;
      this.position[1] =
        this.tileFrom[1] * tileH + (tileH - this.dimensions[1]) / 2;

      console.log(this.tileFrom);
      // Moving horizontally or vertically?
      // Horizontally
      if (this.tileTo[0] != this.tileFrom[0]) {
        let difference =
          (tileW / this.delayMove) * (timeElapsed - this.timeMoved);
        this.position[0] +=
          this.tileTo[0] < this.tileFrom[0] ? 0 - difference : difference;
      }
      // Vertically
      if (this.tileTo[1] != this.tileFrom[1]) {
        let difference =
          (tileH / this.delayMove) * (timeElapsed - this.timeMoved);
        this.position[1] +=
          this.tileTo[1] < this.tileFrom[1] ? 0 - difference : difference;
      }

      // Round position value to nearest number
      this.position[0] = Math.round(this.position[0]);
      this.position[1] = Math.round(this.position[1]);
    }

    // Movement processing has been done
    return true;
  };

  // Check if character can move to mapTile on x,y coordinate
  canMoveTo = (x, y) => {
    // Check if the coordinates fall out of map bound
    if (x < 0 || x >= mapW || y < 0 || y >= mapH) {
      return false;
    }

    // Check if floorType is not Path - Water is also blocked
    if (tileTypes[tileMap[toIndex(x, y)]].floor != floorTypes.path) {
      return false;
    } else {
      // We can move to desired tile
      return true;
    }
  };

  // Check if character can move in each of possible directions
  canMoveUp = () => {
    return this.canMoveTo(this.tileFrom[0], this.tileFrom[1] - 1);
  };
  canMoveDown = () => {
    return this.canMoveTo(this.tileFrom[0], this.tileFrom[1] + 1);
  };
  canMoveLeft = () => {
    return this.canMoveTo(this.tileFrom[0] - 1, this.tileFrom[1]);
  };
  canMoveRight = () => {
    return this.canMoveTo(this.tileFrom[0] + 1, this.tileFrom[1]);
  };

  // Move in direction
  moveUp = currentGameTime => {
    this.tileTo[1] -= 1;
    this.timeMoved = currentGameTime;
  };
  moveDown = currentGameTime => {
    this.tileTo[1] += 1;
    this.timeMoved = currentGameTime;
  };
  moveLeft = currentGameTime => {
    this.tileTo[0] -= 1;
    this.timeMoved = currentGameTime;
  };
  moveRight = currentGameTime => {
    this.tileTo[0] += 1;
    this.timeMoved = currentGameTime;
  };
}
