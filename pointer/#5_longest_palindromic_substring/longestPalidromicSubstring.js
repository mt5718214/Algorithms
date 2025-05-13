/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 基本想法：以每個點為中心左右展開看有沒有相等, 有就是對稱

  let maxlen = 0,
    begin = 0,
    len = s.length;
  for (let i = 0; i < len; i++) {
    // i為中心點, k j 雙指標向左右跑
    let k = i,
      j = i;
    // 首先要考慮中心重複的情況 ex: b'aaa'b
    while (k < len && s[k] === s[k + 1]) {
      k++;
    }

    while (j > 0 && k < len - 1 && s[j - 1] === s[k + 1]) {
      k++;
      j--;
    }

    let newLen = k - j + 1;
    // 這裡的 newLen 是當前的長度, 如果大於 maxlen 就更新
    // 這裡的 begin 是當前的起始位置, 如果大於 maxlen 就更新
    if (newLen > maxlen) {
      begin = j;
      maxlen = newLen;
    }
  }

  console.log(s.substring(begin, begin + maxlen));
  return s.substring(begin, begin + maxlen);
};

longestPalindrome("babad");
