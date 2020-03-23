// Draw background
drawBackground = () => {
  game.fillStyle = "#2c3e50";
  game.fillRect(0, 0, viewport.screen[0], viewport.screen[1]);
};

// CULLING (Draw visible tiles)
drawCullingMap = () => {
  // 0 (blocked) or 1 (moveable)
  for (let y = viewport.startTile[1]; y <= viewport.endTile[1]; y++) {
    for (let x = viewport.startTile[0]; x <= viewport.endTile[0]; x++) {
      let tile = tileTypes[tileMap[toIndex(x, y)]];

      // Draw tileset image on board
      game.drawImage(
        tileset,
        tile.sprite[0].x,
        tile.sprite[0].y,
        tile.sprite[0].w,
        tile.sprite[0].h,
        viewport.offset[0] + x * tileW,
        viewport.offset[1] + y * tileH,
        tileW,
        tileH
      );
    }
  }
};

// Draw player
drawPlayer = () => {
  let sprite = player.sprites[player.direction];

  game.drawImage(
    tileset,
    sprite[0].x,
    sprite[0].y,
    sprite[0].w,
    sprite[0].h,
    viewport.offset[0] + player.position[0],
    viewport.offset[1] + player.position[1],
    player.dimensions[0],
    player.dimensions[1]
  );
};

// Draw FPS counter
drawFPSCounter = () => {
  game.fillStyle = "#ff0000";
  game.fillText("FPS: " + framesLastSecond, 10, 20);
};
