/**
 * find if there's any pair in the arr that has average of the given number
 * @param {*} arr sorted arr
 * @param {*} target 
 */

function averagePair(arr, target) { // BigO(n)
  const result = []

  let left = 0, right = arr.length - 1
  while(left < right) {
    if(arr[left] + arr[right] === target * 2) {
      result.push([arr[left], arr[right]])
      left++
      right--
    } else if (arr[left] + arr[right] < target * 2) {
      left++
    } else {
      right--
    }
  }

  return result
}

console.log(averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5));
console.log(averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 5));
console.log(averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1));
console.log(averagePair([-7, 0, 11, 12, 23, 29, 34, 37, 41], 17));
