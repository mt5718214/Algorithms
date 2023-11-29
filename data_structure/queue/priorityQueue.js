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
}

const pq = new PriorityQueue();
pq.enqueue("learn golang", 10);
pq.enqueue("sleep", 100);
pq.enqueue("eat", 1);
pq.enqueue("learn javascript", 7);

console.log(pq);
