function popularRoom(record) {
  let recordMap = new Map();
  let mostBooked = record[0].slice(1, 3);
  for (let i=0; i<record.length; i++) {
    if (record[i][0] === "+") {
      const curr = record[i].slice(1, 3);
      if (recordMap.has(curr)) {
        recordMap.set(curr, recordMap.get(curr) + 1);
        if (recordMap.get(curr) > recordMap.get(mostBooked)) mostBooked = curr;
      } else {
        recordMap.set(curr, 1);
      }
    }
  }
  return mostBooked;
}

console.log(popularRoom(["+1A", "+3E", "-1A", "+4F", "+1A", "-3E"]));
console.log(popularRoom(["+1A", "+3E", "-1A", "+4F", "+1A", "-3E", "+2A", "-2A", "+2A", "-2A", "+2A"]));