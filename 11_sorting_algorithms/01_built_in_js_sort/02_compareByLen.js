function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

function compareByLenReverse(str1, str2) {
  return str2.length - str1.length;
}

const arr = ["steele", "cole", "lopes", "diegote"]

const builtInSort = [...arr].sort()

const sorted = [...arr].sort(compareByLen)

const reverseSorted = [...arr].sort(compareByLenReverse)


console.log('arr:', arr)
console.log('built-in sort:', builtInSort)
console.log('sorted by len:', sorted)
console.log('reverse sorted by len:', reverseSorted)