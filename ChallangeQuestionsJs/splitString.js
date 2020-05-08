function splitString(string) {
  let arrayRight = [];
  for (let i=string.length-1; i>=0; i--) {
    let curr;
    if (arrayRight[0]) {
      curr = new Set(arrayRight[0]);
      if (!arrayRight[0].has(string[i])) {
        curr.add(string[i]);
      }
    } else {
      curr = new Set(string[i]);
    }
    arrayRight.unshift(curr);
  }
  
  let left = new Set();
  let res = 0;
  for (let i=0; i<string.length-1; i++) {
    if (left.size > 0) {
      if (!left.has(string[i])) {
        left.add(string[i]);
      }
    } else {
      left.add(string[i]);
    }
    if (isEqSet(left, arrayRight[i+1])) {
      res ++;
    }
  }

  function isEqSet(a, b) {
    if (a.size !== b.size) return false;
    for (let n of a) {
      if (!b.has(n)) return false;
    }
    return true;
  }

  return res;

};

console.log(splitString("ababa"));
console.log(splitString("abc"));
console.log(splitString("aaaa"));