const handleMouseMove = (e) => {
	const tileInfo = getTileInfo(e);

	if (tileInfo.itemStack) {
		mouseColor = "yellow";
	} else if (tileInfo.eventEnter) {
		mouseColor = "green";
	} else if (tileInfo.object) {
		mouseColor = "orange";
	} else {
		mouseColor = "red";
	}
};

const handleMouseDown = (e) => {
	if (e.which === 1) {
		callPathFinder(e);
	} else if (e.which === 3) {
		e.preventDefault();

		const tileInfo = getTileInfo(e);
		// Check TileInfo and show correct data in right click overlay menu
	}
};
