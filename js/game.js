//*** GLOBAL GAME VARIABLES ***/
// Game variables
let canvas = null;
let ctx = null;

// Gametime and speed information
let gameTime = 0;

let gameSpeeds = [
  { name: "normal", mult: 1 },
  { name: "fast", mult: 3 },
  { name: "paused", mult: 0 }
];

let currentGameSpeed = 0;

// FPS variables
let currentSecond = 0;
let frameCount = 0;
let framesLastSecond = 0;
let lastFrameTime = 0;

// Possible directions
const directions = {
  up: 0,
  right: 1,
  down: 2,
  left: 3
};

//*** CLASS VARIABLES ***/
// Create tileMap
const tileMapData = new TileMap();
// Create viewport using class
let viewport = new Viewport();
// Create player using class
let player = new Character();

//*** HELPER FUNCTION ***/
// Function: return index of tile character is moving to
toIndex = (x, y) => {
  return y * mapW + x;
};

//*** WINDOW.ONLOAD ***/
// When the game is first loaded (Single instances)
window.onload = () => {
  // Create game and start canvas
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  requestAnimationFrame(drawGame);

  // Font details
  ctx.font = "normal 25px sans-serif";

  // Check for player movement
  // Key pressed
  window.addEventListener("keydown", e => {
    // Key: arrows
    if (e.keyCode >= 37 && e.keyCode <= 40) {
      keysDown[e.keyCode] = true;
    }

    // Key: t (take)
    if (e.keyCode == 84) {
      keysDown[e.keyCode] = true;
    }
  });

  // Key released
  window.addEventListener("keyup", e => {
    // Key: arrows
    if (e.keyCode >= 37 && e.keyCode <= 40) {
      keysDown[e.keyCode] = false;
    }

    // Key: t (take)
    if (e.keyCode == 84) {
      keysDown[e.keyCode] = false;
    }

    // Key: s (speed)
    if (e.keyCode == 83) {
      currentGameSpeed = currentGameSpeed === 0 ? 1 : 0;
    }

    // Key: p (pause)
    if (e.keyCode == 80) {
      currentGameSpeed = currentGameSpeed === 2 ? 0 : 2;
    }
  });

  // Check for mouse click
  canvas.addEventListener("mousedown", e => {
    const relX = Math.floor(
      (e.pageX - e.target.offsetLeft - viewport.offset[0]) / 80
    );
    const relY = Math.floor(
      (e.pageY - e.target.offsetTop - viewport.offset[1]) / 80
    );

    // Log tile information to console
    console.log(tileMapData.map[toIndex(relX, relY)]);
  });

  // Set viewport: equal to width and height of canvas
  viewport.screen = [canvas.width, canvas.height];

  loadMap("default");
};

//*** DRAWGAME ***/
// Draw the game (Returning instances)
drawGame = () => {
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

  // Check if player can move
  if (
    !player.processMovement(gameTime) &&
    gameSpeeds[currentGameSpeed].mult != 0
  ) {
    movePlayer(gameTime);
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
