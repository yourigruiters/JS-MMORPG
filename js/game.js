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
// Size of tiles
const tileW = 80; // 40px
const tileH = 80; // 40px
// Size of screen (Multiplied by tilesize)
const mapW = 20; // 800px
const mapH = 20; // 800px

// FPS variables
let currentSecond = 0;
let frameCount = 0;
let framesLastSecond = 0;
let lastFrameTime = 0;

// Directions
const directions = {
  up: 0,
  right: 1,
  down: 2,
  left: 3
};

// Create tileMap
const mapTileData = new TileMap();
// Create viewport using class
let viewport = new Viewport();
// Create player using class
let player = new Character();

// Helper functions
// Function: return index of tile character is moving to
toIndex = (x, y) => {
  return y * mapW + x;
};

// When game is loaded
window.onload = () => {
  // Create game and start canvas
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  requestAnimationFrame(drawGame);

  // Font details
  ctx.font = "normal 15px sans-serif";

  // Checking for player movement
  // Key pressed
  window.addEventListener("keydown", e => {
    // Arrowkeys
    if (e.keyCode >= 37 && e.keyCode <= 40) {
      keysDown[e.keyCode] = true;
    }
  });

  // Key released
  window.addEventListener("keyup", e => {
    // ArrowKeys
    if (e.keyCode >= 37 && e.keyCode <= 40) {
      keysDown[e.keyCode] = false;
    }

    // Button S
    if (e.keyCode == 83) {
      currentGameSpeed =
        currentGameSpeed >= gameSpeeds.length - 1 ? 0 : currentGameSpeed + 1;
    }
  });

  // Set viewport equal to canvas width and height
  viewport.screen = [canvas.width, canvas.height];

  // Loading in tileset
  tileset = new Image();

  // If error in loading tileset - destroy game
  tileset.onerror = () => {
    ctx = null;
    alert("Failed loading tileset image");
  };

  // Set variable to true and load tileset
  tileset.onload = () => {
    tilesetLoaded = true;
  };

  // Load tileset
  tileset.src = tilesetURL;

  // Check every tileType in tileTypes
  for (tileType in tileTypes) {
    // If more than one sprite then add animated for animations
    tileTypes[tileType]["animated"] =
      tileTypes[tileType].sprites.length > 1 ? true : false;

    // If tileType is animated
    if (tileTypes[tileType].animated) {
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

  // Build map data and add roofs
  mapTileData.buildMapFromData(gameMap, mapW, mapH);
  mapTileData.addRoofs(roofList);
  // Example of eventEnter system
  mapTileData.map[2 * mapW + 2].eventEnter = function() {
    console.log("Entered tile 2,2");
  };

  // Example ojbects
  let mo1 = new MapObject(1);
  mo1.placeAt(2, 4);
  let mo2 = new MapObject(2);
  mo2.placeAt(2, 3);

  let mo11 = new MapObject(1);
  mo11.placeAt(6, 4);
  let mo12 = new MapObject(2);
  mo12.placeAt(7, 4);

  let mo4 = new MapObject(3);
  mo4.placeAt(4, 5);
  let mo5 = new MapObject(3);
  mo5.placeAt(4, 8);
  let mo6 = new MapObject(3);
  mo6.placeAt(4, 11);

  let mo7 = new MapObject(3);
  mo7.placeAt(2, 6);
  let mo8 = new MapObject(3);
  mo8.placeAt(2, 9);
  let mo9 = new MapObject(3);
  mo9.placeAt(2, 12);
};

// Drawing of the game
drawGame = () => {
  if (ctx === null) {
    return;
  }

  if (!tilesetLoaded) {
    requestAnimationFrame(drawGame);
    return;
  }

  // Current time in MS
  let currentFrameTime = Date.now();
  // timeElapsed is for future purposes (elapsed time since last Frametime);
  let timeElapsed = currentFrameTime - lastFrameTime;
  gameTime += Math.floor(timeElapsed * gameSpeeds[currentGameSpeed].mult);

  let sec = Math.floor(Date.now() / 1000);

  if (sec != currentSecond) {
    currentSecond = sec;
    framesLastSecond = frameCount;
    frameCount = 1;
  } else {
    frameCount++;
  }

  // Check if player is able to move with processMovement
  if (
    !player.processMovement(gameTime) &&
    gameSpeeds[currentGameSpeed].mult != 0
  ) {
    // Change player.tileFrom[1] > X && --- X is given value, should change if implementing map decoration
    // toIndex returns index of tile - 0 (blocked) or 1 (moveable)
    movePlayer(gameTime);
  }

  // Call viewport update function providing character position as parameters
  viewport.update(
    player.position[0] + player.dimensions[0] / 2,
    player.position[1] + player.dimensions[1] / 2
  );

  // Draw background
  drawBackground();

  // Culling (Draw tiles visible to player)
  drawCullingMap(currentFrameTime);

  // FPS counter
  drawFPSCounter();

  // Update global variable lastFrameTime
  lastFrameTime = currentFrameTime;
  // DrawGame again and again
  requestAnimationFrame(drawGame);
};
