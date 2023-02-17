package main

import "fmt"

func main() {
	lengthOfLongestSubstring("abcabcbb")
	lengthOfLongestSubstring("bbbbb")
	lengthOfLongestSubstring("pwwkew")
	lengthOfLongestSubstring("abba")
	lengthOfLongestSubstring("")  // 0
	lengthOfLongestSubstring(" ") // 1
}

func lengthOfLongestSubstring(s string) int {
	start, maxLen := -1, 0
	hash := make(map[rune]int)

	for i, ch := range s {
		if _, ok := hash[ch]; ok && hash[ch] > start {
			/**
			* hash[ch] > start 用於判斷目前 sliding window的start位置是否超過hash[ch]的index
			* 以 "abba" 當遇到重複元素b時, start將會移動到 index 0, 遇到重複a時需檢查hash['a']的index有沒有大於start, 否則start會往回走
			 */
			start = hash[ch]
			fmt.Println("ok", start)
		}
		hash[ch] = i

		maxLen = max(maxLen, i-start)
	}

	fmt.Println(maxLen)
	return maxLen
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

// https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/3189769/go-simple-o-n-solution-with-comments/
// func lengthOfLongestSubstring(s string) (max int) {
// 	symbols := map[byte]int{} // value is latest seen place of symbol
// 	length := 0               // length of the current substring
// 	for i := 0; i != len(s); i++ {
// 		v, ok := symbols[s[i]]
// 		symbols[s[i]] = i
// 		if ok && v >= i-length { //s[i] in current substring
// 			length = i - v // change substring to s[v+1]...s[i] ("abca"->"bca")
// 		} else {
// 			length += 1
// 		}
// 		if length > max {
// 			max = length
// 		}
// 	}
// 	fmt.Println(max)
// 	return
// }
