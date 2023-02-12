// merge sort 的時間複雜度為 O(nlogn), 空間複雜度O(n)
function mergeSort(arr) {
  if(arr.length === 1) {
    return arr
  }
  let middle = Math.floor(arr.length / 2)
  const arr1 = arr.slice(0, middle)
  const arr2 = arr.slice(middle, arr.length)

  return merge(mergeSort(arr1), mergeSort(arr2))
}

// merge two sorted array
function merge(a1, a2) {
  let result = [], i = 0, j = 0

  while(i < a1.length && j < a2.length) {
    if(a1[i] > a2[j]) {
      result.push(a2[j])
      j++
    } else {
      result.push(a1[i])
      i++
    }
  }

  if(i < a1.length) {
    for (; i < a1.length; i++) {
      result.push(a1[i])
    }
  }

  if (j < a2.length) {
    for (; j < a2.length; j++) {
      result.push(a2[j])
    }
  }

  return result
}

console.log(mergeSort([15, 3, 17, 18, 35, 11, 0, 36]));