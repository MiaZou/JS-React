/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid.length <= 0) return grid;
    let count = 0;
    const N = grid.length;
    const M = grid[0].length;
    for (let i=0; i<N; i++) {
        for (let j=0; j<M; j++) {
            if (grid[i][j] === 1) {
                count++;
                findNear(i, j);
            };
        }
    }
    
    function findNear(i, j) {
        if (i < 0 || i >= N || j < 0 || j >= M) return;
        if (grid[i][j] === 1) {
            grid[i][j] = 0;
            findNear(i+1, j);
            findNear(i-1, j);
            findNear(i, j+1);
            findNear(i, j-1);
        }
    }
    return count;
};

console.log(numIslands([
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
  ]));
console.log(numIslands([
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
  ]));