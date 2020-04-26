function buildPalindrome(st) {
    st = st.split('').join('#');
    let index = st.length-1;
    for (let i=Math.floor(st.length/2); i<st.length; i++) {
        let diff = 0;
        for (let j=1; j<st.length-i; j++) {
            if (diff !== 0) continue;
            if (st[i+j] != st[i-j]) {
                diff += 1;
                continue;
            };
        }
        if (diff == 0) {
            index = i;
            break;
        }
    }
    let res = st.slice(0, index) + st.slice(0, index+1).split('').reverse().join('');
    res = res.split('#').join('');
    return res;
}