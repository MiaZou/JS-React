function splitSMS(SMS) {
  const len = SMS.length;
  if (len <= 160) return SMS;
  SMS += ' ';
  let splits = [];
  let start = 0, index = 154;
  while (index) {
    if (SMS.length - start < 154) {
      index = SMS.length - 1;
      splits.push(index);
      break;
    }
    let curr = SMS.slice(start, index+1);
    while (curr[index] !== ' ') {
      index--;
    }
    splits.push(index);
    start = index+1;
    index += 154;
  }

  let res = [];
  const count = splits.length;
  let left = 0;
  for (let i=0; i < count; i++) {
    res.push(SMS.slice(left, splits[i]+1) + `(${i+1}/${count})`);
    left = splits[i]+1;
  }
  return res;
}

console.log(splitSMS('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat nec dui quis maximus. Praesent vehicula feugiat condimentum. Nunc porta vulputate elit sit amet lacinia. Vivamus volutpat accumsan consequat. Nulla mattis odio erat, vel convallis neque semper nec. Integer a pharetra purus'));