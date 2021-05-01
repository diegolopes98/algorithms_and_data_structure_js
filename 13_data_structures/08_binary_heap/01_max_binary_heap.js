class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);

        const bubbleUp = (arr, currIdx = arr.length - 1) => {
            const parentIdx = Math.floor((currIdx - 1) / 2);
            if (arr[currIdx] > arr[parentIdx]) {
                const tmp = arr[parentIdx];
                arr[parentIdx] = arr[currIdx];
                arr[currIdx] = tmp;
                return bubbleUp(arr, parentIdx);
            }
        }

        bubbleUp(this.values);

        return this;
    }

    extractMax() {
        if (!this.values.length) return null;
        if (this.values.length === 1) return this.values.pop();

        const max = this.values[0];
        const last = this.values.pop();
        this.values[0] = last;

        const bubbleDown = (arr, currIdx = 0) => {
            if (!arr.length) return;

            const leftChildIdx = 2 * currIdx + 1;
            const rightChildIdx = 2 * currIdx + 2;

            const curr = arr[currIdx];
            const left = arr[leftChildIdx];
            const right = arr[rightChildIdx];

            if ((left && curr < left  ) || (right && curr < right)) {
                if (left >= right) {
                    arr[currIdx] = left;
                    arr[leftChildIdx] = curr;
                    return bubbleDown(arr, leftChildIdx);
                } else {
                    arr[currIdx] = right;
                    arr[rightChildIdx] = curr;
                    return bubbleDown(arr, rightChildIdx);
                }
            }

        }

        bubbleDown(this.values);

        return max;
    }
}

const maxHeap = new MaxBinaryHeap();

const values = [1, 3, 6, 5, 9, 8];
values.forEach(value => maxHeap.insert(value));

console.log(maxHeap.values);

console.log(maxHeap.extractMax());
console.log(maxHeap.values);

console.log(maxHeap.extractMax());
console.log(maxHeap.values);
