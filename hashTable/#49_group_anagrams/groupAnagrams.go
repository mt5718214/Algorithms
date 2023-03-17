package main

import (
	"fmt"
	"sort"
	"strings"
)

func main() {
	groupAnagrams([]string{"eat", "tea", "tan", "ate", "nat", "bat"}) // [["bat"],["nat","tan"],["ate","eat","tea"]]
	groupAnagrams([]string{""})                                       // [[""]]
	groupAnagrams([]string{"eat"})                                    // [["eat"]]
}

func groupAnagrams(strs []string) [][]string {
	hashTable := make(map[string][]string, len(strs))

	for _, s := range strs {
		r := strings.Split(s, "")
		sort.Strings(r)
		w := strings.Join(r, "")

		if len(hashTable[w]) == 0 {
			hashTable[w] = []string{s}
		} else {
			hashTable[w] = append(hashTable[w], s)
		}
	}

	result := [][]string{}
	for _, v := range hashTable {
		result = append(result, v)
	}

	fmt.Println(result)
	return result
}

// https://leetcode.com/problems/group-anagrams/solutions/434269/golang-17-lines-of-easy-to-understand-solution-without-using-sort
// 把array當作map的key
func groupAnagrams1(strs []string) [][]string { // TC(n * m), n is len(strs), k is the length of the longest string in strs
	mp := map[[26]int][]string{}
	for _, s := range strs {
		k := [26]int{}
		for i := 0; i < len(s); i++ {
			k[s[i]-'a'] += 1
		}
		mp[k] = append(mp[k], s)
	}
	res := [][]string{}
	for _, v := range mp {
		res = append(res, v)
	}
	return res
}
