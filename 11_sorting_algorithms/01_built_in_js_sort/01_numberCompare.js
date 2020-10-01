function numberCompare(num1, num2) {
  return num1 - num2;
}

function numberCompareReverse(num1, num2) {
  return num2 - num1;
}

const arr = [6,4,15,10]

const builtInSort = [...arr].sort()

const sorted = [...arr].sort(numberCompare)

const reverseSorted = [...arr].sort(numberCompareReverse)

console.log('arr:', arr)
console.log('built-in sort:', builtInSort)
console.log('sorted:', sorted)
console.log('reverse sorted:', reverseSorted)