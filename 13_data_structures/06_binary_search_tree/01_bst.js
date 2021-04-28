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

        return insertHelper(newNode, this.root);

    }

    find(value) {
        if (!this.root) return null;

        const findHelper = (val, root) => {
            if (root.value < val) {
                if (root.right) {
                    return findHelper(val, root.right);
                }

                return root.right;

            } else if (root.value > val) {
                if (root.left) {
                    return findHelper(val, root.left);
                }

                return root.left;

            } else if (val === root.value) {
                return root;
            }

            return null;
        }

        return findHelper(value, this.root);

    }

    contains(value) {
        if (!this.root) return false;

        const containsHelper = (val, root) => {
            if (root.value < val) {
                if (root.right) {
                    return containsHelper(val, root.right);
                }

                return false;

            } else if (root.value > val) {
                if (root.left) {
                    return containsHelper(val, root.left);
                }

                return false;

            } else if (val === root.value) {
                return true;
            }

            return false;
        }

        return containsHelper(value, this.root);

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
console.log(bst.find(2))
console.log(bst.contains(2))

console.log(bst.find(20))
console.log(bst.contains(20))