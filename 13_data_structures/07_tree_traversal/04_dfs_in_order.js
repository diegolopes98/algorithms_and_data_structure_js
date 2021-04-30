// Breadth First Search
const List = require('../02_singly_linked_lists/01_singly_linked_list');
const BST = require('../06_binary_search_tree/01_bst');
const Stack = require('../04_stacks/01_stack');

function dfs_in_order_traversal(tree) {
    const list = new List();
    if (!tree.root) return list;

    const traverse = (node) => {
        if (node.left) traverse(node.left);
        list.push(node.value);
        if (node.right) traverse(node.right);
    }

    traverse(tree.root);

    return list;
}

function tailrec_dfs_in_order_traversal(tree) {
    if (!tree.root) return new List();

    const tr_traverse = (
        node,
        list = new List(),
        leftStack = new Stack(),
        rightStack = new Stack(),
        parentStack = new Stack(),
        processedFlag = {},
    ) => {
        parentStack.push(node);

        if (
            node.left
            && !processedFlag[node.left.value]
        ) {
            leftStack.push(node.left);
        }

        if (
            node.right
            && (
                (node.left && !processedFlag[node.left.value])
                || (node.right && !processedFlag[node.right.value])
            )
        ) {
            rightStack.push(node.right);
        }

        if (
            (!node.left && !node.right)
            || !node.left
            || (processedFlag[node.left.value])
        ) {
            const current = parentStack.pop();
            list.push(current.value);
            processedFlag[current.value] = true;

            if (current.right && rightStack.size()) {
                const right = rightStack.pop()
                if (right.value === current.right.value) return tr_traverse(right, list, leftStack, rightStack, parentStack, processedFlag);
                right.push(right);
            }

            if (parentStack.size()) return tr_traverse(parentStack.pop(), list, leftStack, rightStack, parentStack, processedFlag);
        }

        if (leftStack.size()) return tr_traverse(leftStack.pop(), list, leftStack, rightStack, parentStack, processedFlag);

        return list;
    }

    return tr_traverse(tree.root);
}


const bst = new BST();
const values = [10, 5, 15, 2, 17];
values.forEach(value => bst.insert(value));

// bst now :
//                                  10
//                  5                                   15
//          2                                               17

//expected return:
// [ 2, 5, 10, 15, 17]

const list = dfs_in_order_traversal(bst);
const trlist = tailrec_dfs_in_order_traversal(bst);

console.log(list);
console.log(trlist);