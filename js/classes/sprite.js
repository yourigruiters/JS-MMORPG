// sprite.x + tileTakeExtra,
// sprite.y + tileTakeExtra,
// sprite.w - tileRemoveExtra,
// sprite.h - tileRemoveExtra,

class Sprite {
  constructor(data) {
    this.animated = data.length > 1; // Is animated sprite?
    this.frameCount = data.length;
    this.duration = 0; // Total duration counter
    this.loop = true; // Keep looping?

    // If sprite is animated
    if (data.length > 1) {
      // Loop through sprites
      for (let sprite in data) {
        // If duration is undefined, default to 100
        if (typeof data[sprite].d == "undefined") {
          data[sprite].d = 100;
        }
        // Set sprite duration (Becomes total)
        this.duration += data[sprite].d;

        // Set true or false to loop variable
        if (typeof data[sprite].loop != "undefined") {
          this.loop = data[sprite].loop ? true : false;
        }
      }
    }

    // Set frames to modified data array
    this.frames = data;
  }

  // Draw method
  // T = ElapsedGameTime
  draw = (t, x, y) => {
    let frameIdx = 0;

    // Check if time value is greater than duration of animation
    if (!this.loop && this.animated && t >= this.duration) {
      frameIdx = this.frames.length - 1;
    } else if (this.animated) {
      t = t % this.duration;
      let totalD = 0;

      // Check which frame should be drawn at current time
      for (let i in this.frames) {
        totalD += this.frames[i].d;
        frameIdx = i;

        if (t <= totalD) {
          break;
        }
      }
    }

    // Check if there is an offset for the frame, else assume 0,0
    const offset =
      typeof this.frames[frameIdx].offset == "undefined"
        ? [0, 0]
        : this.frames[frameIdx].offset;

    // Draw sprite
    ctx.drawImage(
      tileset,
      this.frames[frameIdx].x + tileTakeExtra,
      this.frames[frameIdx].y + tileTakeExtra,
      this.frames[frameIdx].w - tileRemoveExtra,
      this.frames[frameIdx].h - tileRemoveExtra,
      x + offset[0],
      y + offset[1],
      this.frames[frameIdx].w,
      this.frames[frameIdx].h
    );
  };
}
