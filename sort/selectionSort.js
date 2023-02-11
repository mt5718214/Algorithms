function selectionSort(arr) {  
  for(let i = 0; i < arr.length - 1; i++) {  // 遍歷陣列
    let minIndex = i
    for(let j = i; j < arr.length; j++) {   // 在unsorted array中尋找最小的元素
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    // swap arr[minIndex] and arr[i]
    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  console.log(arr);
}

selectionSort([1, 2, 4, 0, 5])
selectionSort([9, 4, 2, 6, 3, 7, 5])
selectionSort([14, -4, 17, 6, 22, 1, -5])
selectionSort([6, 6, 5, 4, 3, 2, 1])