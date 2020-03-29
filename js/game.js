//*** GLOBAL GAME VARIABLES ***/
// Game variables
let canvas = null;
let ctx = null;

// Gametime and speed information
let gameTime = 0;

let gameSpeeds = [
  { name: "normal", mult: 1 },
  { name: "slow", mult: 0.3 },
  { name: "fast", mult: 3 },
  { name: "paused", mult: 0 }
];

let currentGameSpeed = 0;

// Map variables
// Size of map
const mapW = 20; // mapW * tileW = screenWidth
const mapH = 20; // mapH * tileH = screenHeight
// Size of tiles
const tileW = 80; // in PX
const tileH = 80; // in PX
// Tileset multiplier for default 40px
const tileMultiplier = tileW / 40;

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
  ctx.font = "normal 15px sans-serif";

  // Check for player movement
  // Key pressed
  window.addEventListener("keydown", e => {
    // Key: arrows
    if (e.keyCode >= 37 && e.keyCode <= 40) {
      keysDown[e.keyCode] = true;
    }
  });

  // Key released
  window.addEventListener("keyup", e => {
    // Key: arrows
    if (e.keyCode >= 37 && e.keyCode <= 40) {
      keysDown[e.keyCode] = false;
    }

    // Key: s
    if (e.keyCode == 83) {
      currentGameSpeed =
        currentGameSpeed >= gameSpeeds.length - 1 ? 0 : currentGameSpeed + 1;
    }
  });

  // Set viewport: equal to width and height of canvas
  viewport.screen = [canvas.width, canvas.height];

  // Loading in tileset
  tileset = new Image();

  // If tileset cannot be loaded provide error
  tileset.onerror = () => {
    ctx = null;
    alert("Failed loading tileset image");
  };

  // Set tileset variable to true
  tileset.onload = () => {
    tilesetLoaded = true;
  };

  // Load tileset
  tileset.src = tilesetURL;

  // Check every tileType
  for (tileType in tileTypes) {
    // Check if tileType has multiple sprites (Animated sprite)
    tileTypes[tileType]["animated"] =
      tileTypes[tileType].sprites.length > 1 ? true : false;

    // If tileType is animated
    if (tileTypes[tileType].animated) {
      // Calculate total duration of sprite
      let totalDuration = 0;

      for (sprite in tileTypes[tileType].sprites) {
        tileTypes[tileType].sprites[sprite]["start"] = totalDuration;
        totalDuration += tileTypes[tileType].sprites[sprite].d; //d = duration
        tileTypes[tileType].sprites[sprite]["end"] = totalDuration;
      }

      // Add spriteDuration with total duration time for animations
      tileTypes[tileType]["spriteDuration"] = totalDuration;
    }
  }

  // Build map and add roofs
  tileMapData.buildMapFromData(gameMap, mapW, mapH);
  tileMapData.buildRoofsFromData(roofList);

  // Example of eventEnter system
  tileMapData.map[2 * mapW + 2].eventEnter = function() {
    console.log("Entered tile 2,2");
  };

  // Example of objects placing on screen
  let mo1 = new ObjectMap(1);
  mo1.placeAt(2, 4);
  let mo2 = new ObjectMap(2);
  mo2.placeAt(2, 3);

  let mo11 = new ObjectMap(1);
  mo11.placeAt(6, 4);
  let mo12 = new ObjectMap(2);
  mo12.placeAt(7, 4);

  let mo4 = new ObjectMap(3);
  mo4.placeAt(4, 5);
  let mo5 = new ObjectMap(3);
  mo5.placeAt(4, 8);
  let mo6 = new ObjectMap(3);
  mo6.placeAt(4, 11);

  let mo7 = new ObjectMap(3);
  mo7.placeAt(2, 6);
  let mo8 = new ObjectMap(3);
  mo8.placeAt(2, 9);
  let mo9 = new ObjectMap(3);
  mo9.placeAt(2, 12);
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

  // Draw FPS counter
  drawFPSCounter();

  // Update lastFrameTime (Global variable)
  lastFrameTime = currentFrameTime;
  // Re-drawing of game
  requestAnimationFrame(drawGame);
};
