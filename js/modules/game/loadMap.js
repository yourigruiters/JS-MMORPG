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

loadMap = map => {
  if (map === "default") {
    mapW = 20;
    mapH = 20;

    characterset = new Image();
    floorset = new Image();
    itemset = new Image();
    objectset = new Image();

    // If tileset cannot be loaded provide error
    characterset.onerror = () => {
      ctx = null;
      console.log("Failed loading tileset image");
    };

    // Set tileset variable to true
    characterset.onload = () => {
      tilesetLoaded = true;
    };

    // Load tileset
    characterset.src = charactersetURL;
    floorset.src = floorsetURL;
    itemset.src = itemsetURL;
    objectset.src = objectsetURL;

    // Build map and add roofs
    tileMapData.buildMapFromData(gameMap, mapW, mapH);
    tileMapData.buildRoofsFromData(roofList);

    // Example of eventEnter system
    tileMapData.map[2 * mapW + 2].eventEnter = () => {
      console.log("Entered tile 2,2");
    };
    tileMapData.map[13 * mapW + 8].eventEnter = () => {
      loadMap("test");
    };

    // Example of objects placing on screen
    let mo1 = new ObjectMap(1);
    mo1.placeAt(2, 4);
    let mo2 = new ObjectMap(1);
    mo2.placeAt(2, 3);

    let mo4 = new ObjectMap(1);
    mo4.placeAt(4, 5);
    let mo5 = new ObjectMap(1);
    mo5.placeAt(4, 8);

    let mo7 = new ObjectMap(1);
    mo7.placeAt(2, 6);
    let mo8 = new ObjectMap(1);
    mo8.placeAt(2, 9);
    let mo9 = new ObjectMap(2);
    mo9.placeAt(8, 13);

    // Example item stack
    for (let i = 3; i < 8; i++) {
      let ps = new PlacedItemStack(1, 1);
      ps.placeAt(i, 1);
    }
    for (let i = 3; i < 8; i++) {
      let ps = new PlacedItemStack(1, 1);
      ps.placeAt(3, i);
    }
  } else {
    mapW = 20;
    mapH = 20;

    characterset = new Image();
    floorset = new Image();
    itemset = new Image();
    objectset = new Image();

    // If tileset cannot be loaded provide error
    characterset.onerror = () => {
      ctx = null;
      console.log("Failed loading tileset image");
    };

    // Set tileset variable to true
    characterset.onload = () => {
      tilesetLoaded = true;
    };

    // Load tileset
    characterset.src = charactersetURL;
    floorset.src = floorsetURL;
    itemset.src = itemsetURL;
    objectset.src = objectsetURL;

    // Build map and add roofs
    tileMapData.buildMapFromData(gameMap, mapW, mapH);
    tileMapData.buildRoofsFromData(roofList);

    // Example of eventEnter system
    tileMapData.map[2 * mapW + 2].eventEnter = () => {
      console.log("Entered tile 2,2");
    };
    tileMapData.map[13 * mapW + 8].eventEnter = () => {
      loadMap("test");
    };

    // Example of objects placing on screen
    let mo1 = new ObjectMap(1);
    mo1.placeAt(2, 4);
    let mo2 = new ObjectMap(2);
    mo2.placeAt(2, 3);

    // Example item stack
    for (let i = 3; i < 8; i++) {
      let ps = new PlacedItemStack(1, 1);
      ps.placeAt(i, 1);
    }
    for (let i = 3; i < 8; i++) {
      let ps = new PlacedItemStack(1, 1);
      ps.placeAt(3, i);
    }
  }
};
