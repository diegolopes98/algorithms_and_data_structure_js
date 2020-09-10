function countUniqueValues(arr){
    if(arr.length === 0) return 0
    let count = 0, prev = 0
    for(let current = 0; current < arr.length; current++) {
        if(current === 0) {
            count +=1
        } else {
            if(arr[current] !== arr[prev]) count+=1
            prev++
        }
    }
    return count
}