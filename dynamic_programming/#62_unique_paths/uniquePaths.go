package main

import (
	"fmt"
)

func main() {
	fmt.Println(uniquePaths(3, 7))
	fmt.Println(uniquePaths2(3, 7))
}

func uniquePaths(m int, n int) int {
	var explore func(i, j int) int

	explore = func(i, j int) int {
		if i == m && j == n {
			return 1
		}

		var ipath, jpath int
		if i < m {
			ipath = explore(i+1, j) // 往右走
		}
		if j < n {
			jpath = explore(i, j+1) // 往下走
		}

		return ipath + jpath
	}

	return explore(1, 1)
}

func uniquePaths2(m int, n int) int { // O(m*n)
	paths := make([][]int, n)
	for i := 0; i < len(paths); i++ {
		paths[i] = make([]int, m)
	}

	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			if i == 0 || j == 0 {
				paths[i][j] = 1
			} else {
				paths[i][j] = paths[i-1][j] + paths[i][j-1]
			}
		}
	}

	return paths[n-1][m-1]
}
