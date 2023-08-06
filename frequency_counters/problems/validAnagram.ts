// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

interface FrequencyCounterType {
  [key: string]: number
}

export const validAnagram = (str1: string, str2: string): boolean => {
  if(str1.length !== str2.length) return false // anagrams are always the same length.

  const frequency1: FrequencyCounterType = {} // { 'a': 2, 'n': 1 }
  const frequency2: FrequencyCounterType = {} // { 'a': 2, 'n': 1, 'r': 1 }

  for(let char of str1) {
    if(frequency1[char]) frequency1[char] += 1 // otherwise go ahead and add 1 to the frequency it appears
    else frequency1[char] = 1  // initialize this key if it doesn't exist
  }
  for(let char of str2) {
    if(frequency2[char]) frequency2[char] += 1
    else frequency2[char] = 1
  }
  // initialize counters for both strings
  // Compare character counts between the two frequency counters. If any discrepancies, return false.
  for(let key in frequency1) {
    if(frequency1[key] !== frequency2[key]) return false
  }

  return true
}
