class Node {
    constructor(value) {
        this.value = value;
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

    successor(value) {
        return BinarySearchTree.findSuccessorNode(this.root, null, value);
    }

    static findMinimumNode(node) {
        if (!node.left) return node;
        if (node.left) return findMinNode(node.left);
    }

    static findSuccessorNode(root, succ, value) {
        if(root === null) return root;

        if(root.value === value) {
            if (root.right) return BinarySearchTree.findMinimumNode(root.right);
        } else if (value < root.value ) {
            succ = root;
            return BinarySearchTree.findSuccessorNode(root.left, succ, value);
        } else if (value > root.value) {
            return BinarySearchTree.findSuccessorNode(root.right, succ, value)
        }

        return succ;
    }
}

const bst = new BinarySearchTree();
//              10
//      5               13
//  2       7       11      16

bst.insert(10)
bst.insert(5)
bst.insert(13)
bst.insert(11)
bst.insert(2)
bst.insert(16)
bst.insert(7)
bst.successor(7)
