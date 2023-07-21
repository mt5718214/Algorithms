package main

import "fmt"

func main() {
	getRow(3) // [1,3,3,1]
	getRow(5) // [1 5 10 10 5 1]
}

func getRow(rowIndex int) []int {
	if rowIndex == 0 {
		return []int{1}
	}
	if rowIndex == 1 {
		return []int{1, 1}
	}

	prev := []int{1, 1}
	var curr []int
	for i := 2; i <= rowIndex; i++ {
		curr = make([]int, i+1)
		curr[0] = 1
		curr[i] = 1
		for j := 1; j < len(prev); j++ {
			curr[j] = prev[j] + prev[j-1]
		}

		prev = curr
	}

	fmt.Println(curr)
	return curr
}
