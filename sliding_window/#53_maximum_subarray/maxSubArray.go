package main

import "fmt"

func main() {
	maxSubArray([]int{-2, 1, -3, 4, -1, 2, 1, -5, 4}) // 6
	maxSubArray([]int{1})                             // 1
	maxSubArray([]int{5, 4, -1, 7, 8})                // 23
	maxSubArray([]int{-1, -12, -3, -6, -9, -8})       // -1
}

func maxSubArray(nums []int) int {
	max, sum := nums[0], nums[0]

	for _, v := range nums[1:] {
		sum += v
		if sum < v {
			sum = v
		}

		if max < sum {
			max = sum
		}
	}

	fmt.Println(max)
	return max
}
