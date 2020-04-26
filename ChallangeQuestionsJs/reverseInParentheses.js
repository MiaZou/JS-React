function reverseInParentheses(inputString) {
    let res = '';
    let counter = 0;
    for (let i=0; i<inputString.length; i++) {
        if (inputString[i] === "(") {
            const item = reverseString(i+1);
            const rev = item[0]
            res += rev;
            counter = item[1];
        } else {
            res += inputString[i];
        }
        if (counter > 0) {
            i = i+counter;
            counter = 0;
        }
    }

    return res;

    function reverseString(i) {
        let newString = '';
        const start = i;
        while (inputString[i] !== ')') {
            if (inputString[i] === '(') {
                const item = reverseString(i+1);
                newString += item[0];
                i += item[1] + 1;
                continue;
            }
            newString += inputString[i];
            i++;
        }
        return [newString.split('').reverse().join(''), i-start+1];
    }
}
