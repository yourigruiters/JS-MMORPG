// Change tile from 4 to 2 (UPDATE: water to bridge)
drawBridge = () => {
  tileMap[toIndex(4, 5)] = tileMap[toIndex(4, 5)] == 4 ? 2 : 4;
};

// Event attached to a tile
// Tile calculated by counting one by one
const tileEvents = {
  23: drawBridge,
  25: drawBridge,
  121: character => {
    character.placeAt(1, 8);
  },
  161: character => {
    character.placeAt(1, 6);
  }
};
