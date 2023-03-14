package main

import (
	"fmt"
	"sort"
)

func main() {
	merge([][]int{{1, 3}, {15, 18}, {2, 6}, {8, 10}}) // [[1,6],[8,10],[15,18]]
	merge([][]int{{1, 4}, {2, 3}, {2, 6}, {8, 10}})   // [[1,6],[8,10]]
	merge([][]int{{1, 4}, {1, 4}})                    // [[1,4]]
}

func merge(intervals [][]int) [][]int {
	sort.SliceStable(intervals, func(i, j int) bool {
		return intervals[i][0] < intervals[j][0]
	})
	curr := intervals[0]
	result := [][]int{curr}

	for i := 1; i < len(intervals); i++ {
		next := intervals[i]

		if curr[1] >= next[0] && curr[1] < next[1] { // overlap
			curr[1] = next[1]
		}
		if curr[1] < next[0] {
			result = append(result, next)
			curr = next
		}
	}

	fmt.Println(result)
	return result
}
