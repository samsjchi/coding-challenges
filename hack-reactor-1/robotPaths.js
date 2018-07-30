/*
Name: Robot Paths

Link: https://challenge.makerpass.com/c/1d977d907997a1beaa5877c9d75d4722

Description:
A robot located at the top left corner of an n x n grid is trying to reach the bottom right corner. The robot can move either up, down, left, or right, but cannot visit the same spot twice. How many possible unique paths are there to the bottom right corner?

Make your solution work for a grid of any size.

Parameters:
n (required) - amount of rows/columns (max 6)

Helper Function:
function makeBoard(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  return board;
}

Examples:
  Input     |   Output
-------------------------
  n: 1      |   1
-------------------------
  n: 2      |   2
-------------------------
  n: 3      |   12
*/

function robotPaths(n) {
  var pathsCount = 0;
  var board = makeBoard(n);

  var findPaths = function(i, j) {
    // Base case: if a path has been found, increment pathsCount and return
    if (i === n - 1 && j === n - 1) {
      pathsCount++;
      return;
    }
    // If robot reaches edge of grid or current spot has already been
    // visited, return
    if (i < 0 || i >= n || j < 0 || j >= n || board.hasBeenVisited(i, j)) {
      return;
    } else {
      // Toggle piece on current spot
      board.togglePiece(i, j);
      // Move right
      findPaths(i, j + 1);
      // Move down
      findPaths(i + 1, j);
      // Move left
      findPaths(i, j - 1);
      // Move up
      findPaths(i - 1, j);
      // Toggle piece back
      board.togglePiece(i, j);
    }
  };

  findPaths(0, 0); // Initiate recursive function starting at top left corner
  return pathsCount;
}
