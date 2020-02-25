function counting(string){
  result = {};
  for (i=0; i<string.length; i++){
    if (string.charAt(i) in result) {
      result[string[i]] += 1;
    } else {
      result[string[i]] = 1;
    }
  }

  return result;
}

console.log(counting("Hello world!"));