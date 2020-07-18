
function longestPre(prefixes, phoneNums){
  let set = new Set();
  for (let i=0; i<prefixes.length; i++) {
    set.add(prefixes[i]);
  }
  let res = new Array(phoneNums.length);
  const len = phoneNums.length;
  for (let i=0; i<len; i++) {
    const phoneNum = phoneNums[i];
    const phoneNumLen = phoneNums[i].length;
    for (let j=phoneNumLen; j>0; j--) {
      const curr = phoneNum.slice(0, j);
      if (set.has(curr)) {
        res[i] = curr;
        break;
      }
    }
    if (res[i] === undefined) res[i] = '';
  }
  return res;
}


class Trie {
  constructor() {
    this.root = {};
    this.isEnd = false;
  }

  add(word) {
    let node = this.root;
    for (let letter of word) {
      if (!node[letter]) {
        node[letter] = new Trie();
      }
      node = node[letter];
    }
    node.isEnd = true;
  }

  prefixMatch(word) {
    let node = this.root;
    let res = '';
    for (let letter of word) {
      if (!node[letter]) return res;
      res += letter;
      node = node[letter];
    }
    return res;
  }
}

function longestPre(prefixes, phoneNums) {
  let trie = new Trie();
  for (let prefix of prefixes) {
    trie.add(prefix);
  }

  let res = new Array(phoneNums.length);
  for (let i=0; i<phoneNums.length; i++) {
    res[i] = trie.prefixMatch(phoneNums[i]);
  }

  return res;
}

console.log(longestPre(['+1415123', '+1415000', '+1412', '+1510', '+1', '+44'], ['+14151234567', '+9990', '+14151224983']));