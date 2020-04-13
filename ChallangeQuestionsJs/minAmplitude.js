function minAmplitude(array) {
  if (array.length <= 3) return 0;
  array.sort((a,b) => a-b);
  // remove all three from front: 
  const a = Math.abs(array[3] - array[array.length-1]);
  // remove all three from back:
  const b = Math.abs(array[0] - array[array.length-4]);
  // remove two from front and one from back:
  const c = Math.abs(array[2] - array[array.length-2]);
  // remove one from front and two from back:
  const d = Math.abs(array[1] - array[array.length-3]);
  const res = Math.min(a, b, c, d);
  return res;
}

console.log(minAmplitude([10, 10, 3, 4, 10]));
console.log(minAmplitude([-1, 3, -1, 8, 5, 4]));