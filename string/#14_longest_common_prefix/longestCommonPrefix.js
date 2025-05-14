/**
 * @param {string[]} strs
 * @return {string}
 */
// time: O(n * m) n = strs.length, m = strs[i].length
var longestCommonPrefix = function (strs) {
  for (let i = 0; i < strs[0].length; i++) {
    for (let str of strs) {
      if (str[i] !== strs[0][i]) return str.slice(0, i);
    }
  }

  return strs[0];
};
