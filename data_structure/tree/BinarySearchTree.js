class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class BinartSearchTree {
  constructor() {
    this.root = null
  }

  treeInsert(z) {
    let y = null
    let x = this.root

    while(x !== null) {
      // 先把x節點指給y, 因為while迴圈結束代表x為null, 所以我們需要一個變數來記錄前一個位置的node
      y = x

      if(z.key < x.key) {
        x = x.left
      } else {
        x = x.right
      }
    }

    if(y == null) { // y會是null, 只有root是null也就是tree完全沒有node的情況
      this.root = z
    } else if(z.key < y.key) {
      y.left = z
    } else {
      y.right = z
    }
  }
}

let bst = new BinartSearchTree()
bst.treeInsert(new Node(8))
bst.treeInsert(new Node(18))
bst.treeInsert(new Node(-8))
bst.treeInsert(new Node(3))
bst.treeInsert(new Node(9))
bst.treeInsert(new Node(1))
bst.treeInsert(new Node(13))

console.log(bst);