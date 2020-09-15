// Draw background for canvas size
drawBackground = () => {
	ctx.fillStyle = canvasBackgroundColor;
	ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1]);
};

// Draw map (Culling mode - Draw tiles visible to player only)
drawCullingMap = () => {
	// Check if current tile is a roof tile
	let playerRoof1 =
		tileMapData.map[getTileIndex(player.tileFrom[0], player.tileFrom[1])].roof;
	// Check if moving to tile is a roof tile
	let playerRoof2 =
		tileMapData.map[getTileIndex(player.tileTo[0], player.tileTo[1])].roof;

	// Draw complete map
	// Tilemap layers
	// 0: Floor
	// 1: ItemStack
	// 2: Player
	// 3: Roof
	// 4:
	// x: Objects have own zIndex
	// Z - Layers, Y - Height, X - Width
	for (let z = 0; z < tileMapData.levels; z++) {
		for (let y = viewport.startTile[1]; y <= viewport.endTile[1]; y++) {
			for (let x = viewport.startTile[0]; x <= viewport.endTile[0]; x++) {
				if (z === 0) {
					// Draw floor by calling draw method of Sprite
					tileTypes[tileMapData.map[getTileIndex(x, y)].type].sprites.draw(
						gameTime,
						viewport.offset[0] + x * tileW,
						viewport.offset[1] + y * tileH,
						floorset
					);
				} else if (z == 1) {
					// Draw itemStack on corresponding tile
					const items = tileMapData.map[getTileIndex(x, y)].itemStack;
					if (items != null) {
						itemTypes[items.type].sprite.draw(
							gameTime,
							viewport.offset[0] + x * tileW + itemTypes[items.type].offset[0],
							viewport.offset[1] + y * tileH + itemTypes[items.type].offset[1],
							itemset
						);
					}
				}

				// Draw objects
				// Check if object exist and is equal to current layer
				let object = tileMapData.map[getTileIndex(x, y)].object;

				if (object != null && objectTypes[object.type].zIndex === z) {
					let objectType = objectTypes[object.type];

					// Draw objects on corresponding tile
					objectType.sprite.draw(
						gameTime,
						viewport.offset[0] + x * tileW + objectType.offset[0],
						viewport.offset[1] + y * tileH + objectType.offset[1],
						objectset
					);
				}

				// Draw roofs
				if (
					z === 3 &&
					tileMapData.map[getTileIndex(x, y)].roofType != 0 &&
					tileMapData.map[getTileIndex(x, y)].roof != playerRoof1 &&
					tileMapData.map[getTileIndex(x, y)].roof != playerRoof2
				) {
					tileTypes[tileMapData.map[getTileIndex(x, y)].roofType].sprites.draw(
						gameTime,
						viewport.offset[0] + x * tileW,
						viewport.offset[1] + y * tileH,
						floorset
					);
				}
			}

			if (z === 2) {
				// Draw player
				player.sprites[player.direction].draw(
					gameTime,
					viewport.offset[0] + player.position[0],
					viewport.offset[1] + player.position[1],
					characterset
				);
			}
		}
	}
};

// Draw inventory
drawInventory = () => {
	ctx.textAlign = "right";

	// Check every inventory space
	for (let i = 0; i < player.inventory.spaces; i++) {
		ctx.fillStyle = "#ddccaa";
		// Draw inventory block
		ctx.fillRect(10 + i * 90, canvas.height - 90, 80, 80);

		// If item is in stack
		if (typeof player.inventory.stacks[i] !== "undefined") {
			let itemType = itemTypes[player.inventory.stacks[i].type];

			itemType.sprite.draw(
				gameTime,
				10 + i * 90 + itemType.offset[0],
				canvas.height - 90 + itemType.offset[1],
				itemset
			);

			// Draw quantity of item if quantity is more than one
			if (player.inventory.stacks[i].qty > 1) {
				ctx.fillStyle = "#000000";
				ctx.fillText(
					"" + player.inventory.stacks[i].qty,
					10 + i * 90 + 78,
					canvas.height - 90 + 78
				);
			}
		}
	}
};

// Draw Cursor edge
drawCursor = (x, y) => {
	const posX = x - (x % 80);
	const posY = y - (y % 80);

	// console.log(posY, viewport.offset[1]);
	// console.log("XXXXXX", posX, viewport.offset[0]);

	ctx.beginPath();
	ctx.lineWidth = "2.5";
	ctx.strokeStyle = mouseColor;
	ctx.rect(posX + viewport.offset[0], posY + viewport.offset[1], 80, 80);
	ctx.stroke();
};

// Draw FPS counter
drawFPSCounter = () => {
	ctx.font = "normal 25px sans-serif";
	ctx.textAlign = "left";
	ctx.fillStyle = "#ff0000";
	ctx.fillText("FPS: " + framesLastSecond, 10, 35);
};
