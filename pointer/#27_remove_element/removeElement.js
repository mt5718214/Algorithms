/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let j = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    // 如果當前的值等於val, 就跳過
    // 否則就把當前的值放到j的位置, 並且j+1
    if (nums[i] === val) continue;
    else {
      nums[j] = nums[i];
      j++;
      count++;
    }
  }

  console.log(nums);
  return count;
};

console.log(removeElement([3, 2, 2, 3], 3)); // 2, [2, 2]
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5, [0, 1, 3, 0, 4]
console.log(removeElement([1, 2, 3, 4, 5], 6)); // 5, [1, 2, 3, 4, 5]
