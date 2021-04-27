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
        const node = new Node(val)
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

    unshift(val) {
        const node = new Node(val)
        if(!this.head) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }

        this.length++
        return this
    }

    get(idx) {
        if(idx < 0 || idx >= this.length) return null

        let curr = this.head
        for(let c = 0; c <= idx; c++) {
            if (c == idx) return curr
            curr = curr.next
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

    insert(idx, val) {
        if(idx < 0 || idx > this.length) return false
        
        if(idx === this.length) {
            return !!this.push(val)
        } 
        
        if(idx === 0) {
            return !!this.unshift(val)
        }
    
        const node = new Node(val)
        const pre = this.get(idx - 1)
        node.next = pre.next
        pre.next = node
        this.length++
        
        return true
    }
}

const list = new SinglyLinkedList();

list.push('diego')
list.push('lopes')
list.insert(2, 'test')
list.traverse()
console.log(list.length)

