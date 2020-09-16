// returns if the sorted arr contains a pair that average equals the target average in parameter
function averagePair(arr, average){
  if(arr.length < 2) return false
  let firstPointer = 0
  let lastPointer = arr.length-1
  while(lastPointer > firstPointer) {
    let currentAverage = (arr[firstPointer] + arr[lastPointer]) / 2
    if(currentAverage === average) return true
    else if (currentAverage > average) lastPointer--
    else firstPointer++
  }
  return false
}

console.log(averagePair([1,2,3], 2.5))