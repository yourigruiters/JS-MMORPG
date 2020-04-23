//*** DRAWGAME ***/
// Draw the game (Returning instances)
drawGame = () => {
  // Game can't run if CTX (canvas) is not found
  if (ctx === null) {
    return;
  }

  // Check if tileset has loaded properly, else try again
  if (!tilesetLoaded) {
    requestAnimationFrame(drawGame);
    return;
  }

  // Current time in MS
  let currentFrameTime = Date.now();
  // Set timeElapsed is time since last Frametime);
  let timeElapsed = currentFrameTime - lastFrameTime;
  gameTime += Math.floor(timeElapsed * gameSpeeds[currentGameSpeed].mult);

  // Set second
  let sec = Math.floor(Date.now() / 1000);

  // Check framecount (Should be 60fps)
  if (sec != currentSecond) {
    currentSecond = sec;
    framesLastSecond = frameCount;
    frameCount = 1;
  } else {
    frameCount++;
  }

  // Check if player can act
  if (
    !player.processMovement(gameTime) &&
    gameSpeeds[currentGameSpeed].mult != 0
  ) {
    playerAction(gameTime);
  }

  // Update viewport on the players current positions
  viewport.update(
    player.position[0] + player.dimensions[0] / 2,
    player.position[1] + player.dimensions[1] / 2
  );

  // Draw background
  drawBackground();

  // Draw map (Culling mode - Draw tiles visible to player only)
  drawCullingMap(currentFrameTime);

  // Draw inventory
  drawInventory();

  // Draw FPS counter
  drawFPSCounter();

  // Update lastFrameTime (Global variable)
  lastFrameTime = currentFrameTime;
  // Re-drawing of game
  requestAnimationFrame(drawGame);
};
