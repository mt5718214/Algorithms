let heapSize
let arr = [15, 3, 17, 18, 20, 1, 11, 2, 66]

function buildMaxHeap() {
  heapSize = arr.length - 1
  for (let i = Math.floor(heapSize / 2); i >= 0; i--) { // O(n * log(n))
    // 假設有n個節點, 那麼階層最多會有log(n)層, 所以每次最多走log(n)層
    maxHeapify(i)
  }
}

function maxHeapify(i) { // i為父節點在arr中的index
  let largest
  let l = i * 2 + 1
  let r = i * 2 + 2
  
  if(l <= heapSize && arr[l] > arr[i]) {
    largest = l
  } else {
    largest = i
  }

  if(r <= heapSize && arr[r] > arr[largest]) {
    largest = r
  }

  if(largest !== i) {
    // swap arr[i] with arr[largest]
    let temp = arr[i]
    arr[i] = arr[largest]
    arr[largest] = temp
    maxHeapify(largest)
  }
}

function heapSort() {
  buildMaxHeap()
  for (let i = arr.length - 1; i >= 0; i--) { // O(n * log(n))
    // exchange arr[0] with arr[i]
    let temp = arr[i]
    arr[i] = arr[0]
    arr[0] = temp
    heapSize--
    maxHeapify(0)
  }
}

heapSort()
console.log(arr);