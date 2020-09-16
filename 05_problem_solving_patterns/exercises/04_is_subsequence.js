// check if the first string is a subsequence of the second (even with other char in the middle of each char of the first str)
function isSubsequence(str1, str2) {
  if(!str1 || str1.length > str2.length) return false
  let str1pos = 0, str2pos = 0
  while(str2pos < str2.length) {
    if(str1[str1pos] === str2[str2pos]) {
      str1pos++
    }
    if(str1pos > str1.length-1) return true
    
    str2pos++
  }
  return false
}

console.log(isSubsequence('sing', 'sting'))