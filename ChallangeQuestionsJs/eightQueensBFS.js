function eightQueens() {
  let queue = [];
  let index = -1;
  let res = [];
  let count = 0;
  queue.push([]);
  while (index < queue.length-1) {
    index ++;
    const item = queue[index];
//    console.log('item, queue[0]', queue[0], queue);
//    console.log(item);
    if (item.length === 8) {
      res.push(item);
      count++;
      continue;
    }
    for (let i=0; i<8; i++) {
      if (isValidChild(item, i)) {
        const curr = copyItem(item, i);
        queue.push(curr);
      };
    }

  }

  let final = display(res);
  return count;

  function display(res) {
    let final = [];
    for (let i=0; i<res.length; i++) {
      let currRes = ''
      for (let j=0; j<8; j++) {
        currRes += res[i][j].toString();
      }
      final.push(currRes);
    }
    return final;
  }

  function copyItem(item, index) {
    const len = item.length;
    let newItem = new Array(len+1);
//    console.log(newItem, item, '40');
    for (let i=0; i<len; i++) {
      newItem[i] = item[i];
//      console.log(newItem);
    }
//    console.log('43', newItem);
    newItem[len] = index;
//    console.log('copyItem', newItem);
    return newItem;
  }

  function isValidChild(item, index) {
    const row = item.length;
    const col = index;
    const left = row - col;
    const right = row + col;
    for (let i=0; i<row; i++) {
      if (item[i] === col) return false;
      if (i - item[i] === left) return false;
      if (i + item[i] === right) return false;

    }
    return true;
  }
}

console.log(eightQueens());
let res = eightQueens();

function printRes(res) {
  for (let x=0; x<res.length; x++) {
    let currRes = res[x];
    for (let i=0; i<8; i++) {
      let printOut = '';
      for (let j=0; j<8; j++) {
        if (currRes[i] === j.toString()) printOut += 'Q ';
        else printOut += '* ';
      }
      console.log(printOut);
    }
    return;
  }
}

// printRes(res);