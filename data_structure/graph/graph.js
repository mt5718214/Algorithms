// 宣告node的class
class Node {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
    this.visited = false;
  }

  addNeighbor(node) {
    this.neighbors.push(node);
  }
}

// 建立node
const nodeA = new Node("A");
const nodeB = new Node("B");
const nodeC = new Node("C");
const nodeD = new Node("D");
const nodeE = new Node("E");
const nodeF = new Node("F");
const nodeG = new Node("G");
const nodeH = new Node("H");
const nodeI = new Node("I");
const nodeJ = new Node("J");
const nodeK = new Node("K");
const nodeL = new Node("L");
const nodeM = new Node("M");
// 建立graph的關係
nodeA.addNeighbor(nodeE);
nodeA.addNeighbor(nodeF);
nodeB.addNeighbor(nodeD);
nodeC.addNeighbor(nodeD);
nodeD.addNeighbor(nodeB);
nodeD.addNeighbor(nodeC);
nodeD.addNeighbor(nodeE);
nodeD.addNeighbor(nodeI);
nodeE.addNeighbor(nodeA);
nodeE.addNeighbor(nodeD);
nodeE.addNeighbor(nodeF);
nodeE.addNeighbor(nodeI);
nodeF.addNeighbor(nodeA);
nodeF.addNeighbor(nodeE);
nodeF.addNeighbor(nodeI);
nodeG.addNeighbor(nodeH);
nodeG.addNeighbor(nodeI);
nodeH.addNeighbor(nodeG);
nodeH.addNeighbor(nodeI);
nodeH.addNeighbor(nodeL);
nodeI.addNeighbor(nodeD);
nodeI.addNeighbor(nodeE);
nodeI.addNeighbor(nodeF);
nodeI.addNeighbor(nodeG);
nodeI.addNeighbor(nodeH);
nodeI.addNeighbor(nodeJ);
nodeI.addNeighbor(nodeK);
nodeI.addNeighbor(nodeM);
nodeJ.addNeighbor(nodeI);
nodeJ.addNeighbor(nodeM);
nodeK.addNeighbor(nodeI);
nodeK.addNeighbor(nodeL);
nodeK.addNeighbor(nodeM);
nodeL.addNeighbor(nodeH);
nodeL.addNeighbor(nodeK);
nodeM.addNeighbor(nodeI);
nodeM.addNeighbor(nodeJ);
nodeM.addNeighbor(nodeK);

// DFS
let result = [];
function DFS(starter) {
  starter.visited = true;
  result.push(starter.value);
  starter.neighbors.forEach((neighbor) => {
    if (!neighbor.visited) DFS(neighbor);
  });
  return result;
}

// 從nodeA開始
console.log(DFS(nodeA));

// 從nodeH開始
console.log(DFS(nodeH));

// BFS
function BFS(starter) {
  let queue = [starter];
  let result = [];
  starter.visited = true;
  while (queue.length > 0) {
    let node = queue.shift();
    result.push(node.value);
    node.neighbors.forEach((neighbor) => {
      if (!neighbor.visited) {
        neighbor.visited = true;
        queue.push(neighbor);
      }
    });
  }
  return result;
}

// 從nodeA開始
console.log(BFS(nodeA));
// 從nodeF開始
console.log(BFS(nodeF));
