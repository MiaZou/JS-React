var findLadders = function(beginWord, endWord, wordList) {
    if (beginWord === endWord) return [];
    let res = [];
    let queue = [];
    let shortestSteps = new Map();
    shortestSteps.set(beginWord, 0);
    let index = -1;
    queue.push([beginWord, -1, 1]);
    while (index+1 < queue.length) {
        index++;
        const item = queue[index];
        const currWord = item[0], prev = item[1], level = item[2];
        if (res.length > 0) {
            if  (level > res[0].length ) {
                break;
            }
        }
        if (currWord === endWord) {
            const currPath = findPath(index);
            res.push(currPath);
            continue;
        };
        let nextWordList = nextWords(currWord, level);
        if (nextWordList.length > 0) {
            for (let i=0; i<nextWordList.length; i++) {
                queue.push([nextWordList[i], index, level+1]);
                shortestSteps.set(nextWordList[i], level);
            }
        }
    }
    
    function findPath(index) {
        let currPath = [];
        while (index !== -1) {
            currPath.unshift(queue[index][0]);
            index = queue[index][1];
        }
        return currPath;
    }
    
    function nextWords(currWord, level) {
        let nextWords = [];
        for (let i=0; i<wordList.length; i++) {
            if (shortestSteps.has(wordList[i])) {
                if (shortestSteps.get(wordList[i]) < level) continue;
            }
            let diff = 0;
            for (let j=0; j<currWord.length; j++) {
                if (wordList[i][j] !== currWord[j]) diff++;
            }
            if (diff === 1) nextWords.push(wordList[i]);
        }
        return nextWords;
    }
    return res;
};

console.log(findLadders("hit", "cog", ["hot","dot","dog","lot","log","cog"]));