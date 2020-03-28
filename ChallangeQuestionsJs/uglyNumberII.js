/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    if (n === 1) return n;
    let i2=0, i3=0, i5=0;
    let ugly = [1];
    while (!ugly[n-1]) {
        let u2 = ugly[i2] * 2;
        let u3 = ugly[i3] * 3;
        let u5 = ugly[i5] * 5;
        let min = Math.min(u5, Math.min(u2, u3));
        if (min !== ugly[ugly.length-1]) ugly.push(min);
        if (min === u2) {
            i2++;
        } else if (min === u3) {
            i3++;
        } else {
            i5++;
        };
    }
    return ugly[n-1];
};