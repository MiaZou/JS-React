function maxSubarray(array) {
  let start = 0, end = 0, max = array[0], prev = array[0], currStart =0, currEnd = 0;
  for (let i=1; i<array.length; i++) {
    const curr = array[i];
    prev = Math.max(curr, prev+curr);

    if (prev === curr) {
      currStart = i, currEnd = i;
    } else {
      currEnd = i;
    }

    max = Math.max(prev, max);

    if (max === prev) {
      start = currStart, end = currEnd;
    };
  }

  const res = [start, end];
  
  return res;
}

console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));