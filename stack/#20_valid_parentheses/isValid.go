package main

import "fmt"

func main() {
	isValid("()")     // true
	isValid("()[]{}") // true
	isValid("(]")     // false
	isValid("]")      // false
}

func isValid(s string) bool {
	stack := []rune{}
	brackets := map[rune]rune{
		'(': ')',
		'[': ']',
		'{': '}',
	}

	for _, c := range s {
		if v, ok := brackets[c]; ok {
			stack = append(stack, v)
		} else if len(stack) == 0 || stack[len(stack)-1] != c {
			fmt.Println(false)
			return false
		} else {
			stack = stack[:len(stack)-1]
		}
	}

	fmt.Println(len(stack) == 0)
	return len(stack) == 0
}
