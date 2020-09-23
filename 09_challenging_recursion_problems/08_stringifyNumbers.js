function stringifyNumbers(obj) {
  let newObj = Array.isArray(obj) ? [] : {}
  for(let key in obj){
    if(typeof obj[key] === 'object') {
      newObj[key] = stringifyNumbers(obj[key])
    } else if (typeof obj[key] === 'number') {
      newObj[key] = `${obj[key]}`
    } else {
      newObj[key] = obj[key]
    }
  }
  return newObj
}

const objTest = {
  num: 1,
  test: [1, 'test', {}],
  data: {
      val: 4,
      info: {
          isRight: true,
          random: 66
      }
  }
}
console.log(stringifyNumbers(objTest))