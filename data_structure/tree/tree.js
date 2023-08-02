//           10
//          /   \
//         9     7
//       / | \   / \
//      8  5 11  1  3
//     /        / \
//    6        4   2

// Breadth-first 看每一層
// BFTT: 10, 9, 7, 8, 5, 11, 1, 3, 6, 4, 2

// depth-first
/**
 * PreOrder
 * root->left->right
 * 10, 9, 8, 6, 5, 11, 7, 1, 4, 2, 3
 */

/**
 * InOrder
 * left->root->right
 * 6, 8, 9, 5, 11, 10, 4, 1, 2, 7, 3
 */

/**
 * PostOrder
 * left->right->root
 * 6, 8, 5, 11, 9, 4, 2, 1, 3, 7, 10
 */