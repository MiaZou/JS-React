function convertToBinary(n) {
  let res = '';
  while (n!== 0) {
    const mod = n % 2;
    res = mod.toString() + res;
    n = (n - mod)/2;
  }
  return res;
}

console.log(convertToBinary(13));