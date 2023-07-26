/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length > t.length) return false

  let ptr1 = 0, ptr2 = 0

  while (ptr1 < s.length && ptr2 < t.length) {
    if (s[ptr1] == t[ptr2]) {
      ptr1++
    }
    ptr2++
  }

  console.log(ptr1 === s.length);
  return ptr1 === s.length
};

isSubsequence("abc", "ahbgdc") // true
isSubsequence("axc", "ahbgdc") // false