/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {
    const len = cells.length;
    let newCells = new Array(len);
    newCells[0] = 0, newCells[len-1] = 0;
    let visited = new Set();
    for (let i=0; i<N; i++) {
        for (let j=1; j<len-1; j++) {
            if (cells[j-1] === cells[j+1]) newCells[j] = 1;
            else newCells[j] = 0;
        }
        const covStr = [...newCells].join('');
        if (visited.has(covStr)) {
            N = N % visited.size;
            if (N === 0) N = visited.size;
            i = 0;
            visited.clear();
        }
        visited.add(covStr);
        cells = [...newCells];
    }
    return newCells;
};

// console.log(prisonAfterNDays([0,0,0,1,1,0,1,0], 574));
console.log(prisonAfterNDays([1,0,0,1,0,0,1,0], 1000000000));