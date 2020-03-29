// Draw animations
getFrame = (sprites, duration, time, animated) => {
  // Check if provided is animated
  if (!animated) {
    return sprites[0];
  }

  // GameTime % duration
  time = time % duration;

  // Cycle through sprites
  for (sprite in sprites) {
    if (sprites[sprite].end >= time) {
      return sprites[sprite];
    }
  }
};
