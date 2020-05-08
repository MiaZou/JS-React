function storesandHouses(houses, stores) {
  houses.sort((a,b) => a-b);
  stores.sort((a,b) => a-b);
  let index = 0;
  let res = new Array(houses.length);
  for (let i=0; i<houses.length; i++) {
    while (houses[i] > stores[index] && index < stores.length-1) {
      index++;
    }

    if (index === 0) {
      res[i] = stores[0];
    } else {
      if (Math.abs(houses[i] - stores[index]) >= Math.abs(houses[i] - stores[index-1])) {
        res[i] = stores[index-1];
      } else res[i] = stores[index];
    }
  }
  return res;
}

console.log(storesandHouses([5,10,17], [1,5,20,11,16]));
console.log(storesandHouses([2,4,2], [5,1,2,3]));
console.log(storesandHouses([4,8,1,1], [5,3,1,2,6]));