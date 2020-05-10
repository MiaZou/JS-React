function maxValue(weight, value, maxValue) {
  let dp = new Array(weight.length);

  for (let i=0; i<dp.length; i++) {
    dp[i] = new Array(maxValue+1);
  }

  for (let i=0; i<weight.length; i++) {
    for (let j=0; j<=maxValue; j++) {
      if (i === 0) {
        if (weight[i] <= j) dp[i][j] = value[i];
        else {
          dp[i][j] = 0;
        }
      } else if (j === 0) dp[i][j] = 0;
      else {
        if (weight[i] <= j - weight[i-1]) {
          dp[i][j] = Math.max(value[i]+dp[i-1][j-weight[i]], dp[i][j-1]);
        } else {
          dp[i][j] = dp[i-1][j];
        }
      }
      console.log(dp);
    }
  }
  return dp[weight.length-1][maxValue];
}

console.log(maxValue([2,2,6,5,4], [6,3,5,4,6], 10));