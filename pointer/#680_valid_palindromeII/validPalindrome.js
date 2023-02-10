/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let l = 0,
    r = s.length - 1;
  while (l < r) {
    // if at any point the characters don't match,
    // then check once from left to right - 1,
    // and from left + 1 to right,
    // if for both cases find false, return false else return true.
    if (s[l] !== s[r]) {
      return isPalindrome(s, l, r - 1) | isPalindrome(s, l + 1, r);
    }

    l++;
    r--;
  }

  return true;
};

var isPalindrome = function (s, start, end) {
  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
};

validPalindrome("aba"); // true
validPalindrome("abca"); // true
validPalindrome("abc"); // false
validPalindrome("eeccccbebaeeabebccceea"); // false
validPalindrome("deeee"); // true
