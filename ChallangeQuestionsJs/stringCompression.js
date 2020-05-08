/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    if (chars.length === 1) return 1;
    let pointer = 0, i = 0, curr = 0;
    while (i<chars.length) {
        curr = i;
        while (chars[i] === chars[curr] && i<chars.length) i++;
        chars[pointer] = chars[curr];
        pointer++;
        if (i-curr === 1) continue;
        for (let count of (i-curr).toString()) {
            chars[pointer] = count;
            pointer++;
        }
        i++;
    }
    let res = [pointer, ...chars];
    return res;
};

console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]));
console.log(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c']));