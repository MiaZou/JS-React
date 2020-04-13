/*
function dominoSet(A, B) {
  let hashA = new Map();
  let hashB = new Map();
  let hashRepeated = new Map();
  for (let i=0; i<A.length; i++) {
    if (A[i] == B[i]) {
      addToHash(A[i], hashRepeated);
    } else {
      addToHash(A[i], hashA);
      addToHash(B[i], hashB);
    }
  }

  for (let i=1; i<7; i++) {
    if (hashA.get(i) + hashB.get(i) === A.length) {
      const res = Math.min(hashA.get(i), hashB.get(i));
      return res;
    }

    if (hashRepeated.has(i)) {
      if (hashA.get(i) + hashB.get(i) + hashRepeated.get(i) === A.length) {
        const res = Math.min(hashA.get(i), hashB.get(i));
        return res;
      }
    }
  }

  return -1;

  function addToHash(x, hash) {
    if (hash.has(x)) {
      hash.set(x, hash.get(x) + 1);
    } else {
      hash.set(x, 1);
    }
    return;
  }
};
*/


function dominoSet(A, B) {
  let a1 = 0, a2=0, b1 = 0, b2=0, repeated1 = 0, repeated2=0;
  for (let i=0; i<A.length; i++) {
    if (A[0] === A[i]) a1++;
    if (B[0] === B[i]) b2++;
    if (A[0] === B[i]) b1++;
    if (B[0] === A[i]) a2++;
    if (A[i] === B[i]) {
      if (A[i] === A[0]) {
        repeated1++;
        a1--;
        b1--;
      } else if (A[i] === B[0]) {
        repeated2++;
        a2--;
        b2--;
      }
    }
  }

  if (a1+b1+repeated1 === A.length) {
    return Math.min(a1, b1);
  } else if (a2+b2+repeated2 === A.length) {
    return Math.min(a2, b2);
  } else {
    return -1;
  }
}

console.log(dominoSet([1,2,3,6,3,2], [2,1,2,2,2,4]));
console.log(dominoSet([1,2,1,2], [2,6,1,2]));