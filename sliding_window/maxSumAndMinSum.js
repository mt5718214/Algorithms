function maxSum(arr, size) {
  let max = -Infinity
  for(let i = 0; i <= arr.length - size; i++) {
    let sum = 0
    let range = size
    while(range > 0) {
      sum += arr[i + range - 1]
      range--
    }

    if(sum > max) {
      max = sum
    }
  }

  console.log(max);
  return max
}

maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 2)   // 10
maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3)   // 12
maxSum([2, 7, -3, -1, 6, 1, -5, -22, -11], 3) // 6
maxSum([2, 7, -3, 0, 6, 1, -1, 22, -11], 4)   // 28


function minSum(arr, size) {
  let min = Infinity
  for (let i = 0; i <= arr.length - size; i++) {
    let sum = 0
    let range = size
    while (range > 0) {
      sum += arr[i + range - 1]
      range--
    }

    if (min > sum) {
      min = sum
    }
  }

  console.log(min);
  return min
}

minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 2)   // -23
minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3)   // -28
minSum([2, 7, -3, -1, 6, 1, -5, -22, -11], 3) // -38
minSum([2, 7, -3, 0, 6, 1, -1, 22, -11], 4)   // 4

