function flatten(arr){
  let newArray = []
  function flattenHelper(helperArr) {
    if(!helperArr.length) return
    if(Array.isArray(helperArr[0])) flattenHelper(helperArr[0])
    else newArray.push(helperArr[0])
    flattenHelper(helperArr.slice(1))
  }
  flattenHelper(arr)
  return newArray
}

console.log(flatten([1, 2, 3, [4, 5] ]))