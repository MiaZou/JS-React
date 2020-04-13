function pickFruits(fruits) {
  if (fruits.length === 1) return fruits[0];
  if (fruits.length === 2) return fruits[0] + fruits[1];
  let a = fruits[0], b = fruits[1];
  let res = 2;
  for (let i=2; i<fruits.length; i++) {
    if (fruits[i] !== a && fruits[i] !== b) return res;
    else res++;
  }
  return res;
}

console.log(pickFruits([1,2,1,3,4,3,5,1,2]));
console.log(pickFruits([1,2,1,2,1,2,1]));