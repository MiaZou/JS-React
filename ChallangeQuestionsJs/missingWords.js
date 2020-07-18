function missingWords(s, t) {
  t = t.split(' ');
  let set = new Set();
  for (let word of t) {
    set.add(word);
  }

  let res = [];
  s = s.split(' ');
  for (let word of s) {
    if (!set.has(word)) {
      res.push(word);
    }
  }

  return res;
}

console.log(missingWords("I am using HackerRank to improve programming", "am HackerRank to improve"));