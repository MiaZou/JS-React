function rubHouse(array) {
  if (array.length <= 0) return [];
  let dp = new Array();
  dp[0] = array[0];
  dp[1] = Math.max(dp[0], array[1]);
  for (let i=2; i<array.length; i++) {
    dp[i] = Math.max(dp[i-1], dp[i-2]+array[i]);
  }
  return dp[array.length-1];
}