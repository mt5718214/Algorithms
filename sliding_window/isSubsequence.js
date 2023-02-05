function isSubsequence(str1, str2) {
  let pointer1 = 0
  for (let pointer2 = 0; pointer2 < str2.length; pointer2++) {
    if (str1[pointer1] === str2[pointer2]) {
      pointer1++
    }

    if(pointer1 >= str1.length) {
      console.log(true);
      return true
    }
  }

  console.log(false);
  return false
}

isSubsequence("hello", "hello dear")  // true
isSubsequence("book", "brooklyn")     // true
isSubsequence("abc", "acb")           // false
isSubsequence("abc", "abc")           // true
isSubsequence("", "acb")              // true
