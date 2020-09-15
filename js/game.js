//*** GLOBAL GAME VARIABLES ***/
// Overlay variables
let gameOverlay = true;
const gameOverlayElement = document.getElementById("game-overlay");

// Game variables
let canvas = null;
let ctx = null;
let canvasBackgroundColor = "#000";

// GameBar variables
let messageInput = null;
let messageSubmit = null;

// Gametime and speed information
let gameTime = 0;

const gameSpeed = 2; // Normal speed

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

let mouseLocationX = 0;
let mouseLocationY = 0;
let mouseColor = "red";
//*** CLASS VARIABLES ***/
// Create tileMap
const tileMapData = new TileMap();
// Create viewport using class
let viewport = new Viewport();
// Create player using class
let player = new Character();

//*** HELPER FUNCTION ***/
// Function: return index of tile character is moving to
getTileIndex = (x, y) => {
	return y * mapW + x;
};

getTileInfo = (e) => {
	mouseLocationX = e.pageX - viewport.offset[0];
	mouseLocationY = e.pageY - viewport.offset[1];

	const relX = Math.floor((e.pageX - viewport.offset[0]) / 80);
	const relY = Math.floor((e.pageY - viewport.offset[1]) / 80);

	// Log tile information to console
	const tileInfo = tileMapData.map[getTileIndex(relX, relY)];

	return tileInfo;
};

//*** WINDOW.ONLOAD ***/
// When the game is first loaded (Single instances)
window.onload = () => {
	// Create game and start canvas
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");

	// GameBar elements
	messageInput = document.getElementById("message");

	// Set game to fullscreen
	resize();

	// DrawGame
	requestAnimationFrame(drawGame);

	// Resize fullscreen game
	window.addEventListener("resize", () => resize());

	// Check for player movement
	// Key pressed
	window.addEventListener("keydown", (e) => handleKeyDown(e));

	// Key released
	window.addEventListener("keyup", (e) => handleKeyUp(e));

	// Check for mouse movement
	canvas.addEventListener("mousemove", (e) => handleMouseMove(e));

	canvas.addEventListener("contextmenu", (e) => e.preventDefault(), false);

	// Check for mouse click
	canvas.addEventListener("mousedown", (e) => handleMouseDown(e));

	// Check for typing of message
	// messageSubmit.addEventListener("click", (e) => {
	// 	e.preventDefault();
	// 	if (messageInput.value !== "") {
	// 		player.sendMessage(messageInput.value);
	// 		messageInput.value = "";
	// 	}
	// });

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
