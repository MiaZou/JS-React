function stringNumber(string) {
  let stringMap = new Map();
  for (let i=0; i<string.length; i++) {
    if (stringMap.has(string[i])) {
      stringMap.set(string[i], stringMap.get(string[i])+1);
    } else {
      stringMap.set(string[i], 1);
    }
  }

  let res = '';
  for (let [key, value] of stringMap) {
    res+= key.toString() + value.toString();
  }
  return res;
}

console.log(stringNumber('bbaaac'));