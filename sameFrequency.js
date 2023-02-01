function sameFrequency(str1, str2) {
  if(str1.length !== str2.length) return false
  
  let i = 0
  const counter1 = {}
  const counter2 = {}
  while(i < str1.length) {
    if(!counter1[str1[i]]) {
      counter1[str1[i]] = 1
    } else {
      counter1[str1[i]]++
    }
    
    if (!counter2[str2[i]]) {
      counter2[str2[i]] = 1
    } else {
      counter2[str2[i]]++
    }

    i++
  }

  for (let key in counter1) {
    if (!counter2[key] || counter1[key] !== counter2[key]) {
      return false
    }
  }
  return true
}

console.log(sameFrequency('abc', 'abbc'));      // false
console.log(sameFrequency('abbc', 'accb'));     // false
console.log(sameFrequency('eftg', 'gtef'));     // true
console.log(sameFrequency('abbcfgr', 'acbbrgf'));  // true
