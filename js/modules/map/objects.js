// Collision types of objects
const objectCollision = {
  none: 0,
  solid: 1
};

// Type of objects
const objectTypes = {
  1: {
    name: "Tree",
    sprite: new Sprite([{ x: 0, y: 0, w: 80, h: 80 }]),
    offset: [0, 0],
    collision: objectCollision.solid,
    zIndex: 1
  },
  2: {
    name: "Tree stump",
    sprite: new Sprite([{ x: 80, y: 0, w: 80, h: 80 }]),
    offset: [0, 0],
    collision: objectCollision.none,
    zIndex: 1
  }
};
