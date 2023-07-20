package main

import "fmt"

func main() {
	// generate(5)
	// generate(6)
	generate1(5)
	generate1(6) // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1], [1,5,10,10,5,1]]
}

func generate(numRows int) [][]int {
	if numRows == 1 {
		return [][]int{[]int{1}}
	}
	if numRows == 2 {
		return [][]int{[]int{1}, []int{1, 1}}
	}

	var result = [][]int{[]int{1}, []int{1, 1}}
	prev := []int{1, 1}

	for i := 3; i <= numRows; i++ {
		curr := []int{1}

		for j := 0; j < len(prev)-1; j++ {
			curr = append(curr, prev[j]+prev[j+1])
		}

		curr = append(curr, 1)
		result = append(result, curr)
		prev = curr
	}

	fmt.Println(result)
	return result
}

// https://leetcode.com/problems/pascals-triangle/solutions/1113300/simple-golang-code/
func generate1(numRows int) [][]int {
	ans := make([][]int, numRows)

	for i := 0; i < numRows; i++ {
		ans[i] = make([]int, i+1)
		ans[i][0] = 1
		ans[i][i] = 1

		for j := 1; j < i; j++ {
			ans[i][j] = ans[i-1][j] + ans[i-1][j-1]
		}
	}

	fmt.Println(ans)
	return ans
}
