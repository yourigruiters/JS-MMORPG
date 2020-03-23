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
      game.fillStyle = tileTypes[tileMap[toIndex(x, y)]].color;

      game.fillRect(
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
  // Color - posX - posY - Width - Height
  game.fillStyle = "#0000ff";
  game.fillRect(
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
