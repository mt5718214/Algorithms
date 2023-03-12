/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const ary = []
  if (nums.length < 3) return ary

  nums.sort((a, b) => a - b)

  //two pointer
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) return ary
    if (i > 0 && nums[i] === nums[i - 1]) //前一個數字與現在相同則跳過
      continue

    let j = i + 1
    let k = nums.length - 1
    let target = 0 - nums[i]
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] === 0) { //等同target
        ary.push([nums[i], nums[j], nums[k]])
        while (j < k && nums[k] === nums[k - 1]) k--;
        while (j < k && nums[j] === nums[j + 1]) j++;
        k--
        j++
      } else if (nums[j] + nums[k] > target) { //大於target
        --k
      } else { //小於target
        ++j
      }
    }
  }

  console.log(ary);
  return ary
};

threeSum([-1, 0, 1, 2, -1, -4]) // [[-1,-1,2],[-1,0,1]]
threeSum([0, 1, 1]) // []
threeSum([0, 0, 0]) // [[0,0,0]]