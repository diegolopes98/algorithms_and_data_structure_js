class Node {
    constructor(value) {
        this.value = value
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        const insertHelper = (node, root) => {
            if (root.value < node.value) {
                if (root.right) {
                    return insertHelper(node, root.right);
                }

                root.right = node;
                return this; 

            } else if (root.value > node.value) {
                if (root.left) {
                    return insertHelper(node, root.left);
                }

                root.left = node;
                return this;

            }
        }

        return insertHelper(newNode, this.root)

    }
}

const bst = new BinarySearchTree();
bst.insert(10)
bst.insert(5)
bst.insert(13)
bst.insert(11)
bst.insert(2)
bst.insert(16)
bst.insert(7)
console.log(bst)