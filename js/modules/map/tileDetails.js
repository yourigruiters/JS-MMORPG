// Type of floors
const floorTypes = {
  solid: 0,
  path: 1,
  water: 2,
  ice: 3,
  conveyorU: 4,
  conveyorD: 5,
  conveyorL: 6,
  conveyorR: 7,
  grass: 8,
};

// Type of tiles
const tileTypes = {
  1: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 1 * 80 - 80, y: 1 * 80 - 80, w: 80, h: 80 }]),
  },
  2: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 2 * 80 - 80, y: 1 * 80 - 80, w: 80, h: 80 }]),
  },
  3: {
    floor: floorTypes.path,
    sprites: new Sprite([{ x: 3 * 80 - 80, y: 1 * 80 - 80, w: 80, h: 80 }]),
  },
  4: {
    floor: floorTypes.path,
    sprites: new Sprite([{ x: 4 * 80 - 80, y: 1 * 80 - 80, w: 80, h: 80 }]),
  },
  5: {
    floor: floorTypes.solid, // 5 // 6 // 15 // 16
    sprites: new Sprite([
      { x: 5 * 80 - 80, y: 1 * 80 - 80, w: 80, h: 80, d: 200 },
      { x: 6 * 80 - 80, y: 1 * 80 - 80, w: 80, h: 80, d: 200 },
      { x: 5 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80, d: 200 },
      { x: 6 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80, d: 200 },
      { x: 5 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80, d: 200 },
      { x: 6 * 80 - 80, y: 1 * 80 - 80, w: 80, h: 80, d: 200 },
    ]),
  },
  6: {
    // WATER
    // floor: floorTypes.path,
    // sprites: new Sprite([{ x: 6 * 80 - 80, y: 1 * 80 - 80, w: 80, h: 80 }]),
  },
  7: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 7 * 80 - 80, y: 1 * 80 - 80, w: 80, h: 80 }]),
  },
  8: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 8 * 80 - 80, y: 1 * 80 - 80, w: 80, h: 80 }]),
  },
  9: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 9 * 80 - 80, y: 1 * 80 - 80, w: 80, h: 80 }]),
  },
  10: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 10 * 80 - 80, y: 4 * 80 - 80, w: 80, h: 80 }]),
  },
  11: {
    floor: floorTypes.conveyorL, // 11 // 12 // 13 // 14
    sprites: new Sprite([
      { x: 1 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80, d: 200 },
      { x: 2 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80, d: 200 },
      { x: 3 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80, d: 200 },
      { x: 4 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80, d: 200 },
      // floor: floorTypes.grass,
      // sprites: new Sprite([{ x: 1 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80 }]),
    ]),
  },
  12: {
    // CONVEYORL
    // floor: floorTypes.grass,
    // sprites: new Sprite([{ x: 2 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80 }]),
  },
  13: {
    // CONVEYORL
    // floor: floorTypes.grass,
    // sprites: new Sprite([{ x: 3 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80 }]),
  },
  14: {
    // CONVEYORL
    // floor: floorTypes.grass,
    // sprites: new Sprite([{ x: 4 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80 }]),
  },
  15: {
    // WATER
    // floor: floorTypes.path,
    // sprites: new Sprite([{ x: 5 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80 }]),
  },
  16: {
    // WATER
    // floor: floorTypes.path,
    // sprites: new Sprite([{ x: 6 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80 }]),
  },
  17: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 7 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80 }]),
  },
  18: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 8 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80 }]),
  },
  19: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 9 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80 }]),
  },
  20: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 10 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80 }]),
  },
  21: {
    // CONVEYORR
    // floor: floorTypes.solid,
    // sprites: new Sprite([{ x: 1 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80 }]),
  },
  22: {
    // CONVEYORR
    // floor: floorTypes.grass,
    // sprites: new Sprite([{ x: 2 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80 }]),
  },
  23: {
    // CONVEYORR
    // floor: floorTypes.grass,
    // sprites: new Sprite([{ x: 3 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80 }]),
  },
  24: {
    floor: floorTypes.conveyorR, // 24 // 23 // 22 // 21
    sprites: new Sprite([
      { x: 4 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80, d: 200 },
      { x: 3 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80, d: 200 },
      { x: 2 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80, d: 200 },
      { x: 1 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80, d: 200 },
    ]),
    // floor: floorTypes.grass,
    // sprites: new Sprite([{ x: 4 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80 }]),
  },
  25: {
    floor: floorTypes.conveyorD, // 25 // 35 // 45 // 55
    sprites: new Sprite([
      { x: 5 * 80 - 80, y: 6 * 80 - 80, w: 80, h: 80, d: 200 },
      { x: 5 * 80 - 80, y: 5 * 80 - 80, w: 80, h: 80, d: 200 },
      { x: 5 * 80 - 80, y: 4 * 80 - 80, w: 80, h: 80, d: 200 },
      { x: 5 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80, d: 200 },
    ]),
    // floor: floorTypes.grass,
    // sprites: new Sprite([{ x: 5 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80 }]),
  },
  26: {
    floor: floorTypes.conveyorU, // 26 // 36 // 46 // 56
    sprites: new Sprite([
      { x: 6 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80, d: 200 },
      { x: 6 * 80 - 80, y: 4 * 80 - 80, w: 80, h: 80, d: 200 },
      { x: 6 * 80 - 80, y: 5 * 80 - 80, w: 80, h: 80, d: 200 },
      { x: 6 * 80 - 80, y: 6 * 80 - 80, w: 80, h: 80, d: 200 },
    ]),
    // floor: floorTypes.grass,
    // sprites: new Sprite([{ x: 6 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80 }]),
  },
  27: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 7 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80 }]),
  },
  28: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 8 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80 }]),
  },
  29: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 9 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80 }]),
  },
  30: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 10 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80 }]),
  },
  31: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 1 * 80 - 80, y: 4 * 80 - 80, w: 80, h: 80 }]),
  },
  32: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 2 * 80 - 80, y: 4 * 80 - 80, w: 80, h: 80 }]),
  },
  33: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 3 * 80 - 80, y: 4 * 80 - 80, w: 80, h: 80 }]),
  },
  34: {
    floor: floorTypes.ice,
    sprites: new Sprite([{ x: 4 * 80 - 80, y: 4 * 80 - 80, w: 80, h: 80 }]),
  },
  35: {
    // CONVOYERD
    // floor: floorTypes.grass,
    // sprites: new Sprite([{ x: 5 * 80 - 80, y: 4 * 80 - 80, w: 80, h: 80 }]),
  },
  36: {
    // CONVERYU
    // floor: floorTypes.grass,
    // sprites: new Sprite([{ x: 6 * 80 - 80, y: 4 * 80 - 80, w: 80, h: 80 }]),
  },
  37: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 7 * 80 - 80, y: 4 * 80 - 80, w: 80, h: 80 }]),
  },
  38: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 8 * 80 - 80, y: 4 * 80 - 80, w: 80, h: 80 }]),
  },
  39: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 9 * 80 - 80, y: 4 * 80 - 80, w: 80, h: 80 }]),
  },
  40: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 10 * 80 - 80, y: 4 * 80 - 80, w: 80, h: 80 }]),
  },
  41: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 1 * 80 - 80, y: 5 * 80 - 80, w: 80, h: 80 }]),
  },
  42: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 2 * 80 - 80, y: 5 * 80 - 80, w: 80, h: 80 }]),
  },
  43: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 3 * 80 - 80, y: 5 * 80 - 80, w: 80, h: 80 }]),
  },
  44: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 4 * 80 - 80, y: 5 * 80 - 80, w: 80, h: 80 }]),
  },
  45: {
    // CONVOYERD
    // floor: floorTypes.grass,
    // sprites: new Sprite([{ x: 5 * 80 - 80, y: 5 * 80 - 80, w: 80, h: 80 }]),
  },
  46: {
    // CONVERYU
    // floor: floorTypes.grass,
    // sprites: new Sprite([{ x: 6 * 80 - 80, y: 5 * 80 - 80, w: 80, h: 80 }]),
  },
  47: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 7 * 80 - 80, y: 5 * 80 - 80, w: 80, h: 80 }]),
  },
  48: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 8 * 80 - 80, y: 5 * 80 - 80, w: 80, h: 80 }]),
  },
  49: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 9 * 80 - 80, y: 5 * 80 - 80, w: 80, h: 80 }]),
  },
  50: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 10 * 80 - 80, y: 5 * 80 - 80, w: 80, h: 80 }]),
  },
  51: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 1 * 80 - 80, y: 6 * 80 - 80, w: 80, h: 80 }]),
  },
  52: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 2 * 80 - 80, y: 6 * 80 - 80, w: 80, h: 80 }]),
  },
  53: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 3 * 80 - 80, y: 6 * 80 - 80, w: 80, h: 80 }]),
  },
  54: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 4 * 80 - 80, y: 6 * 80 - 80, w: 80, h: 80 }]),
  },
  55: {
    // CONVOYERD
    // floor: floorTypes.grass,
    // sprites: new Sprite([{ x: 5 * 80 - 80, y: 6 * 80 - 80, w: 80, h: 80 }]),
  },
  56: {
    // CONVERYU
    // floor: floorTypes.grass,
    // sprites: new Sprite([{ x: 6 * 80 - 80, y: 6 * 80 - 80, w: 80, h: 80 }]),
  },
  57: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 7 * 80 - 80, y: 6 * 80 - 80, w: 80, h: 80 }]),
  },
  58: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 8 * 80 - 80, y: 6 * 80 - 80, w: 80, h: 80 }]),
  },
  59: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 9 * 80 - 80, y: 6 * 80 - 80, w: 80, h: 80 }]),
  },
  60: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 10 * 80 - 80, y: 7 * 80 - 80, w: 80, h: 80 }]),
  },
  61: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 1 * 80 - 80, y: 7 * 80 - 80, w: 80, h: 80 }]),
  },
  62: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 2 * 80 - 80, y: 7 * 80 - 80, w: 80, h: 80 }]),
  },
  63: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 3 * 80 - 80, y: 7 * 80 - 80, w: 80, h: 80 }]),
  },
  64: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 4 * 80 - 80, y: 7 * 80 - 80, w: 80, h: 80 }]),
  },
  65: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 5 * 80 - 80, y: 7 * 80 - 80, w: 80, h: 80 }]),
  },
  66: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 6 * 80 - 80, y: 7 * 80 - 80, w: 80, h: 80 }]),
  },
  67: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 7 * 80 - 80, y: 7 * 80 - 80, w: 80, h: 80 }]),
  },
  68: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 8 * 80 - 80, y: 7 * 80 - 80, w: 80, h: 80 }]),
  },
  69: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 9 * 80 - 80, y: 7 * 80 - 80, w: 80, h: 80 }]),
  },
  70: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 10 * 80 - 80, y: 7 * 80 - 80, w: 80, h: 80 }]),
  },
  71: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 1 * 80 - 80, y: 8 * 80 - 80, w: 80, h: 80 }]),
  },
  72: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 2 * 80 - 80, y: 8 * 80 - 80, w: 80, h: 80 }]),
  },
  73: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 3 * 80 - 80, y: 8 * 80 - 80, w: 80, h: 80 }]),
  },
  74: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 4 * 80 - 80, y: 8 * 80 - 80, w: 80, h: 80 }]),
  },
  75: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 5 * 80 - 80, y: 8 * 80 - 80, w: 80, h: 80 }]),
  },
  76: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 6 * 80 - 80, y: 8 * 80 - 80, w: 80, h: 80 }]),
  },
  77: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 7 * 80 - 80, y: 8 * 80 - 80, w: 80, h: 80 }]),
  },
  78: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 8 * 80 - 80, y: 8 * 80 - 80, w: 80, h: 80 }]),
  },
  79: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 9 * 80 - 80, y: 8 * 80 - 80, w: 80, h: 80 }]),
  },
  80: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 10 * 80 - 80, y: 8 * 80 - 80, w: 80, h: 80 }]),
  },
  81: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 1 * 80 - 80, y: 9 * 80 - 80, w: 80, h: 80 }]),
  },
  82: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 2 * 80 - 80, y: 9 * 80 - 80, w: 80, h: 80 }]),
  },
  83: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 3 * 80 - 80, y: 9 * 80 - 80, w: 80, h: 80 }]),
  },
  84: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 4 * 80 - 80, y: 9 * 80 - 80, w: 80, h: 80 }]),
  },
  85: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 5 * 80 - 80, y: 9 * 80 - 80, w: 80, h: 80 }]),
  },
  86: {
    floor: floorTypes.path,
    sprites: new Sprite([{ x: 6 * 80 - 80, y: 9 * 80 - 80, w: 80, h: 80 }]),
  },
  87: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 7 * 80 - 80, y: 9 * 80 - 80, w: 80, h: 80 }]),
  },
  88: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 8 * 80 - 80, y: 9 * 80 - 80, w: 80, h: 80 }]),
  },
  89: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 9 * 80 - 80, y: 9 * 80 - 80, w: 80, h: 80 }]),
  },
  90: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 10 * 80 - 80, y: 9 * 80 - 80, w: 80, h: 80 }]),
  },
  91: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 1 * 80 - 80, y: 10 * 80 - 80, w: 80, h: 80 }]),
  },
  92: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 2 * 80 - 80, y: 10 * 80 - 80, w: 80, h: 80 }]),
  },
  93: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 3 * 80 - 80, y: 10 * 80 - 80, w: 80, h: 80 }]),
  },
  94: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 4 * 80 - 80, y: 10 * 80 - 80, w: 80, h: 80 }]),
  },
  95: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 5 * 80 - 80, y: 10 * 80 - 80, w: 80, h: 80 }]),
  },
  96: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 6 * 80 - 80, y: 10 * 80 - 80, w: 80, h: 80 }]),
  },
  97: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 7 * 80 - 80, y: 10 * 80 - 80, w: 80, h: 80 }]),
  },
  98: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 8 * 80 - 80, y: 10 * 80 - 80, w: 80, h: 80 }]),
  },
  99: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 9 * 80 - 80, y: 10 * 80 - 80, w: 80, h: 80 }]),
  },
  100: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 10 * 80 - 80, y: 10 * 80 - 80, w: 80, h: 80 }]),
  },
};
