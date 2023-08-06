// ## Problem
// Write a function called **same** which accepts two arrays as input. The function should return true if every in the array has it's 
// corresponding value squared in the second array. The frequency of values must be the same.
/*
same([1, 2, 3], [4, 1, 9]) // -> true
same([1, 2, 3], [1, 9]) // -> false
same([1, 2, 3], [4, 4, 1]) // -> false. The frequency of values must be the same. 
*/
type SameInputType = Array<number>

interface FrequencyCounterType {
  [key: number]: number
}

export const same = (arr1: SameInputType, arr2: SameInputType): boolean => {
  const frequencyCounter1: FrequencyCounterType = {} // keeps track of base numbers { 1: 1, 2: 1, 3: 1 } -> loop through and check the squares of these numbers as keys in frequency counter 2
  const frequencyCounter2: FrequencyCounterType = {} // keeps track of squared numbers { 4: 2, 1: 1 }

  arr1.forEach(el => {
    if(frequencyCounter1[el]) frequencyCounter1[el] += 1
    else frequencyCounter1[el] = 0
  })
  arr2.forEach(el => {
    if(frequencyCounter2[el]) frequencyCounter1[el] += 1
    else frequencyCounter2[el] = 0
  })
  // initialize counters

  for(let key in frequencyCounter1) {
    const numberifiedKey = Number(key)
    const squaredValue = numberifiedKey ** 2
    const isSquaredValueFound = (squaredValue in frequencyCounter2) 
    if(!isSquaredValueFound) return false
    if(frequencyCounter1[key] !== frequencyCounter2[squaredValue]) return false
  }
  return true
}
