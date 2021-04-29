// Breadth First Search
const Queue = require('../05_queue/01_queue');
const List = require('../02_singly_linked_lists/01_singly_linked_list');
const BST = require('../06_binary_search_tree/01_bst');

function BFS_traversal(tree) {
    const q = new Queue();
    const list = new List();

    if(!tree.root) return list;

    q.enqueue(tree.root);

    while(q.size()) {
        const node = q.dequeue();
        list.push(node.value);
        if(node.left) q.enqueue(node.left);
        if(node.right) q.enqueue(node.right);
    }

    return list;
}

const bst = new BST();
const values = [10, 5, 15, 2, 7, 12, 17, 1, 3, 6, 8, 11, 13, 16, 18];
values.forEach(value => bst.insert(value));

// bst now :
//                                  10
//                  5                                   15
//          2              7                    12              17
//      1       3      6        8          11       13      16      18

const list = BFS_traversal(bst);

console.log(list);