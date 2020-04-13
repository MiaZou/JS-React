function wateringPlant(plants, capacity) {
  let res = 0;
  let currWater = capacity;
  const start = -1;
  for (let i =0; i<plants.length; i++) {
    if (plants[i] > currWater) {
      res += (i-start) * 2 - 1;
      currWater = 6;
    } else {
      res += 1;
    }
    currWater -= plants[i];
  }
  return res;
}

console.log(wateringPlant([2,4,5,1,2], 6));