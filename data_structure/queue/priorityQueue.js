class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    if (this.values.length === 0) {
      this.values.push(new Node(value, priority));
      return true;
    }

    this.values.push(new Node(value, priority));
    let newIndex = this.values.length - 1;
    let parentIndex = Math.floor((newIndex - 1) / 2);
    while (
      parentIndex >= 0 &&
      this.values[newIndex].priority > this.values[parentIndex].priority
    ) {
      // swap parent and child nodes
      let temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[newIndex];
      this.values[newIndex] = temp;

      // update index
      newIndex = parentIndex;
      parentIndex = Math.floor((newIndex - 1) / 2);
    }
  }

  dequeue() {
    if (this.values.length === 0) return null;
    if (this.values.length === 1) return this.values.pop();
    // swap first & last node, and remove last node
    let temp = this.values.pop();
    this.values.push(this.values[0]);
    this.values[0] = temp;
    let removeNode = this.values.pop();
    // 將queue重新整理成新的max heap
    this.maxHeapify(0);

    return removeNode;
  }

  maxHeapify(index) {
    let largest;
    let l = index * 2 + 1;
    let r = index * 2 + 2;
    if (
      l < this.values.length &&
      this.values[l].priority > this.values[index].priority
    ) {
      largest = l;
    } else {
      largest = index;
    }

    if (
      r < this.values.length &&
      this.values[r].priority > this.values[largest].priority
    ) {
      largest = r;
    }

    if (largest !== index) {
      // swap
      let temp = this.values[index];
      this.values[index] = this.values[largest];
      this.values[largest] = temp;
      this.maxHeapify(largest);
    }
  }
}

const pq = new PriorityQueue();
pq.enqueue("learn golang", 10);
pq.enqueue("sleep", 100);
pq.enqueue("eat", 1);
pq.enqueue("learn javascript", 7);
pq.enqueue("learn javascript", 17);
pq.enqueue("learn javascript", 28);
console.log("enqueue", pq);

let removeNode = pq.dequeue();
console.log("dequeue", pq);
console.log("removeNode", removeNode);
removeNode = pq.dequeue();
console.log("dequeue", pq);
console.log("removeNode", removeNode);
removeNode = pq.dequeue();
console.log("dequeue", pq);
console.log("removeNode", removeNode);
