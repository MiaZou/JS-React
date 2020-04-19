function compareStrings(A, B) {
  A = A.split(',');
  B = B.split(',');

  let b = [B.length];
  for (let i=0; i<B.length; i++) {
    let smallest = B[i][0];
    b[i] = 0;
    for (let j=0; j<B[i].length; j++) {
      if (B[i][j] < smallest) {
        b[i] === 1;
        smallest = B[i][j];
      } else if (B[i][j] === smallest) {
        b[i]++;
      } else {
        continue;
      }
    }
  }

  let a = [A.length];
  for (let i=0; i<A.length; i++) {
    let smallest = A[i][0];
    a[i] = 0;
    for (let j=0; j<A[i].length; j++) {
      if (A[i][j] < smallest) {
        a[i] === 1;
        smallest = A[i][j];
      } else if (A[i][j] === smallest) {
        a[i]++;
      } else {
        continue;
      }
    }    
  }

  let aMap = new Map();
  for (let i=0; i<a.length; i++) {
    if (aMap.has(a[i])) {
      aMap.set(a[i], aMap.get(a[i])+1);
    } else {
      aMap.set(a[i], 1);
    }
  }

  let res = [];
  for (let i=0; i<b.length; i++) {
    let n = 0;
    aMap.forEach(function(value, key) {
      if (b[i] > key) {
        n+=value;
      }
    });
    res.push(n);
  }

  return res;
}

console.log(compareStrings("abcd,aabc,bd", "aaa,aa"));