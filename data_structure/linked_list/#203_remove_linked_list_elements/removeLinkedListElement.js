/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // 用遞迴的方式, 先走到最後一個node, 然後再回來
  // 走到最後一個node的時候, 下一個node是null, 這時候就回傳null
  // 如果當前node的值等於val, 就回傳下一個node, 如果不是, 就回傳當前node
  if (head === null) return null;
  head.next = removeElements(head.next, val);
  return head.val === val ? head.next : head;
};

var removeElements = function (head, val) {
  // 用迴圈的方式, 從頭開始遍歷
  // 先做一個假的node, 這樣可以避免刪除頭node的時候, 會沒有前一個node
  let dummy = new ListNode(0, head);
  let current = dummy;

  while (current.next != null) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return dummy.next;
};
