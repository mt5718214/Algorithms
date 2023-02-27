class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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

  shift() {
    if (!this.head) {
      return null;
    } else if (this.length === 1) {
      let lastNode = this.head;
      this.head = null;
      this.length--;
      return lastNode;
    } else {
      let lastNode = this.head;
      let temp = this.head.next;
      this.head.next = null;
      this.head = temp;
      this.length--;
      return lastNode;
    }
  }

  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      this.head = newNode;
      this.head.next = currentNode;
    }
    this.length++;
  }

  insertAt(index, value) {
    if (index > this.length || index < 0) {
      return;
    } else if (index === this.length) {
      this.push(value);
      return;
    } else if (index === 0) {
      this.unshift(value);
      return;
    }

    let currentNode = this.head;
    let newNode = new Node(value);
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
    return;
  }

  removeAt(index) {
    if(index > this.length - 1 || index < 0) {
      return;
    } else if(index === this.length - 1) {
      this.pop();
      return;
    } else if(index === 0) {
      this.shift()
      return;
    }

    let currentNode = this.head;
    for(let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }

    currentNode.next = currentNode.next.next;
    this.length--;
    return;
  }

  get(index) {
    if (index > this.length - 1 || index < 0) {
      return;
    }
    let currentNode = this.head;
    for(let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  printAll() {
    if (this.length === 0) {
      console.log("Nothing in the linked list.");
      return;
    }

    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

const myLinkedList = new LinkedList();
myLinkedList.push("Mike");
myLinkedList.push("Harry");
myLinkedList.push("James");
myLinkedList.push("Kemp");
myLinkedList.printAll();

console.log("pop node: ", myLinkedList.pop());
console.log("shift node: ", myLinkedList.shift());

console.log("===unshift===");
myLinkedList.unshift("albert");
myLinkedList.printAll();

console.log("===insertAt===");
myLinkedList.insertAt(2, "Miley");
myLinkedList.printAll();

console.log("===removeAt===");
myLinkedList.removeAt(2);
myLinkedList.printAll();

console.log("===get===");
console.log("index 0", myLinkedList.get(0).value);
console.log("index 1", myLinkedList.get(1).value);
console.log("index 2", myLinkedList.get(2).value);