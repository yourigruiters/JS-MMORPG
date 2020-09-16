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

const handleMouseUp = (e) => {
	if (inGameRightClickOptionsOpen) {
		closeInGameRightClickOptionsMenu();
	}

	if (e.which === 1) {
		callPathFinder(e);
	} else if (e.which === 3) {
		e.preventDefault();

		const tileInfo = getTileInfo(e);
		openInGameRightClickOptionsMenu(e, tileInfo);
	}
};

const openInGameRightClickOptionsMenu = (e, tileInfo) => {
	const mouseLocationX = e.pageX;
	const mouseLocationY = e.pageY;

	inGameRightClickOptionsElement.innerHTML = "";

	// Walk here
	const walkHereDiv = document.createElement("div");
	walkHereDiv.innerHTML = "Walk here";
	walkHereDiv.addEventListener(
		"click",
		(e) => {
			callPathFinder(undefined, tileInfo.x, tileInfo.y);
		},
		false
	);

	// Cancel
	const cancelDiv = document.createElement("div");
	cancelDiv.innerHTML = "Cancel";
	cancelDiv.addEventListener("click", closeInGameRightClickOptionsMenu, false);

	inGameRightClickOptionsElement.appendChild(walkHereDiv);
	inGameRightClickOptionsElement.appendChild(cancelDiv);

	inGameRightClickOptionsElement.style.top = mouseLocationY + "px";
	inGameRightClickOptionsElement.style.left = mouseLocationX + "px";
	inGameRightClickOptionsElement.style.display = "block";

	inGameRightClickOptionsOpen = true;
};

const closeInGameRightClickOptionsMenu = () => {
	inGameRightClickOptionsOpen = false;
	inGameRightClickOptionsElement.style.display = "none";
};
