function repeat(array) {
  newArray = [];
  for (i = 0; i < array.length; i++) {
    if (newArray.indexOf(array[i]) == -1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(repeat([false, true, undefined, null, 0, 1, {}, {}, 'a', 'a']));