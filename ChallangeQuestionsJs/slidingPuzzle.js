var slidingPuzzle = function(board) {
    // BFS
    let currentBoard = '';
    for (let i=0; i<2; i++){
        for (let j=0; j<3; j++) {
            currentBoard += board[i][j].toString();
        }
    };
    nextmoves = new Map([[0, [1, 3]], [1, [0, 2, 4]], [2, [1, 5]], [3, [0, 4]], [4, [1, 3, 5]], [5, [2, 4]]]);
    let queue = [];
    let visited = new Set();
    let start = currentBoard.indexOf('0');
    let moves = 0;
    queue.push([currentBoard, start, moves]);
    while (queue.length > 0) {
        let item = queue.shift();
        let curr = item[0];
        let state = item[1];
        let moves = item[2];
        if (curr === '123450') return moves;
        let nextMoves = nextmoves.get(state);
        for (let nextMove of nextMoves) {
            let now = curr.split('');
            let temp = now[nextMove];
            now[nextMove] = now[state];
            now[state] = temp;
            now = now.join('');
            if (visited.has(now)) {
                continue;
            } else {
                const zeroIndex = now.indexOf('0');
                queue.push([now, zeroIndex, moves+1]);
                visited.add(now);
            }
            
        } 
    };
    return -1;
};

console.log(slidingPuzzle([[1,2,3], [5,4,0]]));