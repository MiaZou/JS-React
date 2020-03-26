/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let hash1 = new Map();
    let hash2 = new Map();
    for (let i=0; i < s.length; i++) {
        if (!hash1.has(s[i]) && !hash2.has(t[i])) {
            hash1.set(s[i], i);
            hash2.set(t[i], i);
        } else if (hash1.get(s[i]) === hash2.get(t[i])) {
            continue;
        } else {
            return false;
        }
    }
    return true;
};

console.log(isIsomorphic('aa', 'ab'));