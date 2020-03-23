// Keyboard keys
let keysDown = {
  37: false, // left arrow
  38: false, // up arrow
  39: false, // right arrow
  40: false //down arrow
};

// Moving player
movePlayer = currentFrameTime => {
  if (
    keysDown[38] && // UP
    player.canMoveUp()
  ) {
    player.moveUp(currentFrameTime);
  } else if (
    keysDown[40] && // DOWN
    player.canMoveDown()
  ) {
    player.moveDown(currentFrameTime);
  } else if (
    keysDown[37] && // LEFT
    player.canMoveLeft()
  ) {
    player.moveLeft(currentFrameTime);
  } else if (
    keysDown[39] && // RIGHT
    player.canMoveRight()
  ) {
    player.moveRight(currentFrameTime);
  }
};
