function someRecursive(arr, callback){
  if(!arr.length) return false
  if(callback(arr[0])) return true
  return someRecursive(arr.slice(1), callback)
}

console.log(someRecursive([4,6,8], val => val > 10)) // true