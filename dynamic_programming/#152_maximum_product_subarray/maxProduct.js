/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) { // TC: O(n), SC: O(1)
  let curr_max = nums[0], curr_min = nums[0], final_max = nums[0]

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]
    next_max = curr_max * num // 下一個的可能最大
    next_min = curr_min * num // 下一個的可能最小
    curr_max = Math.max(next_max, next_min, num)
    curr_min = Math.min(next_max, next_min, num)
    final_max = Math.max(final_max, curr_max)
  }

  console.log(final_max);
  return final_max
};

maxProduct([2, 3, -2, 4]) // 6
maxProduct([2, 3, -2, 4, -2]) // 96
maxProduct([-2, 0, -1]) // 0