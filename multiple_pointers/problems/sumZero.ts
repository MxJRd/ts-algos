/*
Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0.
Return an array that includes both values that sum to zero or undefined if a pair does not exist.
*/
// [-5, -4, 2, 4, 5, 7, 9, 11]
export const sumZero = (sortedArray: number[]): number[] | undefined => {
  // determine the middle number
  // create pointers at first and last
  let start = 0
  let end = sortedArray.length - 1

  while(start < end) {
    const sum = sortedArray[start] + sortedArray[end]
    if(sum === 0) return [sortedArray[start], sortedArray[end]] // return the first summed values that equal 0.
    if(sum > 0) end -= 1
    if(sum < 0) start += 1
    if(end < start || start > end) return
  }

}