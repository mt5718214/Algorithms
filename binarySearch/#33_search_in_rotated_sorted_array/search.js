/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let mid = Math.floor((r - l) / 2 + l);

    if (nums[mid] === target) {
      console.log(mid);
      return mid;
    } else if (nums[mid] >= nums[l]) {
      // 從l到mid 剛好是遞增的話
      if (nums[mid] > target && target >= nums[l]) {
        // 檢查target是否在nums[mid]跟nums[l]之間, 是的話將mid更改為nums[mid]-1和nums[l]的中間
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      // 從l到mid不是遞增的話, 那mid到r就會是遞增
      if (nums[mid] < target && target <= nums[r]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }

  console.log(-1);
  return -1;
};

search([4, 5, 6, 7, 0, 1, 2], 0); // 4
search([4, 5, 6, 7, 0, 1, 2], 3); // -1
