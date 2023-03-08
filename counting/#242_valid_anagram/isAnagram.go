package main

import "fmt"

func main() {
	isAnagram("anagram", "nagaram") // true
	isAnagram("rat", "cat")         // false
	isAnagram("a", "abc")           // false
}

func isAnagram(s string, t string) bool {
	chars := make([]int, 26)

	for _, v := range s {
		i := int(v - 'a')
		chars[i]++
	}

	for _, v := range t {
		i := int(v - 'a')
		chars[i]--
	}

	for _, v := range chars {
		if v != 0 {
			fmt.Println(false)
			return false
		}
	}

	fmt.Println(true)
	return true
}
