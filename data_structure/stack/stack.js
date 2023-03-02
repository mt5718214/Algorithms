// stack 只是一個概念 (LIFO: last in first out), 所以用linked list 或 array來實作都可以。
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) {
      return null;
    } else if (this.length === 1) {
      let lastNode = this.head;
      this.head = null;
      this.length--;
      return lastNode;
    } else {
      let currentNode = this.head;
      for (let i = 1; i <= this.length - 2; i++) {
        currentNode = currentNode.next;
      }
      let lastNode = currentNode.next;
      currentNode.next = null;
      this.length--;
      return lastNode;
    }
  }

  // get(index) {
  //   if (index > this.length - 1 || index < 0) {
  //     return;
  //   }
  //   let currentNode = this.head;
  //   for(let i = 0; i < index; i++) {
  //     currentNode = currentNode.next;
  //   }

  //   return currentNode;
  // }

  printAll() {
    if (this.length === 0) {
      console.log("Nothing in the stack.");
      return;
    }

    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

const myStack = new Stack();
myStack.push("Mike");
myStack.push("Neil");
myStack.pop();
myStack.push("Albert");
myStack.printAll();
