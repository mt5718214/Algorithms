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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const indexMap = new Map();
  inorder.forEach((val, idx) => indexMap.set(val, idx));

  let postIndex = postorder.length - 1;
  function helper(left, right) {
    if (left > right) return null;

    const rootVal = postorder[postIndex--];
    const root = new TreeNode(rootVal);
    const idx = indexMap.get(rootVal);

    // 重要：先建右子樹再建左子樹（因為 postorder 是 左 → 右 → 根）
    root.right = helper(idx + 1, right);
    root.left = helper(left, idx - 1);

    return root;
  }

  return helper(0, inorder.length - 1);
};
