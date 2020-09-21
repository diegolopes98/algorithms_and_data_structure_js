function recursiveRange(number) {
  if(number === 0 ) return number
  return number + recursiveRange(number-1)
}