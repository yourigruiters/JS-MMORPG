// Type of floors
const floorTypes = {
  solid: 0,
  path: 1,
  ice: 2,
  grass: 3,
};

// Type of tiles
const tileTypes = {
  1: {
    // WATER 1/11/21
    floor: floorTypes.solid,
    // sprites: new Sprite([{ x: 1 * 80 - 80, y: 1 * 80 - 80, w: 80, h: 80 }]),
    sprites: new Sprite([
      { x: 1 * 80 - 80, y: 1 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 1 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 1 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 1 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80, d: 1500 },
    ])
  },
  2: {
    // WATER 1/11/21
    floor: floorTypes.solid,
    // sprites: new Sprite([{ x: 2 * 80 - 80, y: 1 * 80 - 80, w: 80, h: 80 }]),
    sprites: new Sprite([
      { x: 2 * 80 - 80, y: 1 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 2 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 2 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 2 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80, d: 1500 },
    ])
  },
  3: {
    // WATER 1/11/21
    floor: floorTypes.solid,
    // sprites: new Sprite([{ x: 3 * 80 - 80, y: 1 * 80 - 80, w: 80, h: 80 }]),
    sprites: new Sprite([
      { x: 3 * 80 - 80, y: 1 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 3 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 3 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 3 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80, d: 1500 },
    ])
  },
  4: {
    // WATER 1/11/21
    floor: floorTypes.solid,
    // sprites: new Sprite([{ x: 4 * 80 - 80, y: 1 * 80 - 80, w: 80, h: 80 }]),
    sprites: new Sprite([
      { x: 4 * 80 - 80, y: 1 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 4 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 4 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 4 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80, d: 1500 },
    ])
  },
  5: {
    // WATER 1/11/21
    floor: floorTypes.solid,
    // sprites: new Sprite([{ x: 5 * 80 - 80, y: 1 * 80 - 80, w: 80, h: 80 }]),
    sprites: new Sprite([
      { x: 5 * 80 - 80, y: 1 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 5 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 5 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 5 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80, d: 1500 },
    ]),
  },
  6: {
    // WATER 1/11/21
    floor: floorTypes.solid,
    // sprites: new Sprite([{ x: 6 * 80 - 80, y: 1 * 80 - 80, w: 80, h: 80 }]),
    sprites: new Sprite([
      { x: 6 * 80 - 80, y: 1 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 6 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 6 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 6 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80, d: 1500 },
    ])
  },
  7: {
    // WATER 1/11/21
    floor: floorTypes.solid,
    // sprites: new Sprite([{ x: 7 * 80 - 80, y: 1 * 80 - 80, w: 80, h: 80 }]),
    sprites: new Sprite([
      { x: 7 * 80 - 80, y: 1 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 7 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 7 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 7 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80, d: 1500 },
    ])
  },
  8: {
    // WATER 1/11/21
    floor: floorTypes.solid,
    // sprites: new Sprite([{ x: 8 * 80 - 80, y: 1 * 80 - 80, w: 80, h: 80 }]),
    sprites: new Sprite([
      { x: 8 * 80 - 80, y: 1 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 8 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 8 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 8 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80, d: 1500 },
    ])
  },
  9: {
    // WATER 1/11/21
    floor: floorTypes.solid,
    // sprites: new Sprite([{ x: 9 * 80 - 80, y: 1 * 80 - 80, w: 80, h: 80 }]),
    sprites: new Sprite([
      { x: 9 * 80 - 80, y: 1 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 9 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 9 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 9 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80, d: 1500 },
    ])
  },
  10: {
    // WATER 1/11/21
    floor: floorTypes.solid,
    // sprites: new Sprite([{ x: 10 * 80 - 80, y: 4 * 80 - 80, w: 80, h: 80 }]),
    sprites: new Sprite([
      { x: 10 * 80 - 80, y: 1 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 10 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 10 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 10 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80, d: 1500 },
    ])
  },
  11: {
    // floor: floorTypes.solid,
    // sprites: new Sprite([{ x: 1 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80 }]),
  },
  12: {
    // floor: floorTypes.solid,
    // sprites: new Sprite([{ x: 2 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80 }]),
  },
  13: {
    // floor: floorTypes.solid,
    // sprites: new Sprite([{ x: 3 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80 }]),
  },
  14: {
    // floor: floorTypes.solid,
    // sprites: new Sprite([{ x: 4 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80 }]),
  },
  15: {
    // floor: floorTypes.solid,
    // sprites: new Sprite([{ x: 5 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80 }]),
  },
  16: {
    // floor: floorTypes.solid,
    // sprites: new Sprite([{ x: 6 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80 }]),
  },
  17: {
    // floor: floorTypes.grass,
    // sprites: new Sprite([{ x: 7 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80 }]),
  },
  18: {
    // floor: floorTypes.grass,
    // sprites: new Sprite([{ x: 8 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80 }]),
  },
  19: {
    // floor: floorTypes.grass,
    // sprites: new Sprite([{ x: 9 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80 }]),
  },
  20: {
    // floor: floorTypes.grass,
    // sprites: new Sprite([{ x: 10 * 80 - 80, y: 2 * 80 - 80, w: 80, h: 80 }]),
  },
  21: {
    // floor: floorTypes.solid,
    // sprites: new Sprite([{ x: 1 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80 }]),
  },
  22: {
    // floor: floorTypes.solid,
    // sprites: new Sprite([{ x: 2 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80 }]),
  },
  23: {
    // floor: floorTypes.solid,
    // sprites: new Sprite([{ x: 3 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80 }]),
  },
  24: {
    // floor: floorTypes.solid,
    // sprites: new Sprite([{ x: 4 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80 }]),
  },
  25: {
    // floor: floorTypes.solid,
    // sprites: new Sprite([{ x: 5 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80 }]),
  },
  26: {
    // floor: floorTypes.solid,
    // sprites: new Sprite([{ x: 6 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80 }]),
  },
  27: {
    // floor: floorTypes.grass,
    // sprites: new Sprite([{ x: 7 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80 }]),
  },
  28: {
    // floor: floorTypes.grass,
    // sprites: new Sprite([{ x: 8 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80 }]),
  },
  29: {
    // floor: floorTypes.grass,
    // sprites: new Sprite([{ x: 9 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80 }]),
  },
  30: {
    // floor: floorTypes.grass,
    // sprites: new Sprite([{ x: 10 * 80 - 80, y: 3 * 80 - 80, w: 80, h: 80 }]),
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
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 4 * 80 - 80, y: 4 * 80 - 80, w: 80, h: 80 }]),
  },
  35: {
    // GRASS
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 5 * 80 - 80, y: 4 * 80 - 80, w: 80, h: 80 }]),
  },
  36: {
    // WATER 36/37/38
    floor: floorTypes.solid,
    // sprites: new Sprite([{ x: 6 * 80 - 80, y: 4 * 80 - 80, w: 80, h: 80 }]),
    sprites: new Sprite([
      { x: 6 * 80 - 80, y: 4 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 7 * 80 - 80, y: 4 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 8 * 80 - 80, y: 4 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 7 * 80 - 80, y: 4 * 80 - 80, w: 80, h: 80, d: 1500 },
    ])
  },
  37: {
    // floor: floorTypes.grass,
    // sprites: new Sprite([{ x: 7 * 80 - 80, y: 4 * 80 - 80, w: 80, h: 80 }]),
  },
  38: {
    // floor: floorTypes.grass,
    // sprites: new Sprite([{ x: 8 * 80 - 80, y: 4 * 80 - 80, w: 80, h: 80 }]),
  },
  39: {
    // WATER 39/49/59
    floor: floorTypes.solid,
    // sprites: new Sprite([{ x: 9 * 80 - 80, y: 4 * 80 - 80, w: 80, h: 80 }]),
    sprites: new Sprite([
      { x: 9 * 80 - 80, y: 4 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 9 * 80 - 80, y: 5 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 9 * 80 - 80, y: 6 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 9 * 80 - 80, y: 5 * 80 - 80, w: 80, h: 80, d: 1500 },
    ])
  },
  40: {
    // WATER 40/50/60
    floor: floorTypes.solid,
    // sprites: new Sprite([{ x: 10 * 80 - 80, y: 4 * 80 - 80, w: 80, h: 80 }]),
    sprites: new Sprite([
      { x: 10 * 80 - 80, y: 4 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 10 * 80 - 80, y: 5 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 10 * 80 - 80, y: 6 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 10 * 80 - 80, y: 5 * 80 - 80, w: 80, h: 80, d: 1500 },
    ])
  },
  41: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 1 * 80 - 80, y: 5 * 80 - 80, w: 80, h: 80 }]),
  },
  42: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 2 * 80 - 80, y: 5 * 80 - 80, w: 80, h: 80 }]),
  },
  43: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 3 * 80 - 80, y: 5 * 80 - 80, w: 80, h: 80 }]),
  },
  44: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 4 * 80 - 80, y: 5 * 80 - 80, w: 80, h: 80 }]),
  },
  45: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 5 * 80 - 80, y: 5 * 80 - 80, w: 80, h: 80 }]),
  },
  46: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 6 * 80 - 80, y: 5 * 80 - 80, w: 80, h: 80 }]),
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
    // floor: floorTypes.grass,
    // sprites: new Sprite([{ x: 9 * 80 - 80, y: 5 * 80 - 80, w: 80, h: 80 }]),
  },
  50: {
    // floor: floorTypes.grass,
    // sprites: new Sprite([{ x: 10 * 80 - 80, y: 5 * 80 - 80, w: 80, h: 80 }]),
  },
  51: {
    floor: floorTypes.path,
    sprites: new Sprite([{ x: 1 * 80 - 80, y: 6 * 80 - 80, w: 80, h: 80 }]),
  },
  52: {
    floor: floorTypes.path,
    sprites: new Sprite([{ x: 2 * 80 - 80, y: 6 * 80 - 80, w: 80, h: 80 }]),
  },
  53: {
    floor: floorTypes.path,
    sprites: new Sprite([{ x: 3 * 80 - 80, y: 6 * 80 - 80, w: 80, h: 80 }]),
  },
  54: {
    floor: floorTypes.path,
    sprites: new Sprite([{ x: 4 * 80 - 80, y: 6 * 80 - 80, w: 80, h: 80 }]),
  },
  55: {
    floor: floorTypes.path,
    sprites: new Sprite([{ x: 5 * 80 - 80, y: 6 * 80 - 80, w: 80, h: 80 }]),
  },
  56: {
    floor: floorTypes.path,
    sprites: new Sprite([{ x: 6 * 80 - 80, y: 6 * 80 - 80, w: 80, h: 80 }]),
  },
  57: {
    floor: floorTypes.path,
    sprites: new Sprite([{ x: 7 * 80 - 80, y: 6 * 80 - 80, w: 80, h: 80 }]),
  },
  58: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 8 * 80 - 80, y: 6 * 80 - 80, w: 80, h: 80 }]),
  },
  59: {
    // floor: floorTypes.solid,
    // sprites: new Sprite([{ x: 9 * 80 - 80, y: 6 * 80 - 80, w: 80, h: 80 }]),
  },
  60: {
    // floor: floorTypes.grass,
    // sprites: new Sprite([{ x: 10 * 80 - 80, y: 7 * 80 - 80, w: 80, h: 80 }]),
  },
  61: {
    // BRIDGE 61/62/63
    floor: floorTypes.path,
    // sprites: new Sprite([{ x: 1 * 80 - 80, y: 7 * 80 - 80, w: 80, h: 80 }]),
    sprites: new Sprite([
      { x: 1 * 80 - 80, y: 7 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 2 * 80 - 80, y: 7 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 3 * 80 - 80, y: 7 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 2 * 80 - 80, y: 7 * 80 - 80, w: 80, h: 80, d: 1500 },
    ])
  },
  62: {
    // floor: floorTypes.solid,
    // sprites: new Sprite([{ x: 2 * 80 - 80, y: 7 * 80 - 80, w: 80, h: 80 }]),
  },
  63: {
    // floor: floorTypes.solid,
    // sprites: new Sprite([{ x: 3 * 80 - 80, y: 7 * 80 - 80, w: 80, h: 80 }]),
  },
  64: {
    floor: floorTypes.path,
    sprites: new Sprite([{ x: 4 * 80 - 80, y: 7 * 80 - 80, w: 80, h: 80 }]),
  },
  65: {
    floor: floorTypes.path,
    sprites: new Sprite([{ x: 5 * 80 - 80, y: 7 * 80 - 80, w: 80, h: 80 }]),
  },
  66: {
    floor: floorTypes.path,
    sprites: new Sprite([{ x: 6 * 80 - 80, y: 7 * 80 - 80, w: 80, h: 80 }]),
  },
  67: {
    floor: floorTypes.path,
    sprites: new Sprite([{ x: 7 * 80 - 80, y: 7 * 80 - 80, w: 80, h: 80 }]),
  },
  68: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 8 * 80 - 80, y: 7 * 80 - 80, w: 80, h: 80 }]),
  },
  69: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 9 * 80 - 80, y: 7 * 80 - 80, w: 80, h: 80 }]),
  },
  70: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 10 * 80 - 80, y: 7 * 80 - 80, w: 80, h: 80 }]),
  },
  71: {
    // BRIDGE 71/72/73
    floor: floorTypes.path,
    // sprites: new Sprite([{ x: 1 * 80 - 80, y: 8 * 80 - 80, w: 80, h: 80 }]),
    sprites: new Sprite([
      { x: 1 * 80 - 80, y: 8 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 2 * 80 - 80, y: 8 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 3 * 80 - 80, y: 8 * 80 - 80, w: 80, h: 80, d: 1500 },
      { x: 2 * 80 - 80, y: 8 * 80 - 80, w: 80, h: 80, d: 1500 },
    ])
  },
  72: {
    // floor: floorTypes.solid,
    // sprites: new Sprite([{ x: 2 * 80 - 80, y: 8 * 80 - 80, w: 80, h: 80 }]),
  },
  73: {
    // floor: floorTypes.solid,
    // sprites: new Sprite([{ x: 3 * 80 - 80, y: 8 * 80 - 80, w: 80, h: 80 }]),
  },
  74: {
    floor: floorTypes.path,
    sprites: new Sprite([{ x: 4 * 80 - 80, y: 8 * 80 - 80, w: 80, h: 80 }]),
  },
  75: {
    floor: floorTypes.path,
    sprites: new Sprite([{ x: 5 * 80 - 80, y: 8 * 80 - 80, w: 80, h: 80 }]),
  },
  76: {
    floor: floorTypes.path,
    sprites: new Sprite([{ x: 6 * 80 - 80, y: 8 * 80 - 80, w: 80, h: 80 }]),
  },
  77: {
    floor: floorTypes.path,
    sprites: new Sprite([{ x: 7 * 80 - 80, y: 8 * 80 - 80, w: 80, h: 80 }]),
  },
  78: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 8 * 80 - 80, y: 8 * 80 - 80, w: 80, h: 80 }]),
  },
  79: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 9 * 80 - 80, y: 8 * 80 - 80, w: 80, h: 80 }]),
  },
  80: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 10 * 80 - 80, y: 8 * 80 - 80, w: 80, h: 80 }]),
  },
  81: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 1 * 80 - 80, y: 9 * 80 - 80, w: 80, h: 80 }]),
  },
  82: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 2 * 80 - 80, y: 9 * 80 - 80, w: 80, h: 80 }]),
  },
  83: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 3 * 80 - 80, y: 9 * 80 - 80, w: 80, h: 80 }]),
  },
  84: {
    floor: floorTypes.path,
    sprites: new Sprite([{ x: 4 * 80 - 80, y: 9 * 80 - 80, w: 80, h: 80 }]),
  },
  85: {
    floor: floorTypes.path,
    sprites: new Sprite([{ x: 5 * 80 - 80, y: 9 * 80 - 80, w: 80, h: 80 }]),
  },
  86: {
    floor: floorTypes.path,
    sprites: new Sprite([{ x: 6 * 80 - 80, y: 9 * 80 - 80, w: 80, h: 80 }]),
  },
  87: {
    floor: floorTypes.path,
    sprites: new Sprite([{ x: 7 * 80 - 80, y: 9 * 80 - 80, w: 80, h: 80 }]),
  },
  88: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 8 * 80 - 80, y: 9 * 80 - 80, w: 80, h: 80 }]),
  },
  89: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 9 * 80 - 80, y: 9 * 80 - 80, w: 80, h: 80 }]),
  },
  90: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 10 * 80 - 80, y: 9 * 80 - 80, w: 80, h: 80 }]),
  },
  91: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 1 * 80 - 80, y: 10 * 80 - 80, w: 80, h: 80 }]),
  },
  92: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 2 * 80 - 80, y: 10 * 80 - 80, w: 80, h: 80 }]),
  },
  93: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 3 * 80 - 80, y: 10 * 80 - 80, w: 80, h: 80 }]),
  },
  94: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 4 * 80 - 80, y: 10 * 80 - 80, w: 80, h: 80 }]),
  },
  95: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 5 * 80 - 80, y: 10 * 80 - 80, w: 80, h: 80 }]),
  },
  96: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 6 * 80 - 80, y: 10 * 80 - 80, w: 80, h: 80 }]),
  },
  97: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 7 * 80 - 80, y: 10 * 80 - 80, w: 80, h: 80 }]),
  },
  98: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 8 * 80 - 80, y: 10 * 80 - 80, w: 80, h: 80 }]),
  },
  99: {
    floor: floorTypes.ice,
    sprites: new Sprite([{ x: 9 * 80 - 80, y: 10 * 80 - 80, w: 80, h: 80 }]),
  },
  100: {
    floor: floorTypes.ice,
    sprites: new Sprite([{ x: 10 * 80 - 80, y: 10 * 80 - 80, w: 80, h: 80 }]),
  },
  101: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 1 * 80 - 80, y: 11 * 80 - 80, w: 80, h: 80 }]),
  },
  102: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 2 * 80 - 80, y: 11 * 80 - 80, w: 80, h: 80 }]),
  },
  103: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 3 * 80 - 80, y: 11 * 80 - 80, w: 80, h: 80 }]),
  },
  104: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 4 * 80 - 80, y: 11 * 80 - 80, w: 80, h: 80 }]),
  },
  105: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 5 * 80 - 80, y: 11 * 80 - 80, w: 80, h: 80 }]),
  },
  106: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 6 * 80 - 80, y: 11 * 80 - 80, w: 80, h: 80 }]),
  },
  107: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 7 * 80 - 80, y: 11 * 80 - 80, w: 80, h: 80 }]),
  },
  108: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 8 * 80 - 80, y: 11 * 80 - 80, w: 80, h: 80 }]),
  },
  109: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 9 * 80 - 80, y: 11 * 80 - 80, w: 80, h: 80 }]),
  },
  110: {
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 10 * 80 - 80, y: 11 * 80 - 80, w: 80, h: 80 }]),
  },
  111: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 1 * 80 - 80, y: 12 * 80 - 80, w: 80, h: 80 }]),
  },
  112: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 2 * 80 - 80, y: 12 * 80 - 80, w: 80, h: 80 }]),
  },
  113: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 3 * 80 - 80, y: 12 * 80 - 80, w: 80, h: 80 }]),
  },
  114: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 4 * 80 - 80, y: 12 * 80 - 80, w: 80, h: 80 }]),
  },
  115: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 5 * 80 - 80, y: 12 * 80 - 80, w: 80, h: 80 }]),
  },
  116: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 6 * 80 - 80, y: 12 * 80 - 80, w: 80, h: 80 }]),
  },
  117: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 7 * 80 - 80, y: 12 * 80 - 80, w: 80, h: 80 }]),
  },
  118: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 8 * 80 - 80, y: 12 * 80 - 80, w: 80, h: 80 }]),
  },
  119: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 9 * 80 - 80, y: 12 * 80 - 80, w: 80, h: 80 }]),
  },
  120: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 10 * 80 - 80, y: 12 * 80 - 80, w: 80, h: 80 }]),
  },
  121: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 1 * 80 - 80, y: 13 * 80 - 80, w: 80, h: 80 }]),
  },
  122: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 2 * 80 - 80, y: 13 * 80 - 80, w: 80, h: 80 }]),
  },
  123: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 3 * 80 - 80, y: 13 * 80 - 80, w: 80, h: 80 }]),
  },
  124: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 4 * 80 - 80, y: 13 * 80 - 80, w: 80, h: 80 }]),
  },
  125: {
    floor: floorTypes.path,
    sprites: new Sprite([{ x: 5 * 80 - 80, y: 13 * 80 - 80, w: 80, h: 80 }]),
  },
  126: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 6 * 80 - 80, y: 13 * 80 - 80, w: 80, h: 80 }]),
  },
  127: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 7 * 80 - 80, y: 13 * 80 - 80, w: 80, h: 80 }]),
  },
  128: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 8 * 80 - 80, y: 13 * 80 - 80, w: 80, h: 80 }]),
  },
  129: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 9 * 80 - 80, y: 13 * 80 - 80, w: 80, h: 80 }]),
  },
  130: {
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 10 * 80 - 80, y: 13 * 80 - 80, w: 80, h: 80 }]),
  },
};
