/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let start = 0;
  let end = 0;
  let total = 0;
  let minLength = Infinity;

  while (start < nums.length) {
    if (total < target && end < nums.length) {
      // 總和小於target就繼續遍歷, 但不能超過陣列總長
      total += nums[end];
      end++;
    } else if (total >= target) {
      // 總和已經超過target, 計算目前的長度, 並且移動start
      let currentLen = end - start;
      if (minLength > currentLen) {
        minLength = currentLen;
      }
      total -= nums[start];
      start++;
    } else if (end >= nums.length) {
      // 遍歷完陣列, 且總和沒超過target則結束
      break;
    }
  }

  if (minLength === Infinity) {
    console.log("cannot find minLen");
    return 0;
  }

  console.log(minLength);
  return minLength;
};

minSubArrayLen(7, [2, 3, 1, 2, 4, 3]); // 2
minSubArrayLen(4, [1, 4, 4]); // 1
minSubArrayLen(11, [1, 1, 1, 1]); // 0
