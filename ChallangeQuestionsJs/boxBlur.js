function boxBlur(image) {
    let res = new Array(image.length-2);
    for (let i=0; i<image.length-2; i++) {
        res[i] = new Array(image[0].length-2);
    }
    // make for loops to find the sum of 9 int
    for (let i=1; i<image.length-1; i++) {
        for (let j=1; j<image[0].length-1; j++) {
            let currSum = 0;
            for (let n=i-1; n<i+2; n++) {
                for (let m=j-1;m<j+2;m++) {
                    currSum += image[n][m];
                }
            }
            const sum = Math.floor(currSum/9);
            res[i-1][j-1] = sum;
        }
    }
    return res;
}
