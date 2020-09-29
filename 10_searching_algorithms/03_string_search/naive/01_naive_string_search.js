function searchString(str, pattern) {
  let count = 0
  for(let i = 0; i< str.length; i++){
    if(str[i] === pattern[0]) {
      let matches = true
      for(let j = 1; j < pattern.length; j++){
        if(str[j+i] !== pattern[j]) {
          matches = false
          break
        }
      }
      matches && count++ 
    }
  }
  return count
}

console.log(searchString("khakhahaha", "haha"))