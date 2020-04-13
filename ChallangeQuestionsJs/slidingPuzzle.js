/** 
* @param {number[][]} board
* @return {number}
*/

var slidingPuzzle = function(board) {
  // find the index of 0
  let start;
  let N = board.length;
  let M = board[0].length;
  for (let i=0; i<N; i++) {
    for (let j=0; j<M; j++) {
      if (board[i][j] === 0) start = [i, j];
    }
  }

  let moves = 0;
  let queue = [];
  let visited = new Set();
  let nextOptions = [[0, -1], [-1, 0], [1, 0], [0, 1]];

  let index = 0;
  queue.push([board, start, moves, generateString(board), -1]);
  visited.add(generateString(board));
  while (index < queue.length) {
    const item = queue[index];
    let curr = item[0], pos = item[1], currSteps = item[2], currIndex = item[3];
    if (isTarget(curr)) {
      let path = findPath(curr, currIndex);
      path.push(path.length-1);
      return currSteps, path;
    };
    for (let nextOption of nextOptions) {
      let nextMove = [pos[0]+nextOption[0], pos[1]+nextOption[1]];
      if (nextMove[0] >= 0 && nextMove[0] < N) {
        if (nextMove[1] >= 0 && nextMove[1] < M) {
          let nextBoard = buildNextBoard(curr, pos, nextMove);
          let nextBoardString = generateString(nextBoard);
          if (visited.has(nextBoardString)) continue;
          else {
            queue.push([nextBoard, nextMove, currSteps+1, index]);
            visited.add(nextBoardString);
          }
        }
      }
    }
    index++;
  }

  return -1;

  function findPath(curr, currI) {
    let path = [];
    path.push(curr);
    let index = currI;
    while (queue[index] !== undefined) {
      path.push(queue[index][0]);
      index = queue[index][3];
    }
    return path.reverse();
  }

  function generateString(board) {
    let boardString = '';
    for (let i=0; i<N; i++) {
      for (let j=0; j<M; j++) {
        boardString += board[i][j].toString();
      }
    }
//    console.log(boardString);
    return boardString;
  }

  function buildNextBoard(curr, pos, nextMove) {
    let nextBoard = new Array(N);
    for (let i=0; i<N; i++) {
      nextBoard[i] = new Array(M);
    }
    for (let i=0; i<N; i++) {
      for (let j=0; j<M; j++) {
        if (i === pos[0] && j === pos[1]) nextBoard[i][j] = curr[nextMove[0]][nextMove[1]];
        else if (i === nextMove[0] && j === nextMove[1]) nextBoard[i][j] = 0;
        else {
          nextBoard[i][j] = curr[i][j];
        }
      }
    }
    return nextBoard;
  };

  function isTarget(curr) {
    let index = 0;
    for (let i=0; i<N; i++) {
      for (let j=0; j<M; j++) {
        if (curr[i][j] !== index) return false;
        index ++;
      }
    }
    return true;
  };

};

console.log(slidingPuzzle([[2, 3, 5], [0, 1, 4]]));
console.log(slidingPuzzle([[0, 1, 2], [3, 4, 5], [6, 7, 8]]));
console.log(slidingPuzzle([[0, 1, 3], [5, 2, 4]]));
console.log(slidingPuzzle([[1, 2, 3, 7], [4, 5, 0, 6], [8, 9, 10, 11]]));
