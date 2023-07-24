/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = -Infinity
  let currsum = 0
  for(let num of nums) {
    currsum += num
    if (currsum < num) {
      // 檢查目前的累積值是否比當前數字小(加完第n個數後,還比較小就表示前n-1個總和是負的), 如果是那目前的最大值就會是當前數字
      currsum = num
    }

    if(currsum > max) {
      max = currsum
    }
  }

  console.log(max);
  return max
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])  // 6
maxSubArray([1]) // 1
maxSubArray([5, 4, -1, 7, 8]) // 23

var maxSubArray1 = function (nums) { // O(n^2)
  let max = -Infinity
  
  for(let i = 0; i < nums.length; i++) {
    let currsum = 0
    currsum += nums[i]
    if (currsum > max) {
      max = currsum
    }
    for(let j = i+1; j < nums.length; j++) {
      currsum += nums[j]
      
      if(currsum > max) {
        max = currsum
      }
    }
  }
  console.log(max);
  return max
};

maxSubArray1([-2, 1, -3, 4, -1, 2, 1, -5, 4])  // 6
maxSubArray1([1]) // 1
maxSubArray1([5, 4, -1, 7, 8]) // 23

var maxSubArray2 = function (nums) { // O(n)
  let max = nums[0]
  let currsum = nums[0]

  for (let i = 1; i < nums.length; i++) {
    if(currsum < 0) {
      currsum = nums[i]
    } else {
      currsum += nums[i]
    }
    max = Math.max(currsum, max)
  }

  console.log(max);
  return max
};

maxSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4])  // 6
maxSubArray2([1]) // 1
maxSubArray2([5, 4, -1, 7, 8]) // 23
