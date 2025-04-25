/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  // 因為沒辦法拿到前一個node, 所以做法會是把下一個node的值覆蓋掉當前node的值, 然後把下一個node移除掉
  node.val = node.next.val;
  node.next = node.next.next;
};
