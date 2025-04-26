/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function (head) {
  let curr = head;
  let stack = []; // 存遍利過的node

  while (curr != null) {
    // 檢查當前node的值是否比stack裡面的node的值大, 大的話就pop掉, 一直到stack裡面的node的值比當前node的值大
    // 然後再把當前node放進stack裡面
    while (stack.length > 0 && stack[stack.length - 1].val < curr.val) {
      stack.pop();
    }
    stack.push(curr);
    curr = curr.next;
  }

  // 把stack的node都串起來就是最終答案, 但這邊要從尾巴開始串, 所以先宣告一個變數為null
  let node = null;
  while (stack.length != 0) {
    cur = stack.pop();
    cur.next = node;
    node = cur;
  }

  return node;
};

var removeNodes = function (head) {
  if (!head) {
    return null;
  }

  let node = head;
  let nextNode = removeNodes(head.next);

  // 先把當前node的next指向下一個node, 然後再檢查下一個node的值是否比當前node的值大, 如果是的話就回傳下一個node, 這樣就等於把當前node刪掉了
  node.next = nextNode;
  if (nextNode && nextNode.val > node.val) {
    return nextNode;
  }
  // 如果下一個node的值不比當前node的值大, 就回傳當前node
  // 這樣就等於把當前node保留了
  return node;
};
