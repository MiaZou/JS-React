function birthdayCakeCandles(ar) {
    let hash = new Map();
    let max = ar[0];
    console.log(max);
    for (let i=0; i < ar.length; i++) {
        if (!hash.has(ar[i])) {
            hash.set(ar[i], 1);
        } else {
            hash.set(ar[i], hash.get(ar[i]) + 1);
        }
        if (ar[i] > max) max = ar[i];
        console.log(max, ar[i]);
    };
    console.log(hash.get(max), 'final');
};

console.log(birthdayCakeCandles([3, 2, 1, 3]));