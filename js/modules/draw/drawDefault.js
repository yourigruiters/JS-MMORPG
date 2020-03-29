// Draw background for canvas size
drawBackground = () => {
  ctx.fillStyle = "#2c3e50";
  ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1]);
};

// Draw map (Culling mode - Draw tiles visible to player only)
drawCullingMap = () => {
  // Check if current tile is a roof tile
  let playerRoof1 =
    tileMapData.map[toIndex(player.tileFrom[0], player.tileFrom[1])].roof;
  // Check if moving to tile is a roof tile
  let playerRoof2 =
    tileMapData.map[toIndex(player.tileTo[0], player.tileTo[1])].roof;

  // Draw complete map
  // Z - Layers, Y - Height, X - Width
  for (let z = 0; z < tileMapData.levels; z++) {
    for (let y = viewport.startTile[1]; y <= viewport.endTile[1]; y++) {
      for (let x = viewport.startTile[0]; x <= viewport.endTile[0]; x++) {
        // Draw floor
        if (z === 0) {
          // Check tile type
          let tile = tileTypes[tileMapData.map[toIndex(x, y)].type];
          let sprite = getFrame(
            tile.sprites,
            tile.spriteDuration,
            gameTime,
            tile.animated
          );

          // Draw tile on floor
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

        // Draw objects
        // Check if object exist and is equal to current layer
        let object = tileMapData.map[toIndex(x, y)].object;

        if (object != null && objectTypes[object.type].zIndex === z) {
          let objectType = objectTypes[object.type];

          ctx.drawImage(
            tileset,
            objectType.sprite[0].x,
            objectType.sprite[0].y,
            objectType.sprite[0].w,
            objectType.sprite[0].h,
            viewport.offset[0] + x * tileW + objectType.offset[0],
            viewport.offset[1] + y * tileH + objectType.offset[1],
            objectType.sprite[0].w * tileMultiplier,
            objectType.sprite[0].h * tileMultiplier
          );
        }

        // Draw roofs
        if (
          z === 2 &&
          tileMapData.map[toIndex(x, y)].roofType != 0 &&
          tileMapData.map[toIndex(x, y)].roof != playerRoof1 &&
          tileMapData.map[toIndex(x, y)].roof != playerRoof2
        ) {
          tile = tileTypes[tileMapData.map[toIndex(x, y)].roofType];
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

      if (z === 1) {
        // Draw player
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
      }
    }
  }
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
