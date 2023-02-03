/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // 將a-z, A-Z, 0-9以外的字元移除
  let str = s.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let l = 0,
    r = str.length - 1;
  while (l < r) {
    if (str[l] !== str[r]) {
      console.log(false);
      return false;
    }
    l++;
    r--;
  }

  console.log(true);
  return true;
};

isPalindrome("A man, a plan, a canal: Panama"); // true
isPalindrome("race a car"); // false
isPalindrome(" "); // true
isPalindrome("0P"); // false

// https://leetcode.com/problems/valid-palindrome/solutions/3133780/3-simple-javascript-solutions/
var isPalindrome2 = function (s) {
  const reg = new RegExp(/[^a-zA-Z0-9]/);

  let l = 0,
    r = s.length - 1;
  while (l < r) {
    while (l < r && reg.test(s[l])) l++;
    while (l < r && reg.test(s[r])) r--;
    if (s[l].toLowerCase() !== s[r].toLowerCase()) {
      return false;
    }
    l++;
    r--;
  }

  return true;
};
