/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 1) return [[1]]
  if (numRows === 2) return [[1], [1,1]]

  let prev = [1, 1], result = [[1], [1, 1]]
  for(let i = 3; i <= numRows; i++) {
    let curr = [1]

    for(let j = 0; j < prev.length - 1; j++) {
      curr.push(prev[j]+prev[j+1])
    }
    
    curr.push(1)
    result.push(curr)
    prev = curr
  }
  console.log(result);
  return result
};

generate(2) // [[1],[1,1]]
generate(5) // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
generate(6) // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1], [1,5,10,10,5,1]]