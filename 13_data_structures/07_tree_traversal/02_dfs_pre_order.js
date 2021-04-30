// Breadth First Search
const List = require('../02_singly_linked_lists/01_singly_linked_list');
const Stack = require('../04_stacks/01_stack');
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
    
    const tr_traverse = (node, list = new List(), leftStack = new Stack(), rightStack = new Stack()) => {
        list.push(node.value);

        if(node.left) leftStack.push(node.left);
        if(node.right) rightStack.push(node.right);
        
        if(leftStack.size()) return tr_traverse(leftStack.pop(), list, leftStack, rightStack);
        if(rightStack.size()) return tr_traverse(rightStack.pop(), list, leftStack, rightStack);

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
//          2                                                  17
// expected: [10, 5, 2, 15, 17]

const list = dfs_pre_order_traversal(bst);
const trlist = tailrec_dfs_pre_order_traversal(bst);

console.log(list);
console.log(trlist);