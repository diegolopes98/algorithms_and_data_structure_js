class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    // similar to push from linked lists
    enqueue(val) {
        const node = new Node(val);
        if(!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        
        return ++this.length;
    }

    // similar to shift from linked lists
    dequeue() {
        if(!this.first) return null;
        const dequeued = this.first;
        if(this.first === this.last) this.last = null;
        this.first = dequeued.next;
        this.length--;
        return dequeued.val;
    }

    size() {
        return this.length;
    }
}