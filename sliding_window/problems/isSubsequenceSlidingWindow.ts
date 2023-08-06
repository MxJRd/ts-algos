/*
  Multiple Pointers - isSubsequence

  Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

  Examples:

      isSubsequence('hello', 'helhello world'); // true
      isSubsequence('sing', 'sting'); // true
      isSubsequence('abc', 'abracadabra'); // true
      isSubsequence('abc', 'acb'); // false (order matters)

  Your solution MUST have AT LEAST the following complexities:

  Time Complexity - O(N + M)

  Space Complexity - O(1)
*/

export const isSubsequenceSlidingWindow = (subStr: string, str: string) => {
  let currStr: string= ''
  for(let windowEnd = 0; windowEnd < str.length; windowEnd += 1) {
    const currChar = str[windowEnd]
    currStr = currStr.concat(currChar)
    if(currStr.length > subStr.length) { // removes firstIdx when currStr becomes longer than subStr
      currStr = currStr.split('').filter((char, idx) => idx !== 0).join('').toString()
    }
    if(currStr === subStr) return true
  }
  return false
}
