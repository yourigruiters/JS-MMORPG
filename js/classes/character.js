// Character class

class Character {
  constructor() {
    this.tileFrom = [1, 1]; // Current tile
    this.tileTo = [1, 1]; // Next tile
    this.timeMoved = 0; // Time of starting to move
    this.dimensions = [60, 60]; // Character size
    this.position = [90, 90]; // Position on map

    this.delayMove = {}; // Time to move to next tile
    this.delayMove[floorTypes.path] = 400;
    this.delayMove[floorTypes.grass] = 700;
    this.delayMove[floorTypes.ice] = 300;
    this.delayMove[floorTypes.conveyorU] = 200;
    this.delayMove[floorTypes.conveyorD] = 200;
    this.delayMove[floorTypes.conveyorL] = 200;
    this.delayMove[floorTypes.conveyorR] = 200;

    this.direction = directions.down;

    // Player sprite
    this.sprites = {};
    this.sprites[directions.up] = [{ x: 0, y: 120, w: 30, h: 30 }];
    this.sprites[directions.right] = [{ x: 0, y: 150, w: 30, h: 30 }];
    this.sprites[directions.down] = [{ x: 0, y: 180, w: 30, h: 30 }];
    this.sprites[directions.left] = [{ x: 0, y: 210, w: 30, h: 30 }];
  }

  // Place caracter at specified tile
  placeAt = (x, y) => {
    this.tileFrom = [x, y];
    this.tileTo = [x, y];
    this.position = [
      tileW * x + (tileW - this.dimensions[0]) / 2,
      tileH * y + (tileH - this.dimensions[1]) / 2
    ];
  };

  // Process movement of the character
  processMovement = currentFrameTime => {
    // Check if character wants to move
    if (
      this.tileFrom[0] === this.tileTo[0] &&
      this.tileFrom[1] === this.tileTo[1]
    ) {
      return false;
    }

    // Speed at which a chatarcter moves on different tiles
    let moveSpeed = this.delayMove[
      tileTypes[tileMap[toIndex(this.tileFrom[0], this.tileFrom[1])]].floor
    ];

    // If character wants to move:
    // Check if time elapsed is greater than time to move a specific tile speed
    if (currentFrameTime - this.timeMoved >= moveSpeed) {
      // If this is the case, should have reached destination tile - ensure it there.
      this.placeAt(this.tileTo[0], this.tileTo[1]);

      // Check if there is an entry for the tileIndex in the event list and call event for this character
      if (
        typeof tileEvents[toIndex(this.tileTo[0], this.tileTo[1])] !==
        "undefined"
      ) {
        // Call the function on the eventList - Pass this (user)
        tileEvents[toIndex(this.tileTo[0], this.tileTo[1])](this);
      }
      // Check tiletype of character after completed a move (for special types)
      let tileFloor =
        tileTypes[tileMap[toIndex(this.tileFrom[0], this.tileFrom[1])]].floor;

      if (tileFloor === floorTypes.ice) {
        if (this.canMoveDirection(this.direction)) {
          this.moveDirection(this.direction, currentFrameTime);
        }
      } else if (tileFloor === floorTypes.conveyorL && this.canMoveLeft()) {
        this.moveLeft(currentFrameTime);
      } else if (tileFloor === floorTypes.conveyorR && this.canMoveRight()) {
        this.moveRight(currentFrameTime);
      } else if (tileFloor === floorTypes.conveyorU && this.canMoveUp()) {
        this.moveUp(currentFrameTime);
      } else if (tileFloor === floorTypes.conveyorD && this.canMoveDown()) {
        this.moveDown(currentFrameTime);
      }
    } else {
      // Calculate pixel position of the character on the map (Equal to placeAt() above)
      // Gives pixel position of the character at their starting tile (tileFrom value)
      this.position[0] =
        this.tileFrom[0] * tileW + (tileW - this.dimensions[0]) / 2;
      this.position[1] =
        this.tileFrom[1] * tileH + (tileH - this.dimensions[1]) / 2;

      // Moving horizontally or vertically?
      // Horizontally
      if (this.tileTo[0] != this.tileFrom[0]) {
        let difference =
          (tileW / moveSpeed) * (currentFrameTime - this.timeMoved);
        this.position[0] +=
          this.tileTo[0] < this.tileFrom[0] ? 0 - difference : difference;
      }
      // Vertically
      if (this.tileTo[1] != this.tileFrom[1]) {
        let difference =
          (tileH / moveSpeed) * (currentFrameTime - this.timeMoved);
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

    // Check if tileType is in delayMove list to see if we can move
    // Meaning at solid object we cannot move (water)
    if (
      typeof this.delayMove[tileTypes[tileMap[toIndex(x, y)]].floor] ===
      "undefined"
    ) {
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

  // Check if character can move in the provided direction
  canMoveDirection = direction => {
    switch (direction) {
      case directions.up:
        return this.canMoveUp();
      case directions.down:
        return this.canMoveDown();
      case directions.left:
        return this.canMoveLeft();
      case directions.right:
        return this.canMoveRight();
      default:
        return false;
    }
  };

  // Move in direction
  // Also face in that direction, move this to canMoveUp for creating interaction possibility
  moveUp = gameTime => {
    this.tileTo[1] -= 1;
    this.timeMoved = gameTime;
    this.direction = directions.up;
  };
  moveDown = gameTime => {
    this.tileTo[1] += 1;
    this.timeMoved = gameTime;
    this.direction = directions.down;
  };
  moveLeft = gameTime => {
    this.tileTo[0] -= 1;
    this.timeMoved = gameTime;
    this.direction = directions.left;
  };
  moveRight = gameTime => {
    this.tileTo[0] += 1;
    this.timeMoved = gameTime;
    this.direction = directions.right;
  };

  // Move in provided direction
  moveDirection = (direction, currentGameTime) => {
    switch (direction) {
      case directions.up:
        return this.moveUp(currentGameTime);
      case directions.down:
        return this.moveDown(currentGameTime);
      case directions.left:
        return this.moveLeft(currentGameTime);
      case directions.right:
        return this.moveRight(currentGameTime);
      default:
        return false;
    }
  };
}
