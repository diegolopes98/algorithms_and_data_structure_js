/*
 * Returns True if is an anagram (same number of letters)
 * @param String str1
 * @param String str2
*/
function isAnagram(str1, str2) {
  if(str1.length !== str2.length) return false
  const charsFrequency1 = countChars(str1)
  const charsFrequency2 = countChars(str2)
  return checkFrequencies(charsFrequency1, charsFrequency2)
}

/*
 * Returns an obj with the keys as the str chars, and the values of str char frequency
 * @param String str
*/
function countChars(str){
  const frequencyObj = {}
  for(let char of str) {
    if(frequencyObj.hasOwnProperty(char)) frequencyObj[char]+=1
    else frequencyObj[char] = 1
  }
  return frequencyObj
}

/*
 * Returns true if the frequency of the chars in frequencyObj1 is equal frequencyObj2
 * @param Object frequencyObj1 key: char, value: number
 * @param Object frequencyObj2 key: char, value: number
*/
function checkFrequencies(frequencyObj1, frequencyObj2) {
  for(let key1 in frequencyObj1) {
    if(!frequencyObj2.hasOwnProperty(key1)) return false
    if(frequencyObj1[key1] !== frequencyObj2[key1]) return false
  }
  return true
}

console.log(isAnagram('azz', 'zaa'))