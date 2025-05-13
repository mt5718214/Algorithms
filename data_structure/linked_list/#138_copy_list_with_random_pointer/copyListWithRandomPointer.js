// Definition for a _Node.
function _Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

/**
 * @param {_Node} head
 * @return {_Node}
 */
// time complexity: O(n)
// space complexity: O(n)
var copyRandomList = function (head) {
  if (!head) return null;

  const map = new Map();

  let curr = head;
  // 創建所有新節點並放入 map
  while (curr) {
    map.set(curr, new _Node(curr.val));
    curr = curr.next;
  }

  // 設定 next 和 random 指標
  curr = head;
  while (curr) {
    const copy = map.get(curr);
    copy.next = curr.next ? map.get(curr.next) : null;
    copy.random = curr.random ? map.get(curr.random) : null;
    curr = curr.next;
  }

  return map.get(head);
};
