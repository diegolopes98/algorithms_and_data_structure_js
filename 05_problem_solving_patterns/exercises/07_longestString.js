function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      // seta o inicio da substring
      start = Math.max(start, seen[char]);
    }
    // calcula o tamanho da substring ate agora fazendo a diferenca do index atual e o inicio e depois somando 1 porque arr pos inicia em zero
    longest = Math.max(longest, i - start + 1);
    // seta o index do prox start do caracter atual
    seen[char] = i + 1;
  }
  return longest;
}

console.log("rithmschool:", findLongestSubstring('rithmschool'))
console.log("thisisawesome:", findLongestSubstring('thisisawesome'))
console.log("thecatinthehat:", findLongestSubstring('thecatinthehat'))
console.log("bbbbbbbb:", findLongestSubstring('bbbbbbbb'))
console.log("longestsubstring:", findLongestSubstring('longestsubstring'))
console.log("thisishowwedoit:", findLongestSubstring('thisishowwedoit'))