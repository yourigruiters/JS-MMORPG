// Keyboard keys
let keysDown = {
  84: false // Key: T (take)
};

// Check if player can move on current gameTime
playerAction = gameTime => {
  if (player.path.length > 0) {
    player.followPath(gameTime);
  } else if (keysDown[84]) {
    player.pickUp();
  }
};
