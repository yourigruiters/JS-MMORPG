const handleKeyDown = (e) => {
	/*** Global keys ***/
	if (e.keyCode == 27) {
		console.log("JAZEKER");
		// Esc - Open overlay
		if (gameOverlay) {
			gameOverlayElement.style.display = "flex";
		} else {
			gameOverlayElement.style.display = "none";
		}

		gameOverlay = !gameOverlay;
	}

	/*** Ingame keys***/
	if (e.keyCode == 84) {
		// T - Take
		keysDown[e.keyCode] = true;
	}
};

const handleKeyUp = (e) => {
	/*** Ingame keys***/
	if (e.keyCode == 84) {
		// T - Take
		keysDown[e.keyCode] = false;
	}
};
