/*
function dupDigit(number) {
  let max = number;
  const numString = number.toString();
  const len = numString.length;
  for (let i=0; i<len; i++) {
    let left = 0, right = 0;
    const currDigit = parseInt(numString[i], 10);
    if (i+1 > 0) left = parseInt(numString.slice(0, i+1), 10);
    if (len-i-1 > 0) right = parseInt(numString.slice(i+1, len), 10);
    const curr = left * Math.pow(10, (len - i)) + currDigit * Math.pow(10, (len - i - 1)) + right;
    if (max < curr) max = curr;
  }
  return max;
}
*/

function dupDigit(number) {
  const numString = number.toString();
  const len = numString.length;
  let digit = len - 1;
  for (let i=0; i<len-1; i++) {
    if (numString[i+1] < numString[i]) {
      digit = i;
      break;
    }
  }
  let left = 0, right = 0;
  if (digit>0) left = parseInt(numString.slice(0, digit), 10);
  const middle = parseInt(numString[digit], 10);
  if (len - digit > 0) right = parseInt(numString.slice(digit, len));
  const res = left * Math.pow(10, len-digit+1) + middle * Math.pow(10, len-digit) + right;
  return res;
}

console.log(dupDigit(12345));
console.log(dupDigit(54321));
console.log(dupDigit(12321));