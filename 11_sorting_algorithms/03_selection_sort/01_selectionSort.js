function selectionSort(arrToSort) {
    let arr = [...arrToSort]

    const swap = (arrToSwap, idx1, idx2) => {
        const myArr = [...arrToSwap]
        const temp = myArr[idx1]
        myArr[idx1] = myArr[idx2]
        myArr[idx2] = temp
        return myArr
    }

    for(let i = 0; i < arr.length; i++) {
        let minIdx = i
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[minIdx]) minIdx = j
        }
        if(minIdx !== i) arr = swap(arr, minIdx, i)
    }

    return arr
}

console.log(selectionSort([0,10, -3,100,-1,5,90,9]))