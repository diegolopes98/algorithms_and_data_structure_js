function capitalizeFirst(arr) {
  let newArr = []
  if(arr.length){
    newArr.push(arr[0][0].toUpperCase() + arr[0].substr(1))
  } else return newArr
  return newArr.concat(capitalizeFirst(arr.slice(1)))
}