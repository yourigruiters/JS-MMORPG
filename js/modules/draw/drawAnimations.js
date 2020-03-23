// Animation of tiles/frames
getFrame = (sprites, duration, time, animated) => {
  // If sprite is not animated then stop
  // This information comes from window.onload @ sprite handling
  if (!animated) {
    return sprites[0];
  }

  time = time % duration;

  // Show every sprite
  for (sprite in sprites) {
    if (sprites[sprite].end >= time) {
      return sprites[sprite];
    }
  }
};
