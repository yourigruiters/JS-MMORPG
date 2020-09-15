// Represent amount of items in a stack on location
class PlacedItemStack {
	constructor(id, qty) {
		this.type = id;
		this.qty = qty;
		this.x = 0;
		this.y = 0;
	}

	// Place at specified location
	placeAt = (nx, ny) => {
		// Check if stack is already placed, we will remove it
		if (tileMapData.map[getTileIndex(this.x, this.y)].itemStack === this) {
			tileMapData.map[getTileIndex(this.x, this.y)].itemStack = null;
		}

		// Update location
		this.x = nx;
		this.y = ny;

		// Set itemStack on mapdata
		tileMapData.map[getTileIndex(nx, ny)].itemStack = this;
	};
}
