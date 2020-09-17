//retornar o menor indice de subarray necessario para uma soma entre eles bater o sumTarget
function minSubArrayLen(arr, sumTarget){
  let start = 0, end = 0, total = 0, minLen = Infinity;
  while(start < arr.length) {
    //cria uma janela com uma soma batendo o sum target
    if(total < sumTarget && end < arr.length) {
      total+= arr[end]
      end++
    } else if (total >= sumTarget ) {
      // quando tiver a maior janela set o minLen com ela e vai diminuindo a janela enquanto a soma bater
      minLen = Math.min(minLen, end - start)
      total -= arr[start]
      start++
    } else break; //para previnir loop infinito caso nao tenha subarray
  }

  return minLen === Infinity ? 0 : minLen;
}
