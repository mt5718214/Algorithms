package main

import "fmt"

func main() {
	reverseString([]byte{'h','e','l','l','o'})
	reverseString([]byte{'H','a','n','n','a','h'})
	reverseString([]byte{'L','e','e','t','c','o', 'd', 'e'})
}

func reverseString(s []byte)  {
	l := 0
	r := len(s) - 1
	
	for l < r {
		tmp := s[l]
		s[l] = s[r]
		s[r] = tmp
		l++
		r--
	}

	fmt.Println(string(s))
}