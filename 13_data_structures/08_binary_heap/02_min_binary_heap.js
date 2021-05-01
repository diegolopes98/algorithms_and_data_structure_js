class MinBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);

        const bubbleUp = (arr, currIdx = arr.length - 1) => {
            const parentIdx = Math.floor((currIdx - 1) / 2);
            if (arr[currIdx] < arr[parentIdx] && arr[parentIdx] !== undefined) {
                const tmp = arr[parentIdx];
                arr[parentIdx] = arr[currIdx];
                arr[currIdx] = tmp;
                return bubbleUp(arr, parentIdx);
            }
        }

        bubbleUp(this.values);

        return this;
    }

    extractMin() {
        if (!this.values.length) return null;
        if (this.values.length === 1) return this.values.pop();

        const min = this.values[0];
        const last = this.values.pop();
        this.values[0] = last;

        const bubbleDown = (arr, currIdx = 0) => {
            if (!arr.length) return;

            const leftChildIdx = 2 * currIdx + 1;
            const rightChildIdx = 2 * currIdx + 2;

            const curr = arr[currIdx];
            const left = arr[leftChildIdx];
            const right = arr[rightChildIdx];

            if ((left !== undefined && curr > left) || (right !== undefined && curr > right)) {
                if (
                    right !== undefined
                    && left !== undefined
                    && right >= left
                ) {
                    arr[currIdx] = left;
                    arr[leftChildIdx] = curr;
                    return bubbleDown(arr, leftChildIdx);
                } else if (right !== undefined) {
                    arr[currIdx] = right;
                    arr[rightChildIdx] = curr;
                    return bubbleDown(arr, rightChildIdx);
                }
            }

        }

        bubbleDown(this.values);

        return min;
    }
}

const minHeap = new MinBinaryHeap();

const values = [8, 9, 5, 6, 3, 1];
values.forEach(value => minHeap.insert(value));

console.log(minHeap.values);

console.log(minHeap.extractMin());
console.log(minHeap.values);

console.log(minHeap.extractMin());
console.log(minHeap.values);
