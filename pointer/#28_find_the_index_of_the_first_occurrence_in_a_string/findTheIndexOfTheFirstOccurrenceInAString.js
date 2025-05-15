/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// time: O(n * m) n = haystack.length, m = needle.length
var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    let j = 0;
    let k = i;
    while (j < needle.length && haystack[k] === needle[j]) {
      // 如果 j 走到 needle 的結尾, 就代表找到了, 要回傳最前面的index, 所以用k減去needle的長度後 + 1
      if (haystack[k] === needle[j] && j === needle.length - 1)
        return k - needle.length + 1;
      k++;
      j++;
    }
  }

  return -1;
};

strStr("mississippi", "issip"); // 4
strStr("hello", "ll"); // 2
strStr("aaaaa", "bba"); // -1
strStr("", ""); // 0
