function insertionSort(arrToSort) {
    let arr = [...arrToSort]

    for(let i = 1; i < arr.length; i++) {
        let idxInsert;
        let shouldInsert = false;

        for(j = i - 1; j >= 0; j--) {
            if(arr[i] < arr[j]) {
                shouldInsert = true
                idxInsert = j
            }
        }
        
        if(shouldInsert) {
            const item = arr.splice(i, 1)[0]
            arr.splice(idxInsert, 0, item)
        }
    }

    return arr
}

console.log(insertionSort([0,10,3,-1,20]))