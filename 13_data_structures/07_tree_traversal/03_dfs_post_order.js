// Breadth First Search
const List = require('../02_singly_linked_lists/01_singly_linked_list');
const BST = require('../06_binary_search_tree/01_bst');

function dfs_post_order_traversal(tree) {
    const list = new List();
    if(!tree.root) return list;
    
    const traverse = (node) => {
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
        list.push(node.value);
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

const list = dfs_post_order_traversal(bst);

console.log(list);