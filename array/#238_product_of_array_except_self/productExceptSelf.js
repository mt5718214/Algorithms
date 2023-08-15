/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = Array.from({ length: nums.length }).fill(1)

  // 由左向右走
  // 當前result的位置的值, 會是nums裡當前位置之前的乘積
  // 當走完之後, 也就相當於計算完除了自己的位置外, 自己位置左邊所有位置的乘積
  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] * nums[i - 1]
  }

  right_product = nums[nums.length - 1]
  
  // 反過來由右向左走
  for (let i = nums.length - 2; i >= 0; i--) {
    // 從idx-2開始走, 因為先前已經累積了當前位置左邊所有的乘積, 所以在idx-2這邊只需要乘上idx-1也就是right_product
    result[i] *= right_product
    // 以此類推 idx-3要乘上右邊所有位置的乘機也就是right_product & idx-2
    right_product *= nums[i]
  }

  return result
};