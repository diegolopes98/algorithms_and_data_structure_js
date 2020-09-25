function linearSearch(arr, searchTarget) {
  for(let i = 0; i < arr.length; i++ ) {
    if(arr[i] === searchTarget) return i
  }
  return -1
}