class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    traverse() {
        let curr = this.head
        while(curr) {
            console.log(curr.val);
            curr = curr.next
        }
    }

    push(val) {
        const node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = this.head
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }

        this.length++;

        return this;
    }

    pop() {
        if(!this.head) return;
        let popped = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = popped.prev;
            this.tail.next = null;
            popped.prev = null;
        }
        this.length--;
        return popped;
    }
    
    shift() {
        if(!this.head) return

        const shifted = this.head;
        if(this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = shifted.next
            this.head.prev = null;
            shifted.next = null;
        }

        this.length--;
        return shifted;
    }

    unshift(val) {
        const node = new Node(val);
        if(!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }

        this.length++
        return this
    }

    get(idx) {
        if(idx < 0 || idx >= this.length) return null;

        const startFromHead = idx <= this.length/2;
        
        let curr;
        if(startFromHead) {
            curr = this.head;
            for(let c = 0; c <= idx; c++) {
                if (c == idx) return curr;
                curr = curr.next;
            }
        } else {
            curr = this.tail;
            for(let c = this.length - 1; c >= idx; c--) {
                if (c == idx) return curr;
                curr = curr.prev;
            }
        }
    }

    
    set(idx, val) {
        const node = this.get(idx)
        if(node) {
            node.val = val
            return true
        }

        return false
    }

    insert(val) {
        if(idx < 0 || idx > this.length) return false;
        
        if(idx === this.length) {
            return !!this.push(val);
        } 
        
        if(idx === 0) {
            return !!this.unshift(val);
        }

        const node = new Node(val);
        const prev = this.get(idx - 1);
        const next = prev.next;

        prev.next = node;
        node.prev = prev;

        next.prev = node;
        node.next = next;

        this.length++;

        return true;
    }

    remove(idx) {
        if(idx < 0 || idx >= this.length) return;
        if(idx === 0 ) return this.shift();
        if(idx === this.length - 1) return this.pop();

        const removed = this.get(idx);
        const prev = removed.prev;
        const next = removed.nex;
        
        prev.next = next;
        next.prev = prev;

        removed.prev = null;
        removed.next = null;

        this.length--;
        return removed;
    }
}

const list = new DoublyLinkedList();
console.log(list);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
console.log(list.get(3));
