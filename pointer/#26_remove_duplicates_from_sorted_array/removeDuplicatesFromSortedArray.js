/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let j = 0;
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[j] === nums[i]) {
      continue;
    } else {
      // 當遇到不一樣的時候, 把當前位置(i)的值放到j+1的位置(同時移動j的位置)
      nums[++j] = nums[i];
      count++;
    }
  }

  console.log(nums);
  return count;
};

console.log(removeDuplicates([1, 1, 2])); // 2, [1, 2]
console.log(removeDuplicates([0, 0, 1, 1, 2, 2, 3, 4])); // 5, [0, 1, 2, 3, 4]
console.log(removeDuplicates([1, 2, 3, 4, 5])); // 5, [1, 2, 3, 4, 5]
console.log(removeDuplicates([1, 1, 1, 1, 1])); // 1, [1]
