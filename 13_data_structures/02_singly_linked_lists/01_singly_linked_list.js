class Node {
    constructor (val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor () {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node
            this.tail = this.head
        } else {
            this.tail.next = node
            this.tail = node
        }

        this.length++;

        return this;
    }

    traverse() {
        let curr = this.head
        while(curr) {
            console.log(curr.val);
            curr = curr.next
        }
    }

    pop() {
        if(!this.length) return

        let curr = this.head
        let prev = null

        while(curr.next) {
            prev = curr
            curr = curr.next
        }

        prev.next = null
        this.tail = prev
        this.length--

        if(this.length === 0) {
            this.head = null
            this.tail = null
        }

        return curr;
    }

    shift() {
        if(!this.head) return

        const shifted = this.head
        this.head = shifted.next
        this.length--

        if(this.length === 0) {
            this.head = null
            this.tail = null
        }
        
        return shifted;
    }
}

const list = new SinglyLinkedList();

list.push(1)
list.push(2)
list.push(3)

list.traverse()
const node = list.shift()
console.log('shifted', node.val)
list.traverse()
