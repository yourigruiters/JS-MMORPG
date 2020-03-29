class Inventory {
  constructor(spaces) {
    this.spaces = spaces;
    this.stacks = [];
  }

  // Add item to inventory
  // ID: itemTypes of entry and QTY: number of items we want to add
  addItems = (id, qty) => {
    // Check if space in inventory
    for (let i = 0; i < this.spaces; i++) {
      if (this.stacks.length <= i) {
        // Calculate maximum item stack
        let maxHere =
          qty > itemTypes[id].maxStack ? itemTypes[id].maxStack : qty;
        this.stacks.push(new Stack(id, maxHere));

        qty -= maxHere;
      } else if (
        this.stacks[i].type === id &&
        this.stacks[i].qty < itemTypes[id].maxStack
      ) {
        // Calculate maximum item stack
        let maxHere = itemTypes[id].maxStack - this.stacks[i].qty;
        if (maxHere > qty) {
          maxHere = qty;
        }

        this.stacks[i].qty += maxHere;
        qty -= maxHere;
      }

      // Check if quantity is 0 (Full)
      if (qty === 0) {
        return 0;
      }
    }

    // Return remaining quantity that couldn't fit inventory
    return qty;
  };
}
