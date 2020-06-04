/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    return helper(0)[0];
    
    function helper(start) {
        let num = '';
        let res = '';
        while (start < s.length) {
            if (s.charCodeAt(start) >= '0'.charCodeAt(0) && s.charCodeAt(start) <= '9'.charCodeAt(0)) {
                num += s[start];
                start++;
            } else if (s[start] === '[') {
                start++;
                const item = helper(start);
                const sub = item[0];
                start = item[1]+1;
                num = parseInt(num);
                for (let i=0; i<num; i++) {
                    res += sub;
                }
                num = '';
            } else if (s[start] === ']') {
                break;
            } else {
                res += s[start];
                start++;
            }
        }
        return [res, start];
    }
};

console.log(decodeString('3[a]2[bc]'));
console.log(decodeString('3[a2[c]]'));
console.log(decodeString('2[abc]3[cd]1[ef]ef'));
console.log(decodeString('3[z]2[2[y]pq4[2[jk]e1[f]]]ef'));