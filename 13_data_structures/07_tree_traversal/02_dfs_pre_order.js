// Breadth First Search
const List = require('../02_singly_linked_lists/01_singly_linked_list');
const Stack = require('../04_stacks/01_stack');
const Queue = require('../05_queue/01_queue');
const BST = require('../06_binary_search_tree/01_bst');

function dfs_pre_order_traversal(tree) {
    const list = new List();
    if(!tree.root) return list;
    
    const traverse = (node) => {
        list.push(node.value);
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
    }

    traverse(tree.root);

    return list;
}

function tailrec_dfs_pre_order_traversal(tree) {
    if(!tree.root) return new List();
    
    const tr_traverse = (node, list = new List(), leftQueue = new Queue(), rightStack = new Stack()) => {
        list.push(node.value);

        if(node.left) leftQueue.enqueue(node.left);
        if(node.right) rightStack.push(node.right);
        
        if(leftQueue.size()) return tr_traverse(leftQueue.dequeue(), list, leftQueue, rightStack);
        if(!node.left && node.right) return tr_traverse(node.right, list, leftQueue, rightStack);
        if(rightStack.size()) return tr_traverse(rightStack.pop(), list, leftQueue, rightStack);

        return list;
    }

    return tr_traverse(tree.root);
}

const bst = new BST();
const values = [10, 5, 15, 2, 7, 12, 17];
values.forEach(value => bst.insert(value));

// bst now :
//                                  10
//                  5                                   15
//          2              7                    12              17

const list = dfs_pre_order_traversal(bst);
const trlist = tailrec_dfs_pre_order_traversal(bst);

console.log(list);
console.log(trlist);