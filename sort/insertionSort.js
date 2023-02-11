function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) { // 第0個元素視為已排序的陣列
    let element = arr[i]  // 要插入到sorted array中的元素

    let j = i
    while (j > 0 && element < arr[j-1]) {
      arr[j] = arr[j-1]
      j--
    }
    arr[j] = element
  }

  console.log(arr);
}

insertionSort([1, 2, 4, 0, 5])
insertionSort([9, 4, 2, 6, 3, 7, 5])
insertionSort([14, -4, 17, 6, 22, 1, -5])
insertionSort([6, 6, 5, 4, 3, 2, 1])