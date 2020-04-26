function minDaysToBloom(roses, k, n) {
  let min = roses[0], max = roses[0];
  for (let i=1; i<roses.length; i++) {
    if (roses[i] < min) min = roses[i];
    if (roses[i] > max) max = roses[i];
  }

  while (min < max) {
    let mid = Math.floor((max - min)/2 + min);
    if (isValid(mid)) max = mid-1;
    else min = mid+1;
  }

  return min;

  function isValid(mid) {
    let count = 0;
    let left = 0;
    let right = 0;
    for (let i=0; i<roses.length; i++) {
      if (roses[i] > mid) {
        left = i+1;
        right = i+1;
      } else {
        if (right - left + 1 === k) count++;
        right++;
      }
      if (count >= n) return true;
    }
    if (right < roses.length && left<roses.length && right-left >= k) count++;
    if (count >= n) return true;
    return false;
  }
}

console.log(minDaysToBloom([1,2,4,9,3,4,1], 2, 2));
console.log(minDaysToBloom([1,2,4,9,3,4,1], 1, 2));
console.log(minDaysToBloom([1,2,4,9,3,4,1], 3, 2));
console.log(minDaysToBloom([1,2,4,9,4,3,1], 2, 2));