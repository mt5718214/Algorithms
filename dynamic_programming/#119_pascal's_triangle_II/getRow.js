/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) return [1]
  if (rowIndex === 1) return [1, 1]

  let prev = [1, 1]
  let ans
  for(let i = 2; i <= rowIndex; i++) {
    ans = [1]
    for(let j = 0; j < prev.length - 1; j++) {
      ans.push(prev[j]+prev[j+1])
    }
    ans.push(1)
    prev = ans
  }

  console.log(ans);
  return ans
};

getRow(3) // [1,3,3,1]
getRow(5) // [1 5 10 10 5 1]