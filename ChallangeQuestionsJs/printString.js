function printString(string) {
  for (let i=0; i<string.length; i++) {
    for (let j=i+1; j<string.length+1; j++) {
      console.log(string.slice(i, j));
    }
  }
}

printString('123456');