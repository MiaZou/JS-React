var fullJustify = function(words, maxWidth) {
    let res = [];
    let currRow = [words[0]];
    let len = words[0].length;
    for (let i=1; i<words.length; i++) {
        if (len + 1 + words[i].length <= maxWidth) {
            currRow.push(words[i]);
            len += 1 + words[i].length;
        } else {
            res.push(adjustify(currRow, len));
            currRow = [words[i]];
            len = words[i].length;
        }
    }
    if (currRow.length > 0)  res.push(adjustifyLastRow(currRow));
    
    return res;
    
    function adjustifyLastRow(row) {
        let lastRow = row[0];
        for (let i=1; i<row.length; i++) {
            lastRow += ' ' + row[i];
        }
        for (let i=0; i<(maxWidth - lastRow.length + 1); i++) {
            lastRow += ' ';
        }
        return lastRow;
    }
    
    function adjustify(row, len) {        
        const wordsLen = len - (row.length -1);
        const eachSpaces = Math.floor((maxWidth - wordsLen)/(row.length-1));
        let extra = maxWidth - eachSpaces*(row.length-1) - wordsLen;
        let between = '';
        for (let i=0; i<eachSpaces; i++) {                  
              between += ' ';                                
        }
        let final = row[0];
        for (let i=1; i<row.length; i++) {
            if (extra > 0) {
                final += between + ' ' + row[i];
                extra --;
            } else {
                final += between + row[i];
            }            
        }
        return final;
    }
};

console.log(fullJustify(["What","must","be","acknowledgment", "shall"], 16));