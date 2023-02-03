function palindrome(str) {
  let i = 0, j = str.length - 1

  while(i < j) {
    if(str[i] !== str[j]) {
      console.log(false);
      return false
    }
    i++
    j--
  }

  console.log(true);
  return true
}

palindrome("tacocat")  // true
palindrome("asdfjkl")  // false
palindrome("amanaplanacanalpanama") // true