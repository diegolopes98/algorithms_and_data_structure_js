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

    remove(idx) {
        if(idx < 0 || idx >= this.length) return
        if(idx === 0 ) return this.shift()
        if(idx === this.length - 1) return this.pop()

        const prev = this.get(idx - 1)
        const removed = prev.next
        prev.next = removed.next

        this.length--
        return removed
    }

    reverse() {
        let curr = this.head
        this.head = this.tail
        this.tail = curr

        let next;
        let prev = null;
        for(let i = 0; i < this.length; i++) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        
        return this;
    }
}

module.exports = SinglyLinkedList;

// const list = new SinglyLinkedList();

// list.push('diego')
// list.push('pereira')
// list.push('lopes')
// list.reverse()
// list.traverse()

