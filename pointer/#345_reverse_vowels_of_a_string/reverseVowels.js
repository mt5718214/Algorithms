/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const set = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const strAry = s.split("");
  let l = 0,
    r = strAry.length - 1;

  while (l < r) {
    if (set.has(s[l]) && set.has(s[r])) {
      let tmp = strAry[l];
      strAry[l] = strAry[r];
      strAry[r] = tmp;
      l++;
      r--;
    } else if (set.has(s[l]) && !set.has(s[r])) {
      r--;
    } else if (!set.has(s[l]) && set.has(s[r])) {
      l++;
    } else {
      l++;
      r--;
    }
  }

  return strAry.join("");
};

console.log(reverseVowels("leetcode"));
console.log(reverseVowels("ABCa"));
