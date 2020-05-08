function timeToTypeAString(string) {
  const start = 96; // 'a'.charCodeAt(0) - 1;
  let prev = string.charCodeAt(0) - 97;
  let res = prev;
  for (let i=1; i<string.length; i++) {
    res += Math.abs(prev - (string.charCodeAt(i) - 97));
    prev = string.charCodeAt(i) - 97;
  }
  return res;
}

console.log(timeToTypeAString('cba'));
console.log(timeToTypeAString('cbabca'));