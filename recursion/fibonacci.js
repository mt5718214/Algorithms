function fibonacciSequence(n) {
  if(n === 0) {
    return 0
  }
  if(n === 1) {
    return 1
  }

  return fibonacciSequence(n - 1) + fibonacciSequence(n - 2)
}


for(let i = 0; i < 8; i++) {
  console.log(fibonacciSequence(i));
}