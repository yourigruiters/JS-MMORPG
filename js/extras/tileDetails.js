// Floortypes
const floorTypes = {
  solid: 0,
  path: 1,
  water: 2,
  ice: 3,
  conveyorU: 4,
  conveyorD: 5,
  conveyorL: 6,
  conveyorR: 7,
  grass: 8
};

// Tiletypes
const tileTypes = {
  0: {
    color: "#685b48",
    floor: floorTypes.solid,
    sprites: [{ x: 0, y: 0, w: 40, h: 40 }]
  },
  1: {
    color: "#5aa457",
    floor: floorTypes.grass,
    sprites: [{ x: 40, y: 0, w: 40, h: 40 }]
  },
  2: {
    color: "#e8bd7a",
    floor: floorTypes.path,
    sprites: [{ x: 80, y: 0, w: 40, h: 40 }]
  },
  3: {
    color: "#286625",
    floor: floorTypes.solid,
    sprites: [{ x: 120, y: 0, w: 40, h: 40 }]
  },
  4: {
    color: "#678fd9",
    floor: floorTypes.water,
    sprites: [
      { x: 160, y: 0, w: 40, h: 40, d: 200 },
      { x: 200, y: 0, w: 40, h: 40, d: 200 },
      { x: 160, y: 40, w: 40, h: 40, d: 200 },
      { x: 200, y: 40, w: 40, h: 40, d: 200 },
      { x: 160, y: 40, w: 40, h: 40, d: 200 },
      { x: 200, y: 0, w: 40, h: 40, d: 200 }
    ]
  },
  5: {
    color: "#eeeeff",
    floor: floorTypes.ice,
    sprites: [{ x: 120, y: 120, w: 40, h: 40 }]
  },
  6: {
    color: "#cccccc",
    floor: floorTypes.conveyorL,
    sprites: [
      { x: 0, y: 40, w: 40, h: 40, d: 200 },
      { x: 40, y: 40, w: 40, h: 40, d: 200 },
      { x: 80, y: 40, w: 40, h: 40, d: 200 },
      { x: 120, y: 40, w: 40, h: 40, d: 200 }
    ]
  },
  7: {
    color: "#cccccc",
    floor: floorTypes.conveyorR,
    sprites: [
      { x: 120, y: 80, w: 40, h: 40, d: 200 },
      { x: 80, y: 80, w: 40, h: 40, d: 200 },
      { x: 40, y: 80, w: 40, h: 40, d: 200 },
      { x: 0, y: 80, w: 40, h: 40, d: 200 }
    ]
  },
  8: {
    color: "#cccccc",
    floor: floorTypes.conveyorD,
    sprites: [
      { x: 160, y: 200, w: 40, h: 40, d: 200 },
      { x: 160, y: 160, w: 40, h: 40, d: 200 },
      { x: 160, y: 120, w: 40, h: 40, d: 200 },
      { x: 160, y: 80, w: 40, h: 40, d: 200 }
    ]
  },
  9: {
    color: "#cccccc",
    floor: floorTypes.conveyorU,
    sprites: [
      { x: 200, y: 80, w: 40, h: 40, d: 200 },
      { x: 200, y: 120, w: 40, h: 40, d: 200 },
      { x: 200, y: 160, w: 40, h: 40, d: 200 },
      { x: 200, y: 200, w: 40, h: 40, d: 200 }
    ]
  }
};
