/**
 * return the length of the longest substring with all distinct characters.
 * @param {string} s
 */
function uniqueLetterString(s) {
  let start = 0
  let end = 0
  let maxLength = -1
  const set = new Set()
  
  while(end < s.length) {
    if(set.has(s[end])) {
      set.delete(s[start])
      start++
    } else {
      set.add(s[end])
      end++
      if((end - start) > maxLength) {
        maxLength = end - start
      }
    }
  }

  console.log(maxLength);
  return maxLength
}

uniqueLetterString("thisishowwedoit") // 6
uniqueLetterString("abcdefg") // 7
uniqueLetterString("abcbcbbc") // 3
uniqueLetterString("mapapsapem") // 5
uniqueLetterString("m") // 1