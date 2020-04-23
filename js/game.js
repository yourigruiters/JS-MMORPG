//*** GLOBAL GAME VARIABLES ***/
// Game variables
let canvas = null;
let ctx = null;

// Gametime and speed information
let gameTime = 0;

let gameSpeeds = [
  { name: "normal", mult: 2 },
  { name: "fast", mult: 4 },
  { name: "paused", mult: 0 },
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
  left: 3,
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

  // Set game to fullscreen
  resize();

  // DrawGame
  requestAnimationFrame(drawGame);

  // Resize fullscreen game
  window.addEventListener("resize", () => resize());

  // Check for player movement
  // Key pressed
  window.addEventListener("keydown", (e) => {
    // Key: t (take)
    if (e.keyCode == 84) {
      keysDown[e.keyCode] = true;
    }
  });

  // Key released
  window.addEventListener("keyup", (e) => {
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
  canvas.addEventListener("mousedown", (e) => {
    const relX = Math.floor((e.pageX - viewport.offset[0]) / 80);
    const relY = Math.floor((e.pageY - viewport.offset[1]) / 80);

    // Log tile information to console
    console.log(tileMapData.map[toIndex(relX, relY)]);
    
    // Current location, location of clicked tile, Path to walk there
    pathStart = player.tileFrom;
    pathEnd = [relX, relY];

    currentPath = findWalkablePath(pathStart, pathEnd);
    player.path = provideWalkablePathToPlayer();
  });

  characterset = new Image();
  floorset = new Image();
  itemset = new Image();
  objectset = new Image();

  // Load tileset
  characterset.src = charactersetURL;
  floorset.src = floorsetURL;
  itemset.src = itemsetURL;
  objectset.src = objectsetURL;

  loadMap("mainMap", "default");
};
