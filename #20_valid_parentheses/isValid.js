/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const stack = [];

  for (let c of s) {
    if (map[c]) {
      stack.push(c);
    } else {
      const char = stack.pop();
      if (map[char] !== c) {
        console.log(false);
        return false;
      }
    }
  }

  console.log(stack.length === 0);
  return stack.length === 0;
};

isValid("()"); // true
isValid("()[]{}"); // true
isValid("(]"); // false
