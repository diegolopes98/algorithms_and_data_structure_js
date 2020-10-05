function bubbleSort(arr) {

    const swap = (arr, idx1, idx2) => {
        const myArr = [...arr]
        const temp = myArr[idx1]
        myArr[idx1] = myArr[idx2]
        myArr[idx2] = temp
        return myArr
    }

    let myArr = [...arr]
    for(let i = myArr.length; i > 0; i--) {
        for(let j = 0; j < i - 1; j++) {
            console.log(myArr, myArr[j], myArr[j+1])
            if(myArr[j] > myArr[j+1]) myArr = swap(myArr, j, j+1)
        }
    }

    return myArr
}

console.log(bubbleSort([2,4,1,3,5,0]))