/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  // 遍歷 t字串並記錄char出現個數
  const map = new Map();
  for (let i = 0; i < t.length; i++) {
    if (map.has(t[i])) {
      let num = map.get(t[i]) + 1;
      map.set(t[i], num);
    } else {
      map.set(t[i], 1);
    }
  }

  let matched = 0;
  let minLen = s.length + 1;
  let pointer = 0;
  let pointer2 = 0;
  // 開始在s中尋找第一個包含t的字串
  // 並且移動window去尋找最短的substring包含t
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (map.has(char)) {
      map.set(char, map.get(char) - 1);
      if (map.get(char) == 0) {
        matched++;
      }
    }

    while (matched == map.size) {
      if (minLen > i - pointer + 1) {
        minLen = i - pointer + 1;
        pointer2 = pointer;
      }
      let deleted = s[pointer++];
      if (map.has(deleted)) {
        if (map.get(deleted) == 0) {
          matched--;
        }
        map.set(deleted, map.get(deleted) + 1);
      }
    }
  }

  console.log(minLen > s.length ? "" : s.slice(pointer2, pointer2 + minLen));
  return minLen > s.length ? "" : s.slice(pointer2, pointer2 + minLen);
};

minWindow("ADOBECODEBANC", "ABC");
