function partition(arr, p, r) {
  const pivot = arr[r]
  let i = p - 1   // this variable is counting how many items are less than pivot

  for(let j = p; j <= r-1; j++) {
    if(arr[j] <= pivot) {
      i++
      // swap arr[p] and arr[i]
      let temp = arr[j]
      arr[j] = arr[i]
      arr[i] = temp
    }
  }

  // final swap arr[r] and arr[i+1]
  let temp = arr[r]
  arr[r] = arr[i+1]
  arr[i+1] = temp
  return i+1
}

function quickSort(arr, p, r) {  // p = 0, r = arr.length-1
  if(p < r) {
    const q = partition(arr, p, r)
    quickSort(arr, p, q-1)
    quickSort(arr, q+1, r)
  }

  return arr
}

console.log(quickSort([2, 7, 5, 3, 4, 1], 0, 5));
console.log(quickSort([12, -7, 5, 3, 4, 100, 1], 0, 6));
