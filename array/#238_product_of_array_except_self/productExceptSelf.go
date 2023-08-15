package main

import "fmt"

func main() {
	productExceptSelf([]int{1, 2, 3, 4}) // [24,12,8,6]
}

func productExceptSelf(nums []int) []int {
	result := make([]int, len(nums))
	for i := range result {
		result[i] = 1
	}

	for i := 1; i < len(nums); i++ {
		result[i] = result[i-1] * nums[i-1]
	}

	right_product := nums[len(nums)-1]

	for i := len(nums) - 2; i >= 0; i-- {
		result[i] *= right_product
		right_product *= nums[i]
	}

	fmt.Println(result)
	return result
}
