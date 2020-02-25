function fibonacci(n) {
  let result = 0;
  if (n === 0) {
    return result;
  }
  if (n === 1 || n === 2) {
    return result = 1;
  } else {
    return result = fibonacci(n-1) + fibonacci(n-2);
  }
}

function fibonacci_iterative(n) {
  let result = 0;
  if (n === 0) {
    return result;
  }
  if (n === 1 || n === 2) {
    return result = 1;
  }

  let a = 1;
  let b = 1;
  let c;
  for (i=3; i<=n; i++){
    c = a + b;
    a = b;
    b = c;
  }

  return c;
}

console.log(fibonacci(9));
console.log(fibonacci_iterative(9));