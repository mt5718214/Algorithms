/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if(s.length !== t.length) {
    console.log(false);
    return false
  }

  const counter = {}
  for(let e of s) {
    counter[e] = (counter[e] || 0) + 1
  }

  for(let e of t) {
    if(!counter[e]) {
      console.log(false);
      return false
    }
    counter[e]--
  }

  console.log(true);
  return true
};


isAnagram("anagram", "nagaram")  // true
isAnagram("rat", "cat")          // false
isAnagram("a", "abc")            // false

