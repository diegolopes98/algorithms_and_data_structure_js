// returns the biggest sub of a subarray from the array with length as parameter
function maxSubarraySum(arr, subArrLen){
  if(arr.length < subArrLen) return null
  let maxSum = 0, tempSum = 0
  for(let i = 0; i < subArrLen; i++) {
    maxSum += arr[i]
  }
  tempSum = maxSum
  for(let i = subArrLen; i < arr.length; i++) {
    tempSum = tempSum - arr[i - subArrLen] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}