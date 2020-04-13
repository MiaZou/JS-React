/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    if (beginWord === endWord) return 0;
    const wordListSet = new Set();
    for (let i=0; i<wordList.length; i++) {
        wordListSet.add(wordList[i]);
    }
    
    let res = [];
    let resLevel = -1;
    const N = beginWord.length;
    let queue = [];
    queue.push([beginWord, 1, -1]);
    let index = -1;
    while(queue.length > 0) {
        index++;
        const item = queue[index];
        const currWord = item[0], level = item[1], prev = item[2];
        if (resLevel !== -1 && resLevel > level) break;
        if (currWord === endWord) {
            addPath(currWord, prev);
            resLevel = level;
            continue;
        }
        for (let i=0; i<N; i++) {
            for (let j=0; j<26; j++) {
                let newWord = currWord.split('');
                newWord[i] = String.fromCharCode(97+j);
                newWord = newWord.join('');
                if (wordListSet.has(newWord)) {
                    queue.push([newWord, level+1, index]);
                }
            }
        }
    }
    
    function addPath(currWord, prev) {
        let currPath = [];
        while (prev !== -1) {
            currPath.unshift(queue[prev]);
            prev = queue[prev][2];
        }
        res.push(currPath);
        return;
    }
    
    return res.length > 0 ? res : 0;
};

console.log(findLadders("hit", "cog", ["hot","dot","dog","lot","log","cog"]));