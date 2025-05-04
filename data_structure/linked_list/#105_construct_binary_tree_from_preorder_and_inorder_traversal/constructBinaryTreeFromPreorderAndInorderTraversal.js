/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  /**
   * 解題核心
   * 1. preorder[0] 一定是整棵樹的根節點
   * 2. 在 inorder[] 中找到 preorder[0] 的位置, 這個位置的左邊就是左子樹, 右邊就是右子樹
   * 3. 根據左子樹大小，切割 preorder 來對應左右子樹的範圍
   */
  const indexMap = new Map();
  inorder.forEach((val, idx) => indexMap.set(val, idx));

  let preIndex = 0;
  function helper(left, right) {
    if (left > right) return null;

    // 對於preoder來說, 每個node都是根節點
    // 所以在inorder[]的indexMap中找到對應的index
    // 然後根據index來切割左右子樹
    const rootVal = preorder[preIndex++];
    const root = new TreeNode(rootVal);
    const index = indexMap.get(rootVal);

    root.left = helper(left, index - 1);
    root.right = helper(index + 1, right);

    return root;
  }

  return helper(0, inorder.length - 1);
};

buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
