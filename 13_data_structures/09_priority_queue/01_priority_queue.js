class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor () {
        this.values = [];
    }

    enqueue(value, priority) {
        const node = new Node(value, priority);
        this.values.push(node);

        const bubbleUp = (arr, currIdx = arr.length - 1) => {
            const parentIdx = Math.floor((currIdx - 1) / 2);
            if (arr[parentIdx] !== undefined && arr[currIdx].priority <= arr[parentIdx].priority) {
                const tmp = arr[parentIdx];
                arr[parentIdx] = arr[currIdx];
                arr[currIdx] = tmp;
                return bubbleUp(arr, parentIdx);
            }
        }

        bubbleUp(this.values);

        return this;
    }

    
    dequeue() {
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

            if ((right !== undefined && curr.priority > left.priority) || (right && curr.priority > right.priority)) {
                if (
                    right !== undefined
                    && left !== undefined
                    && right.priority >= left.priority
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

const pq = new PriorityQueue();

pq.enqueue("fever", 2);
pq.enqueue("shot", 0);
pq.enqueue("broken bone", 1);

console.log(pq.values);
console.log(pq.dequeue());
console.log(pq.values);
