/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

var ladderLength = function(beginWord, endWord, wordList) {
    let len = beginWord.length;
    let visited = new Set();
    visited.add(beginWord);
    let wordListSet = new Set();
    for (let i=0; i<wordList.length; i++) {
        wordListSet.add(wordList[i]);
    }
    let queue = [];
    queue.push([beginWord, 1]);
    while (queue.length > 0) {
        const item = queue.shift();
        const currWord = item[0], level = item[1];
        if (currWord === endWord) return level;
        for (let i=0; i<len; i++) {
            for (let j=0; j<26; j++) {
                let newWord = currWord.split('');
                newWord[i] = String.fromCharCode(97+j);
                newWord = newWord.join('');
                if (visited.has(newWord)) continue;
                if (wordListSet.has(newWord)) {
                    queue.push([newWord, level+1]);
                    visited.add(newWord);
                }
            }
        }
    }
    return 0;
};


/*
function ladderLengthDFS(beginWord, endWord, wordList) {
    if (beginWord === endWord) return 0;
    const wordListSet = new Set();
    for (let i=0; i<wordList.length; i++) {
        wordListSet.add(wordList[i]);
    }

    let res = [];
    const len = beginWord.length;

    dfs(beginWord, 1);

    function dfs(currWord, level) {
        if (currWord === endWord) {
            res.push(level);
            return;
        }
        for (let i=0; i<len; i++) {
            for (let j=0; j<26; j++) {
                let newWord = currWord.split('');
                newWord[i] = String.fromCharCode(97+j);
                newWord = newWord.join('');
                console.log(newWord);
                if (wordListSet.has(newWord)) {
                    dfs(newWord, level+1);
                }
            }
        }
    }

    const final = compareMin(res);

    function compareMin(res) {
        if (res.length <= 0) return 0;
        if (res.length === 1) return res[0];
        let min = res[0];
        for (let i=1; i<res.length; i++) {
            if (res[i] < min) min = res[i];
        }
        return min;

    }

    return final;

};
*/

console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
console.log(ladderLength("leet", "code", ["lest","leet","lose","code","lode","robe","lost"]));








