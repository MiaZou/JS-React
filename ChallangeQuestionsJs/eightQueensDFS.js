/*
function eightQueens() {
  let res = [];
  let count = 0;

  dfs([]);

  function dfs(curr){
    if (curr.length === 8) {
      res.push(curr);
      count ++;
      return;
    };
    for (let i=0; i<8; i++) {
      if (isValid(curr, i)) {
        let newCurr = buildNextRow(curr, i);
        dfs(newCurr);
      }
    }

    function buildNextRow(curr, i) {
      let newCurr = new Array(curr.length+1);
      for (let i=0; i<curr.length; i++) {
        newCurr[i] = curr[i];
      }
      newCurr[curr.length] = i;
      return newCurr;
    }

    function isValid(curr, index) {
      let row = curr.length;
      let col = index;
      let left = row - col;
      let right = row + col;
      for (let i=0; i<row; i++) {
        if (curr[i] === col) return false;
        if (i - curr[i] === left) return false;
        if (i + curr[i] === right) return false;
      }
      return true;
    }
  }
  return count;
}
*/

function eightQueens() {
  let count = 0;
  let arr = new Array();
  dfs(0);
  function dfs(r) {
    if (r === 8) {
      count++;
      return;
    }
    for (let i=0; i<8; i++) {
      if (isValid(i)) {
        arr.push(i);
        dfs(r+1);
        arr.pop();
      }
    }

    function isValid(index) {
      let row = arr.length;
      let col = index;
      let left = row-col;
      let right = row+col;
      for (let i=0; i<row; i++) {
        if (arr[i] === index) return false;
        if (arr[i]+i === right) return false;
        if (i - arr[i] === left) return false;
      }
      return true;
    }
  }
  return count;

}

console.log(eightQueens());































