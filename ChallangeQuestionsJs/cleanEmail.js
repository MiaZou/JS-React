function cleanEmail(email) {
  let res = '';
  for (let i=0; i<email.length; i++) {
    if (email[i] === '.') {
      continue;
    } else if (email[i] === '+') {
      while (email[i] !== '@') {
        i++;
      }
      i--;
    } else res += email[i];
  }

  return res;
}

console.log(cleanEmail('a.b@example.com'));
console.log(cleanEmail('a.b....@example.com'));
console.log(cleanEmail('a.b+work@example.com'));