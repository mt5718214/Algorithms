// https://hackmd.io/@Aquamay/H1nxBOLcO/https%3A%2F%2Fhackmd.io%2F%40Aquamay%2FHyyCFRj9d
function bubble(arr) {
  let step = 0
  for(let i = 0; i <= arr.length - 2; i++) {  // 每run過一遍, 已排序的元素會被放到陣列最前面, 下輪就不用再檢查
    let isSwaped = false
    for(let j = arr.length - 1; j >= i + 1; j--) {
      if(arr[j] < arr[j-1]) {
        let temp = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = temp
        step++
        isSwaped = true
      }
    }

    if(!isSwaped) {
      break
    }
  }

  // console.log(arr, step);
}

bubble([1, 2, 4, 0, 5])
bubble([9, 4, 2, 6, 3, 7, 5])
bubble([4, 17, 5, 3, 12, 1])
bubble([6, 5, 4 ,3 ,2 ,1])