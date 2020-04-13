/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
    const len = matrix.length;
    let res = [];
    for (let i=0; i<len; i++) {
        for (let j=0; j<len; j++) {
            if (isValid(i, j)) res.push([i, j]);
        }
    }
    
    function isValid(i, j) {
        let queue = [];
        let pacific = false, atlantic = false;
        let visited = new Set();
        const positions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        queue.push([i,j]);
        visited.add([i, j]);
        while (queue.length > 0) {
            const item = queue.shift();
            const n = item[0], m = item[1];
            if (n === 0 || m === 0) pacific = true;
            if (n === len-1 || m === len-1) atlantic = true;
            if (pacific && atlantic) return true;
            for (let pos of positions) {
                const newN = n+pos[0], newM = m+pos[1];
                if (!visited.has[newN, newM] &&newN >=0 && newM >=0 && newN< len && newM < len && matrix[n][m] >= matrix[newN][newM]) {
                    queue.push([newN, newM]);
                    visited.add([newN, newM]);
                }
            }
        }
        return false;        
    }
};

console.log(pacificAtlantic([[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]]));