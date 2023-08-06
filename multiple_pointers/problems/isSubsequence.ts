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

export const isSubsequence = (subStr: string, str: string): boolean => {
  let subPointer = 0
  let strPointer = 0
  while(strPointer < str.length) {
    if(subStr[subPointer] === str[strPointer]) subPointer += 1
    if(subPointer === subStr.length) return true
    strPointer += 1
  }
  return false
}
