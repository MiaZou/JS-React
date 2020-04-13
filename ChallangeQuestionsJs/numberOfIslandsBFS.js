/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid.length <= 0) return grid;
    let count = 0;
    let N = grid.length;
    let M = grid[0].length;
    for (let i=0; i<N; i++) {
        for (let j=0; j<M; j++) {
            if (grid[i][j] === '1') {
                count++;
                checkAdjacent(i, j);
                grid[i][j] = '0';
            }
        }
    }
    
    function checkAdjacent(i, j) {
        const position = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        let queue = [];
        queue.push([i, j]);
        while (queue.length > 0) {
            const item = queue.shift();
            const n = item[0], m = item[1];
            for (let pos of position) {
                let y = n+pos[0], x = m+pos[1];
                if (y >= 0 && y < N && x >=0 && x < M) {
                    if (grid[y][x] === '1') {
                        queue.push([y, x]);
                        grid[y][x] = '0';
                    };
                }
            
            }
        }
        return;
    }   
    return count;
};