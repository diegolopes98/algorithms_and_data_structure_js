function binarySearch(arr, target) {
  let first = 0, last = arr.length - 1, middle = Math.round((arr.length - 1)/2)
  while(first <=  last) {
    if(arr[middle] === target) return middle
    else if(arr[middle] < target) {
      first = middle + 1
    } else {
      last = middle - 1
    }
    middle = Math.round((last+first)/2)
  }
  return -1 
}

console.log(binarySearch([0,1,3,5,6], 5))