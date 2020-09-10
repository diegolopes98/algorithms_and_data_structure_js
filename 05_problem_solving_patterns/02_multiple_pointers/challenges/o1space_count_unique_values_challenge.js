function countUniqueValues(constArr){
    if(!constArr.length) return 0
    let arr = [...constArr] //to dont change the array out of scope
    let i = 0, j = 0
    while(j < arr.length) {
        if(arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
        j++
    }
    return i + 1
}

console.log(countUniqueValues([1,2,2,2,3,4,4,4,5,99]))
