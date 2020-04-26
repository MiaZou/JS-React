/*
function stringsRearrangement(inputArray) {
    let nextMap = new Map();
    const len = inputArray.length;
    for (let i=0; i<len; i++) {
        let currNext = [];
        for (let j=0; j<len; j++) {
            if (i !== j) {
                let diff = 0;
                for (let d=0; d<inputArray[i].length; d++) {
                    if (inputArray[i][d] !== inputArray[j][d]) diff++;
                }
                if (diff === 1) {
                    currNext.push(j);
                }
            }
        }
        nextMap.set(inputArray[i], currNext);
    }
    
    for (let i=0; i<len; i++) {
        let queue = [];
        queue.push([i, -1, 1]);
        let index = -1;
        while (index !== queue.length-1) {
            index++;
            const item = queue[index];
            const node = inputArray[item[0]], prev = item[1], step = item[2];
            if (step === len) return true;
            const nextItem = nextMap.get(node);
            for (let child of nextItem) {
                if (!visited(index, child)) {
                    queue.push([child, index, step+1]);
                }
            }
        }
        function visited(i, child) {
            let visited = new Set();
            visited.add(queue[i][0]);
            let prev = queue[i][1];
            while (prev !== -1) {
                visited.add(queue[prev][0]);
                prev = queue[prev][1];
            }
            if (visited.has(child)) return true;
            else return false;
        }
    }

    return false;
}
*/

function stringsRearrangement(inputArray) {
    const len = inputArray.length;
    let nextIndexMap = new Map();
    for (let i=0; i<len; i++) {
        let curr = [];
        for (let j=0; j<len; j++) {
            let diff = 0;
            if (i !== j) {
                for (let d=0; d<inputArray[i].length; d++) {
                    if (inputArray[i][d] !== inputArray[j][d]) diff++;
                }
                if (diff === 1) curr.push(j);                
            }
        }
        nextIndexMap.set(i, curr);
    }

    let isTrue = false;

    for (let i=0; i<len; i++) {
        isValid(i, new Set([i]));
        if (isTrue) return true;
    }

    function isValid(index, visited) {
        if (isTrue === true) return;
        if (visited.size === len) {
            isTrue = true;
            return true;
        }
        const nextArray = nextIndexMap.get(index);
        for (let i=0; i<nextArray.length; i++) {
            if (!visited.has(nextArray[i])) {
                let newSet = new Set(visited);
                newSet.add(nextArray[i]);
                isValid(nextArray[i], newSet);  
            }
        }
    }

    return false;
}

console.log(stringsRearrangement(['aba', 'bbb', 'bab']));
console.log(stringsRearrangement(['q', 'q']));
console.log(stringsRearrangement(["ab", "ad", "ef", "eg"]));
console.log(stringsRearrangement(['a', 'b', 'c']));