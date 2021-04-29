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

    remove(value) {
        return BinarySearchTree.removeNode(this.root, value);
    }

    successor(value) {
        return BinarySearchTree.findSuccessorNode(this.root, null, value);
    }

    predecessor(value) {
        return BinarySearchTree.findPredecessorNode(this.root, null, value);
    }

    static removeNode(root, value) {
        if (!root) return null;

        if (value < root.value) {
            root.left = BinarySearchTree.removeNode(root.left, value);
        } else if (value > root.value) {
            root.right = BinarySearchTree.removeNode(root.right, value);
        } else {
            if(root.left && root.right) {
                const rightMinNode = BinarySearchTree.findMinimumNode(root.right);
                root.value = rightMinNode.value;
                root.right = BinarySearchTree.removeNode(root.right, root.value);
            } else if(root.left) {
                root = root.left;
            } else if(root.right) {
                root = root.right;
            } else {
                root = null;
            }
        }
        return root;
    }

    static findMinimumNode(node) {
        if (!node.left) return node;
        if (node.left) return BinarySearchTree.findMinimumNode(node.left);
    }

    static findMaximumNode(node) {
        if (!node.right) return node;
        if (node.right) return BinarySearchTree.findMaximumNode(node.right);
    }

    static findPredecessorNode(root, pred, value) {
        if(root === null) return root;

        if(root.value === value) {
            if (root.left) return BinarySearchTree.findMaximumNode(root.left);
        } else if (value > root.value ) {
            pred = root;
            return BinarySearchTree.findPredecessorNode(root.right, pred, value);
        } else if (value < root.value) {
            return BinarySearchTree.findPredecessorNode(root.left, pred, value)
        }

        return pred;
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

module.exports = BinarySearchTree;

const bst = new BinarySearchTree();
const values = [10, 5, 15, 2, 7, 12, 17, 1, 3, 6, 8, 11, 13, 16, 18];
values.forEach(value => bst.insert(value));

// bst now :
//                                  10
//                  5                                   15
//          2              7                    12              17
//      1       3      6        8          11       13      16      18
bst.remove(10);
// bst now :
//                                  11
//                  5                                   15
//          2              7                    12              17
//      1       3      6        8                   13      16      18
bst.remove(12);
// bst now :
//                                  11
//                  5                                   15
//          2              7                    13              17
//      1       3      6        8                           16      18
console.log(bst);
