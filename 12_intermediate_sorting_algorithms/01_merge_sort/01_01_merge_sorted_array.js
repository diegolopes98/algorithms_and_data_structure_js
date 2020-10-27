function merge(arr1, arr2) {
    let mergedArr = []
    let i = 0, j = 0
    
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i])
            i++
        } else {
            mergedArr.push(arr2[j])
            j++
        }
    }

    if(i == arr1.length) {
        mergedArr = mergedArr.concat(arr2.slice(j, arr2.length))
    } 
    
    if (j == arr2.length) {
        mergedArr = mergedArr.concat(arr1.slice(i, arr1.length))
    }

    return mergedArr
}

console.log(merge([1, 10, 50], [2, 14, 99, 100]))