// Draw background
drawBackground = () => {
  ctx.fillStyle = "#2c3e50";
  ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1]);
};

// CULLING (Draw visible tiles)
drawCullingMap = () => {
  // After updating the viewport, find the current tile and moving to
  // Current tile
  let playerRoof1 =
    mapTileData.map[toIndex(player.tileFrom[0], player.tileFrom[1])].roof;
  // Moving to tile
  let playerRoof2 =
    mapTileData.map[toIndex(player.tileTo[0], player.tileTo[1])].roof;

  // 0 (blocked) or 1 (moveable)
  for (let y = viewport.startTile[1]; y <= viewport.endTile[1]; y++) {
    for (let x = viewport.startTile[0]; x <= viewport.endTile[0]; x++) {
      let tile = tileTypes[mapTileData.map[toIndex(x, y)].type];
      let sprite = getFrame(
        tile.sprites,
        tile.spriteDuration,
        gameTime,
        tile.animated
      );

      // Draw tileset image on board
      ctx.drawImage(
        tileset,
        sprite.x,
        sprite.y,
        sprite.w,
        sprite.h,
        viewport.offset[0] + x * tileW,
        viewport.offset[1] + y * tileH,
        tileW,
        tileH
      );

      if (
        mapTileData.map[toIndex(x, y)].roofType != 0 &&
        mapTileData.map[toIndex(x, y)].roof != playerRoof1 &&
        mapTileData.map[toIndex(x, y)].roof != playerRoof2
      ) {
        tile = tileTypes[mapTileData.map[toIndex(x, y)].roofType];
        sprite = getFrame(
          tile.sprites,
          tile.spriteDuration,
          gameTime,
          tile.animated
        );

        ctx.drawImage(
          tileset,
          sprite.x,
          sprite.y,
          sprite.w,
          sprite.h,
          viewport.offset[0] + x * tileW,
          viewport.offset[1] + y * tileH,
          tileW,
          tileH
        );
      }
    }
  }
};

// Draw player
drawPlayer = () => {
  let sprite = player.sprites[player.direction];

  ctx.drawImage(
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
  ctx.fillStyle = "#ff0000";
  ctx.fillText("FPS: " + framesLastSecond, 10, 20);
  ctx.fillText(
    "Game speed: " + gameSpeeds[currentGameSpeed].name + " -- (s)",
    10,
    40
  );
};
