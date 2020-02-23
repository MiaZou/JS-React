function sum() {
  let sum = 0;
  let result = 0;

  for (let i=1; i<5; i++) {
    for (let j=1; j<5; j++) {
      for (let k=1; k<5; k++) {
        if (i != j && i != k && j != k) {
          sum++;
          result = i*100 + j*10 + k;
          console.log(result);
        }
      }
    }
  }
  console.log(sum);
}

sum();