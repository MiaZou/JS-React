function diagonalDifference(arr) {
    // Write your code here
    let LtoR = 0, RtoL = 0;
    for (let i = 0; i < arr.length; i++) {
        LtoR += arr[i][i];
        RtoL += arr[i][arr.length-i-1];
        console.log(LtoR, RtoL);
    };
    const res = Math.abs(LtoR - RtoL);
    return res;
};

console.log(diagonalDifference([[1, 2, 3], [1, 2, 3], [1, 2, 3]]));