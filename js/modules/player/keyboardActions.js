// Keyboard keys
let keysDown = {
  37: false, // left arrow
  38: false, // up arrow
  39: false, // right arrow
  40: false, //down arrow
  84: false // Key: T (take)
};

// Check if player can move on current gameTime
movePlayer = gameTime => {
  if (keysDown[38] && player.canMoveUp()) {
    player.moveUp(gameTime);
  } else if (keysDown[40] && player.canMoveDown()) {
    player.moveDown(gameTime);
  } else if (keysDown[37] && player.canMoveLeft()) {
    player.moveLeft(gameTime);
  } else if (keysDown[39] && player.canMoveRight()) {
    player.moveRight(gameTime);
  } else if (keysDown[84]) {
    player.pickUp();
  }
};
