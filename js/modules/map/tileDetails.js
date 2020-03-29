// Collision types of objects
const objectCollision = {
  none: 0,
  solid: 1
};

// Type of objects
const objectTypes = {
  1: {
    name: "Box",
    sprite: new Sprite([{ x: 80, y: 320, w: 80, h: 80 }]),
    offset: [0, 0],
    collision: objectCollision.solid,
    zIndex: 1
  },
  2: {
    name: "Broken Box",
    sprite: new Sprite([{ x: 80, y: 400, w: 80, h: 80 }]),
    offset: [0, 0],
    collision: objectCollision.none,
    zIndex: 1
  },
  3: {
    name: "Box",
    sprite: new Sprite([{ x: 160, y: 320, w: 160, h: 160 }]),
    offset: [-40, -40],
    collision: objectCollision.solid,
    zIndex: 3
  }
};

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
  grass: 8
};

// Type of tiles
const tileTypes = {
  0: {
    color: "#685b48",
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 0, y: 0, w: 80, h: 80 }])
  },
  1: {
    color: "#5aa457",
    floor: floorTypes.grass,
    sprites: new Sprite([{ x: 80, y: 0, w: 80, h: 80 }])
  },
  2: {
    color: "#e8bd7a",
    floor: floorTypes.path,
    sprites: new Sprite([{ x: 160, y: 0, w: 80, h: 80 }])
  },
  3: {
    color: "#286625",
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 240, y: 0, w: 80, h: 80 }])
  },
  4: {
    color: "#678fd9",
    floor: floorTypes.water,
    sprites: new Sprite([
      { x: 320, y: 0, w: 80, h: 80, d: 200 },
      { x: 400, y: 0, w: 80, h: 80, d: 200 },
      { x: 320, y: 80, w: 80, h: 80, d: 200 },
      { x: 400, y: 80, w: 80, h: 80, d: 200 },
      { x: 320, y: 80, w: 80, h: 80, d: 200 },
      { x: 400, y: 0, w: 80, h: 80, d: 200 }
    ])
  },
  5: {
    color: "#eeeeff",
    floor: floorTypes.ice,
    sprites: new Sprite([{ x: 240, y: 240, w: 80, h: 80 }])
  },
  6: {
    color: "#cccccc",
    floor: floorTypes.conveyorL,
    sprites: new Sprite([
      { x: 0, y: 80, w: 80, h: 80, d: 200 },
      { x: 80, y: 80, w: 80, h: 80, d: 200 },
      { x: 160, y: 80, w: 80, h: 80, d: 200 },
      { x: 240, y: 80, w: 80, h: 80, d: 200 }
    ])
  },
  7: {
    color: "#cccccc",
    floor: floorTypes.conveyorR,
    sprites: new Sprite([
      { x: 240, y: 160, w: 80, h: 80, d: 200 },
      { x: 160, y: 160, w: 80, h: 80, d: 200 },
      { x: 80, y: 160, w: 80, h: 80, d: 200 },
      { x: 0, y: 160, w: 80, h: 80, d: 200 }
    ])
  },
  8: {
    color: "#cccccc",
    floor: floorTypes.conveyorD,
    sprites: new Sprite([
      { x: 320, y: 400, w: 80, h: 80, d: 200 },
      { x: 320, y: 320, w: 80, h: 80, d: 200 },
      { x: 320, y: 240, w: 80, h: 80, d: 200 },
      { x: 320, y: 160, w: 80, h: 80, d: 200 }
    ])
  },
  9: {
    color: "#cccccc",
    floor: floorTypes.conveyorU,
    sprites: new Sprite([
      { x: 400, y: 160, w: 80, h: 80, d: 200 },
      { x: 400, y: 240, w: 80, h: 80, d: 200 },
      { x: 400, y: 320, w: 80, h: 80, d: 200 },
      { x: 400, y: 400, w: 80, h: 80, d: 200 }
    ])
  },
  10: {
    color: "#ccaa00",
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 80, y: 240, w: 80, h: 80 }])
  },
  11: {
    color: "#ccaa00",
    floor: floorTypes.solid,
    sprites: new Sprite([{ x: 160, y: 240, w: 80, h: 80 }])
  }
};
