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


const bst = new BST();
const values = [10, 5, 15, 2, 7, 12, 17];
values.forEach(value => bst.insert(value));

// bst now :
//                                  10
//                  5                                   15
//          2              7                    12              17

//expected return:
// [ 2, 5, 7, 10, 12, 15, 17]

const list = dfs_in_order_traversal(bst);

console.log(list);