/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let one_step_before = 2 // 第n-1階, 以第二階來說有兩種走法 1.走兩次一步 2.走一次兩步
  let two_step_before = 1 // 第n-2階
  let all_ways = 0

  if(n <= 3) {
    console.log("all_ways", n)
    return n
  }
  
  for(let i = 2; i < n; i++) {
    all_ways = one_step_before + two_step_before
    two_step_before = one_step_before
    one_step_before = all_ways
  }

  console.log("all_ways", all_ways)
  return all_ways
};


climbStairs(2) // 2
climbStairs(3) // 3
climbStairs(4) // 5