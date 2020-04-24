// Collision types of objects
const objectCollision = {
  none: 0, // For objects bigger than 80*80 place
  solid: 1,
};

// Type of objects
const objectTypes = {
  1: {
    name: "Tree",
    sprite: new Sprite([{ x: 0, y: 0, w: 80, h: 80 }]),
    offset: [0, 0],
    collision: objectCollision.solid,
    zIndex: 3,
  },
  2: {
    name: "Tree stump",
    sprite: new Sprite([{ x: 80, y: 0, w: 80, h: 80 }]),
    offset: [0, 0],
    collision: objectCollision.solid,
    zIndex: 3,
  },
  3: {
    name: "House",
    sprite: new Sprite([{ x: 0, y: 320, w: 240, h: 80 }]),
    offset: [0, 0],
    collision: objectCollision.none,
    zIndex: 3,
  },
  4: {
    name: "Bank",
    sprite: new Sprite([{ x: 240, y: 240, w: 320, h: 80 }]),
    offset: [0, 0],
    collision: objectCollision.none,
    zIndex: 3,
  },
};
