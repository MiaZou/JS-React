var longestPalindrome = function(s) {
    if (s.length <= 1) return s;
    if (s.length === 2) {
        if (s[0] === s[1]) return s;
        else return s[0];
    }
    s = '#' + s.split('').join('#') + '#';
    let max = s.slice(0, 1);
    for (let i=1; i<s.length; i++) {
        let curr = s.slice(i, i+1);
        let left = i-1, right = i+1;
        while (left >=0 && right < s.length && s[left] === s[right]) {
            curr = s.slice(left, right+1);
            left = left - 1;
            right = right + 1;
        }
        if (curr.length > max.length) max = curr;
    }
    max = max.split('#').join('');
    return max;
};

console.log(longestPalindrome('ccc'));