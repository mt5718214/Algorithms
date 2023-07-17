package main

import (
	"fmt"
)

func main() {
	maxProfit([]int{1, 2, 7}) // 6
	maxProfit([]int{1})       // 0
}

func maxProfit(prices []int) int {
	buyValue, maximumProfit := prices[0], 0

	for _, price := range prices[1:] {
		if price < buyValue {
			buyValue = price
			continue
		}

		if profit := price - buyValue; maximumProfit < profit {
			maximumProfit = profit
		}
	}

	fmt.Println(maximumProfit)
	return maximumProfit
}
