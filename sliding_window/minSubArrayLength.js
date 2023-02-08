/**
 * return the minimal length of a continuous subarray - the sum of elemant inside subarray should greater then or equal to the target
 * if not found return -1.
 * 
 * @param {*} ary an array of positive integers
 * @param {*} target positive integer
 */
function minSubLength(ary, target) {
  let start = 0
  let end = 0
  let total = 0
  let minlength = Infinity

  while(start < ary.length) {
    if(total < target && end < ary.length) {
      total += ary[end]
      end++
    } else if(total >= target) {
      let currentLength = end - start
      if (minlength > currentLength) {
        minlength = currentLength
      }
      total -= ary[start]
      start++
    } else if (end >= ary.length) {
      break
    }
  }

  if (minlength === Infinity) {
    console.log("Cannot find subarray that can sum up to the given number");
    return -1
  }

  console.log(minlength);
  return minlength
}

minSubLength([9, 8, 1, 4, 9, 5, 1, 2], 11) // 2
minSubLength([9, 8, 1, 4, 9, 5, 1, 2], 100) // -1