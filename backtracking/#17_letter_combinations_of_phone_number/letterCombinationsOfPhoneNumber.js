/**
 * @param {string} digits
 * @return {string[]}
 */
// 時間複雜度: O(4 ^ n)因為最多一個數字對應 4 種字母, 空間複雜度: O(n), n為digits的長度
var letterCombinations = function (digits) {
  if (!digits.length) return [];

  const phone = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const result = [];
  const backtrack = (index, path) => {
    if (path.length === digits.length) return result.push(path);

    for (const s of phone[digits[index]]) {
      backtrack(index + 1, path + s);
    }
  };

  backtrack(0, "");
  console.log(result);
  return result;
};

letterCombinations("23");
