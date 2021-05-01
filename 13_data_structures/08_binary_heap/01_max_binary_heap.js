class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);

        const bubbleUp = (arr, currIdx = arr.length - 1) => {
            const parentIdx = Math.floor((currIdx - 1)/2);
            if(arr[currIdx] > arr[parentIdx]) {
                const tmp = arr[parentIdx];
                arr[parentIdx] = arr[currIdx];
                arr[currIdx] = tmp;
                return bubbleUp(arr, parentIdx);
            }
        }

        bubbleUp(this.values);

        return this;
    }
}

const maxHeap = new MaxBinaryHeap();

maxHeap.insert(41);
maxHeap.insert(39);
maxHeap.insert(33);
maxHeap.insert(18);
maxHeap.insert(27);
maxHeap.insert(12);
maxHeap.insert(55);

console.log(maxHeap.values);
