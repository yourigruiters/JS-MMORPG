let pathStart;
let pathEnd;
let currentPath = [];
let currentPlace;

callPathFinder = (e) => {
	const relX = Math.floor((e.pageX - viewport.offset[0]) / 80);
	const relY = Math.floor((e.pageY - viewport.offset[1]) / 80);

	// Log tile information to console
	console.log(tileMapData.map[getTileIndex(relX, relY)]);

	// Current location, location of clicked tile, Path to walk there
	pathStart = player.tileFrom;
	pathEnd = [relX, relY];

	currentPath = findWalkablePath(pathStart, pathEnd);
	player.path = provideWalkablePathToPlayer();
};

// world (eg world[10][15] = 0)
// pathStart and pathEnd are arrays like [5,10]
findWalkablePath = (pathStart, pathEnd) => {
	// the world data are integers:
	// anything higher than this number (currently 0) is considered blocked
	let maxWalkableTileNum = 0;

	// keep track of the world dimensions
	// WORLD MAP MUST BE A SQUARE FOR A-STAR TO WORK
	let worldSize = mapW * mapH;

	let findNeighbours = function () {}; // empty

	// which heuristic should we use?
	// default: no diagonals (Manhattan)
	function calculateDistance(Point, Goal) {
		// linear movement - no diagonals - just cardinal directions (UpDLR)
		return Math.abs(Point.x - Goal.x) + Math.abs(Point.y - Goal.y);
	}

	// Neighbours functions, used by findNeighbours function
	// to locate adjacent available cells that aren't blocked
	// Returns every available North, South, East or West
	// cell that is empty
	function Neighbours(x, y) {
		let N = y - 1;
		let S = y + 1;
		let E = x + 1;
		let W = x - 1;
		let myN = N > -1 && canWalkHere(x, N);
		let myS = S < mapH && canWalkHere(x, S);
		let myE = E < mapW && canWalkHere(E, y);
		let myW = W > -1 && canWalkHere(W, y);
		result = [];
		if (myN) {
			result.push({ x: x, y: N });
		}
		if (myE) {
			result.push({ x: E, y: y });
		}
		if (myS) {
			result.push({ x: x, y: S });
		}
		if (myW) {
			result.push({ x: W, y: y });
		}
		findNeighbours(myN, myS, myE, myW, N, S, E, W, result);
		return result;
	}

	// returns true if cell is available and open
	function canWalkHere(x, y) {
		return (
			tileTypes[tileMapData.map[getTileIndex(x, y)].type].floor != null &&
			tileTypes[tileMapData.map[getTileIndex(x, y)].type].floor !=
				maxWalkableTileNum
		);
	}

	// Node function, returns a new object with Node properties
	// Used in the calculatePath function to store route costs, etc.
	function Node(Parent, Point) {
		let newNode = {
			// pointer to another Node object
			Parent: Parent,
			// array index of this Node in the world linear array
			value: Point.x + Point.y * mapW,
			// the location coordinates of this Node
			x: Point.x,
			y: Point.y,
			// the heuristic estimated cost
			// of an entire path using this node
			f: 0,
			// the distanceFunction cost to get
			// from the starting point to this node
			g: 0,
		};

		return newNode;
	}

	// Path function, executes AStar algorithm operations
	function calculatePath() {
		// create Nodes from the Start and End x,y coordinates
		let mypathStart = Node(null, { x: pathStart[0], y: pathStart[1] });
		let mypathEnd = Node(null, { x: pathEnd[0], y: pathEnd[1] });
		// create an array that will contain all world cells
		let AStar = new Array(worldSize);
		// list of currently open Nodes
		let Open = [mypathStart];
		// list of closed Nodes
		let Closed = [];
		// list of the final output array
		let result = [];
		// reference to a Node (that is nearby)
		let myNeighbours;
		// reference to a Node (that we are considering now)
		let myNode;
		// reference to a Node (that starts a path in question)
		let myPath;
		// temp integer variables used in the calculations
		let length, max, min, i, j;
		// iterate through the open list until none are left
		while ((length = Open.length)) {
			max = worldSize;
			min = -1;
			for (i = 0; i < length; i++) {
				if (Open[i].f < max) {
					max = Open[i].f;
					min = i;
				}
			}
			// grab the next node and remove it from Open array
			myNode = Open.splice(min, 1)[0];
			// is it the destination node?
			if (myNode.value === mypathEnd.value) {
				myPath = Closed[Closed.push(myNode) - 1];
				do {
					result.push([myPath.x, myPath.y]);
				} while ((myPath = myPath.Parent));
				// clear the working arrays
				AStar = Closed = Open = [];
				// we want to return start to finish
				result.reverse();
			} // not the destination
			else {
				// find which nearby nodes are walkable
				myNeighbours = Neighbours(myNode.x, myNode.y);
				// test each one that hasn't been tried already
				for (i = 0, j = myNeighbours.length; i < j; i++) {
					myPath = Node(myNode, myNeighbours[i]);
					if (!AStar[myPath.value]) {
						// estimated cost of this particular route so far
						myPath.g = myNode.g + calculateDistance(myNeighbours[i], myNode);
						// estimated cost of entire guessed route to the destination
						myPath.f = myPath.g + calculateDistance(myNeighbours[i], mypathEnd);
						// remember this new path for testing above
						Open.push(myPath);
						// mark this node in the world graph as visited
						AStar[myPath.value] = true;
					}
				}
				// remember this route as having no more untested options
				Closed.push(myNode);
			}
		} // keep iterating until the Open list is empty
		return result;
	}

	// actually calculate the a-star path!
	// this returns an array of coordinates
	// that is empty if no path is possible
	return calculatePath();
}; // end of findPath() function

provideWalkablePathToPlayer = () => {
	let path = [];
	let currentPlace = pathStart;
	for (rp = 0; rp < currentPath.length; rp++) {
		if (currentPlace[0] !== currentPath[rp][0]) {
			if (currentPlace[0] > currentPath[rp][0]) {
				path.push("left");
			} else {
				path.push("right");
			}
		} else if (currentPlace[1] !== currentPath[rp][1]) {
			if (currentPlace[1] > currentPath[rp][1]) {
				path.push("up");
			} else {
				path.push("down");
			}
		}
		// Overschrijven van currentPlace
		currentPlace = currentPath[rp];
	}
	return path;
};
