// queue (FIFO: first in first out)
// Enqueue: add something to the queue
// Dequeue: remove something from the queue

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    const removeNode = this.first;
    this.first = removeNode.next;
    this.length--;

    return removeNode.value;
  }

  isEmpty() {
    return this.length === 0;
  }

  getSize() {
    return this.length;
  }

  getFront() {
    if (this.isEmpty()) {
      console.log("queue is empty");
      return null;
    }
    return this.first.value;
  }

  getBack() {
    if (this.isEmpty()) {
      console.log("queue is empty");
      return null;
    }
    return this.last.value;
  }

  printAll() {
    if (this.length === 0) {
      console.log("Nothing in the queue.");
      return;
    }

    let currentNode = this.first;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

const myQueue = new Queue();

myQueue.push("kemp");
myQueue.push("albert");
myQueue.push("neil");
myQueue.printAll();

console.log("pop one: ", myQueue.pop());
myQueue.getFront();
myQueue.getBack();
