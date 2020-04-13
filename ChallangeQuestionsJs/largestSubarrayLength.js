function largestSubarrayLength(A, K) {
  let res = 0;
  for (let i=1; i<A.length-K+1; i++) {
    for (let j=0; j<K; j++) {
      if (A[res+j] < A[i+j]) {
        res = i;
        break;
      }
    }
  }
  return A.slice(res, res+K);
}

console.log(largestSubarrayLength([1,4,3,2,5], 4));
console.log(largestSubarrayLength([1,4,3,2], 4))