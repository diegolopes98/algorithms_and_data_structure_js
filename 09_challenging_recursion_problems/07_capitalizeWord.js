function capitalizeWords (arr) {
  let newArr = []
  if(arr.length){
    newArr.push(arr[0].toUpperCase())
  } else return newArr
  return newArr.concat(capitalizeWords(arr.slice(1)))
}