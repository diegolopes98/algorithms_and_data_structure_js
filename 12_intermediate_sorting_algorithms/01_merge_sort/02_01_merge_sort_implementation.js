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

function mergeSort(arr) {
    if(arr.length < 2) return arr
    let mid = Math.floor(arr.length/2);
    let arr1 = arr.slice(0, mid)
    let arr2 = arr.slice(mid)
    return merge(mergeSort(arr1), mergeSort(arr2))
}

console.log(mergeSort([10, 50, 2, -1 , 1, 0]))