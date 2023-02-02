/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let i = 0,
    j = s.length - 1;

  while (i < j) {
    // [s[i], s[j]] = [s[j], s[i]];
    let tmp = s[i];
    s[i] = s[j];
    s[j] = tmp;

    i++;
    j--;
  }

  console.log("ans: ", s);
};

reverseString(["h", "e", "l", "l", "o"]);
reverseString(["H", "a", "n", "n", "a", "h"]);
