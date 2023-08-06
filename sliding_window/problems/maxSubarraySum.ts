/*
Write a function called maxSubarraySum which accepts an array of integers and a number, n. The function should calculate the maximum sum of n consecutive elements in the array.
*/

export const maxSubarraySum = (arr: number[], n: number) => {
  let start = 0
  let currSum = 0
  let maxSum = 0

  for(let next = 0; next < arr.length; next += 1) {
    currSum += arr[next]
    if(next >= n) { // when end of window is greater than windowSize
      currSum -= arr[start]
      start += 1
    }
    if(currSum > maxSum) {
      maxSum = currSum
    }
  }
  return maxSum
}