// MAP VARIABLES
// Global tileset variables
let tilesetLoaded = false;
let characterset = null;
let floorset = null;
let itemset = null;
let objectset = null;

// Tilemap layers
// 0: Floor
// 1: ItemStack
// 2: Player
// 3: Roof
// 4:
// x: Objects have own zIndex
// Loading in tileset
let charactersetURL = "../../../media/images/characterset.png";
let floorsetURL = "../../../media/images/floorset.png";
let itemsetURL = "../../../media/images/itemset.png";
let objectsetURL = "../../../media/images/objectset.png";
// Size of map in tiles
let mapW = 0;
let mapH = 0;
// Size of tiles
const tileW = 80;
const tileH = 80;
// Take pixels away from tiles for good drawing
const tileTakeExtra = 1;
const tileRemoveExtra = 2;

loadMap = (map, location) => {
	if (map === "mainMap") {
		mapW = 20;
		mapH = 20;

		// If tileset cannot be loaded provide error
		characterset.onerror = () => {
			ctx = null;
			console.log("Failed loading tileset image");
		};

		// Set tileset variable to true
		characterset.onload = () => {
			tilesetLoaded = true;
		};
		// Build map and add roofs
		tileMapData.buildMapFromData(mainMap, mapW, mapH);
		// tileMapData.buildRoofsFromData(roofList); // ADD LATER TO ICE DUNGEON

		// Playmusic
		playMusic("peaceful");

		// Example of eventEnter system
		tileMapData.map[19 * mapW + 9].eventEnter = () => {
			loadMap("outsideMap");
		};
		tileMapData.map[8 * mapW + 19].eventEnter = () => {
			loadMap("wildMap");
		};
		tileMapData.map[5 * mapW + 5].eventEnter = () => {
			loadMap("bankMap");
		};

		// // Objects placing on screen
		let house1 = new ObjectMap(3);
		house1.placeAt(9, 3);
		let house2 = new ObjectMap(3);
		house2.placeAt(4, 9);

		let bank = new ObjectMap(4);
		bank.placeAt(4, 3);

		// Example item stack
		let ps = new PlacedItemStack(1, 25);
		ps.placeAt(3, 2);
		let ps2 = new PlacedItemStack(1, 50);
		ps2.placeAt(1, 2);
		let ps3 = new PlacedItemStack(2, 1);
		ps3.placeAt(1, 14);
		let ps4 = new PlacedItemStack(2, 1);
		ps4.placeAt(1, 18);

		//Place character
		if (location === "default") {
			player.placeAt(9, 8);
		} else if (location === "right") {
			player.placeAt(18, 8);
		} else if (location === "bottom") {
			player.placeAt(9, 18);
		} else if (location === "bank") {
			player.placeAt(5, 7);
		}
	} else if (map === "wildMap") {
		mapW = 20;
		mapH = 20;

		// Build map and add roofs
		tileMapData.buildMapFromData(wildMap, mapW, mapH);
		// // Objects placing on screen
		let tree1 = new ObjectMap(1);
		tree1.placeAt(6, 9);
		let tree2 = new ObjectMap(1);
		tree2.placeAt(4, 10);
		let tree3 = new ObjectMap(1);
		tree3.placeAt(4, 12);
		let tree4 = new ObjectMap(1);
		tree4.placeAt(5, 14);
		let tree5 = new ObjectMap(1);
		tree5.placeAt(3, 16);
		// Playmusic
		playMusic("battlefront");

		// Example of eventEnter system
		tileMapData.map[8 * mapW + 0].eventEnter = () => {
			loadMap("mainMap", "right");
		};

		//Place character
		player.placeAt(1, 8);
	} else if (map === "outsideMap") {
		mapW = 9;
		mapH = 9;

		// Build map and add roofs
		tileMapData.buildMapFromData(outsideMap, mapW, mapH);

		// // Objects placing on screen
		let tree1 = new ObjectMap(1);
		tree1.placeAt(1, 1);
		let tree2 = new ObjectMap(1);
		tree2.placeAt(1, 3);
		let tree3 = new ObjectMap(1);
		tree3.placeAt(2, 6);
		let tree4 = new ObjectMap(1);
		tree4.placeAt(7, 6);
		let tree5 = new ObjectMap(1);
		tree5.placeAt(6, 7);

		// Playmusic
		playMusic("peaceful");

		// Example of eventEnter system
		tileMapData.map[0 * mapW + 4].eventEnter = () => {
			loadMap("mainMap", "bottom");
		};

		//Place character
		player.placeAt(4, 1);
	} else if (map === "bankMap") {
		mapW = 7;
		mapH = 7;

		// Build map and add roofs
		tileMapData.buildMapFromData(bankMap, mapW, mapH);

		// Playmusic
		playMusic("peaceful");

		// Example of eventEnter system
		tileMapData.map[6 * mapW + 3].eventEnter = () => {
			loadMap("mainMap", "bank");
		};

		//Place character
		player.placeAt(3, 5);
	} else {
		alert("error in loading map - wrong map name");
	}
};
