/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  /**
   * 遍歷s, 並且用map紀錄char [char, count]
   * 當出現重複char時, 要把start移動到該重複char右邊的char, 同時要把start走過的char的count減掉
   */
  let start = 0,
    end = 0,
    maxLen = 0;
  const map = new Map();

  while (end < s.length) {
    if (map.get(s[end]) > 0) {
      map.set(s[end], map.get(s[end]) + 1);
    } else {
      map.set(s[end], 1);
    }

    let count = map.get(s[end]);

    while (count > 1) {
      startChar = s[start];
      charCount = map.get(startChar);
      map.set(startChar, charCount - 1);
      count = map.get(s[end]);
      start++;
    }

    maxLen = Math.max(maxLen, end - start + 1);
    end++;
  }

  console.log(maxLen);
  return maxLen;
};

lengthOfLongestSubstring("abcabcbb"); // 3
lengthOfLongestSubstring("bbbbb"); // 1
lengthOfLongestSubstring("pwwkew"); // 3
lengthOfLongestSubstring(""); // 0
lengthOfLongestSubstring(" "); // 1
