package main

import "fmt"

func main() {
	maxProfit([]int{7, 1, 5, 3, 6, 4})
	maxProfit([]int{1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9})
	maxProfit([]int{7, 6, 4, 3, 1})
}

func maxProfit(prices []int) int {
	start, end := 0, 1
	profit := 0

	for end < len(prices) {
		if prices[end]-prices[start] > 0 && prices[end]-prices[start] > profit {
			profit = prices[end] - prices[start]
		} else if prices[end]-prices[start] < 0 {
			start = end
		}
		end++
	}

	fmt.Println(profit)
	return profit
}
