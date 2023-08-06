/*
  Implement a function called countUniqueValues which accepts a sorted array and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

  countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
  countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
  countUniqueValues([]) // 0
  countUniqueValues([-2, -1, -1, 0, 1]) // 4
*/

// export const countUniqueValues = (sortedArray: number[]): number => { // IDEAL SOLUTIONS ARE HERE
//   const uniques = new Set(sortedArray) // The obvious solution.
//   // const uniques = new Map(sortedArray.map((el, idx) => [el, idx])) // maps are unique key value pairs. Each element is set as the key because it can only occur once.
//   return uniques.size
// }

/*
[1, 2, 2, 3, 3, 3, 4, 4, 5, 6]
*/

export const countUniqueValues = (sortedArray: number[]): number => { // two pointer solution
  let start = 0 // 1
  for(let next = 1; next < sortedArray.length; next += 1) {
    if(sortedArray[start] !== sortedArray[next]) {
      start += 1
      sortedArray[start] = sortedArray[next]
    }
  }
  return start + 1
}