function evaluateReversePolishNotation(array) {
  let stack = [];
  for (let i=0; i<array.length; i++) {
    if (array[i] === '+') {
      stack.push(stack.pop() + stack.pop());
    } else if (array[i] === '-') {
      stack.push(-stack.pop() + stack.pop());
    } else if (array[i] === '*') {
      stack.push(stack.pop() * stack.pop());
    } else if (array[i] === '/') {
      const a = stack.pop();
      const b = stack.pop();
      console.log(a, b);
      try {
        dividing(a, b);
      } catch(e) {
        console.log(e);
      }
    } else {
      stack.push(parseInt(array[i]));
    }
  }
  return stack[0];

  function dividing(a, b) {
    if (a === 0) {
      throw "invalid divider.";
    } else {
      stack.push(Math.trunc((1/a)*b));
    } 
  }
}
console.log(evaluateReversePolishNotation(['2', '+', '3', '*']));
console.log(evaluateReversePolishNotation(['2', '1', '+', '3', '*']));
console.log(evaluateReversePolishNotation(['1', '0', '/', '3', '*']));