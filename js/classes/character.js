// Character class holds all character configurations
class Character {
  constructor() {
    this.tileFrom = [1, 1]; // Current tile
    this.tileTo = [1, 1]; // Moving to tile
    this.timeMoved = 0; // Time of starting to move
    this.dimensions = [80, 80]; // Size of character
    this.position = [80, 80]; // Location on map
    this.inventory = new Inventory(3); // Inventory with amount of spaces

    this.delayMove = {}; // Time needed to move
    // UPDATE: Can the below be some sort of automated?!
    this.delayMove[floorTypes.path] = 400;
    this.delayMove[floorTypes.grass] = 700;
    this.delayMove[floorTypes.ice] = 300;
    this.delayMove[floorTypes.conveyorU] = 200;
    this.delayMove[floorTypes.conveyorD] = 200;
    this.delayMove[floorTypes.conveyorL] = 200;
    this.delayMove[floorTypes.conveyorR] = 200;

    this.direction = directions.down;

    // Player sprites
    // UPDATE: Can the below be updated to animated sprites?
    this.sprites = {};
    this.sprites[directions.up] = new Sprite([{ x: 80, y: 240, w: 80, h: 80 }]);
    this.sprites[directions.right] = new Sprite([
      { x: 80, y: 160, w: 80, h: 80 },
    ]);
    this.sprites[directions.down] = new Sprite([{ x: 80, y: 0, w: 80, h: 80 }]);
    this.sprites[directions.left] = new Sprite([
      { x: 80, y: 80, w: 80, h: 80 },
    ]);
  }

  // Set character to specified tile
  placeAt = (x, y) => {
    this.tileFrom = [x, y];
    this.tileTo = [x, y];
    this.position = [
      tileW * x + (tileW - this.dimensions[0]) / 2,
      tileH * y + (tileH - this.dimensions[1]) / 2,
    ];
  };

  // Process movement of the character
  processMovement = (currentFrameTime) => {
    // Check if character wants to move
    if (
      this.tileFrom[0] === this.tileTo[0] &&
      this.tileFrom[1] === this.tileTo[1]
    ) {
      return false;
    }

    // Speed of character movement on current tile type
    let moveSpeed = this.delayMove[
      tileTypes[
        tileMapData.map[toIndex(this.tileFrom[0], this.tileFrom[1])].type
      ].floor
    ];

    // If character wants to move
    // Check if time elapsed is greater than time to move a specific tile speed
    if (currentFrameTime - this.timeMoved >= moveSpeed) {
      // If true, should have reached destination (place it there to be certain)
      this.placeAt(this.tileTo[0], this.tileTo[1]);

      // Check if reached tile as event, call even with character (this) if true
      if (
        tileMapData.map[toIndex(this.tileTo[0], this.tileTo[1])].eventEnter !=
        null
      ) {
        tileMapData.map[toIndex(this.tileTo[0], this.tileTo[1])].eventEnter(
          this
        );
      }

      // Check floor type of character (Grass, sand, water AS 0, 1, 2)
      // Use for special types
      let tileFloor =
        tileTypes[
          tileMapData.map[toIndex(this.tileFrom[0], this.tileFrom[1])].type
        ].floor;

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
      // Use for default types
      // Calculate pixel position of character
      this.position[0] =
        this.tileFrom[0] * tileW + (tileW - this.dimensions[0]) / 2;
      this.position[1] =
        this.tileFrom[1] * tileH + (tileH - this.dimensions[1]) / 2;

      // Check if moving horizontally or vertically
      // Moving horizontal
      if (this.tileTo[0] != this.tileFrom[0]) {
        let difference =
          (tileW / moveSpeed) * (currentFrameTime - this.timeMoved);
        this.position[0] +=
          this.tileTo[0] < this.tileFrom[0] ? 0 - difference : difference;
      }
      // Moving vertical
      if (this.tileTo[1] != this.tileFrom[1]) {
        let difference =
          (tileH / moveSpeed) * (currentFrameTime - this.timeMoved);
        this.position[1] +=
          this.tileTo[1] < this.tileFrom[1] ? 0 - difference : difference;
      }

      // Round position values to nearest number
      this.position[0] = Math.round(this.position[0]);
      this.position[1] = Math.round(this.position[1]);
    }

    return true;
  };

  // Check if character can move to mapTile on specified coordinate
  canMoveTo = (x, y) => {
    // Check if coordinates fall out of map bound
    if (x < 0 || x >= mapW || y < 0 || y >= mapH) {
      return false;
    }

    // Check if tileType is solid by checking delayMove options
    if (
      typeof this.delayMove[
        tileTypes[tileMapData.map[toIndex(x, y)].type].floor
      ] === "undefined"
    ) {
      return false;
    }

    // Check if object on character is solid
    if (tileMapData.map[toIndex(x, y)].object != null) {
      var object = tileMapData.map[toIndex(x, y)].object;
      if (objectTypes[object.type].collision == objectCollision.solid) {
        return false;
      }
    }

    return true;
  };

  // Check if character can move in direction
  // Make character face that direction, move this to canMoveUp for creating interaction possibility
  canMoveUp = () => {
    this.direction = directions.up;
    return this.canMoveTo(this.tileFrom[0], this.tileFrom[1] - 1);
  };
  canMoveDown = () => {
    this.direction = directions.down;
    return this.canMoveTo(this.tileFrom[0], this.tileFrom[1] + 1);
  };
  canMoveLeft = () => {
    this.direction = directions.left;
    return this.canMoveTo(this.tileFrom[0] - 1, this.tileFrom[1]);
  };
  canMoveRight = () => {
    this.direction = directions.right;
    return this.canMoveTo(this.tileFrom[0] + 1, this.tileFrom[1]);
  };

  // Check if character can move in specified direction (Example: Ice floor type)
  canMoveDirection = (direction) => {
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
  moveUp = (gameTime) => {
    this.tileTo[1] -= 1;
    this.timeMoved = gameTime;
  };
  moveDown = (gameTime) => {
    this.tileTo[1] += 1;
    this.timeMoved = gameTime;
  };
  moveLeft = (gameTime) => {
    this.tileTo[0] -= 1;
    this.timeMoved = gameTime;
  };
  moveRight = (gameTime) => {
    this.tileTo[0] += 1;
    this.timeMoved = gameTime;
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

  // Pickup item and add to inventory
  pickUp = () => {
    // Check if character is moving
    if (
      this.tileTo[0] != this.tileFrom[0] ||
      this.tileTo[1] != this.tileFrom[1]
    ) {
      return false;
    }

    // Check if itemStack on character is defined
    const itemsStack =
      tileMapData.map[toIndex(this.tileFrom[0], this.tileFrom[1])].itemStack;

    // If there is an itemStack under character
    if (itemsStack !== null) {
      // Calculate how many items remain on the floor
      const remains = this.inventory.addItems(itemsStack.type, itemsStack.qty);

      // If anything remains leave on map or remove from map
      if (remains) {
        itemsStack.qty = remains;
      } else {
        tileMapData.map[
          toIndex(this.tileFrom[0], this.tileFrom[1])
        ].itemStack = null;
      }
    }

    return true;
  };
}
