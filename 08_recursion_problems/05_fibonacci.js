function fib(number){
  if(number < 1) return 0
  if(number < 2) return 1
  return fib(number - 1) + fib(number - 2)
}

console.log(fib(10))