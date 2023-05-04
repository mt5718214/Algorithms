/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] == 9) {
      digits[i] = 0
    } else {
      // 不是9的話, 加完就結束
      digits[i] += 1
      console.log(digits);
      return digits
    }
  }

  if (digits[0] == 0) {
    // 檢查開頭是不是0, 是的話表示原先的數字是9, 所以要在最前面加上一個數字1
    console.log([1, ...digits]);
    return [1, ...digits]
  }
  console.log(digits);
  return digits
};

plusOne([1, 2, 3])    // 124
plusOne([4, 3, 2, 1]) // 4322
plusOne([9, 9, 9])    // 1000