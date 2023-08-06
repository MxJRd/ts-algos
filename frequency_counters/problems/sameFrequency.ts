// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

interface FrequencyType {
  [key: string]: number
}

export const sameFrequency = (x: number, y: number): boolean => {
  const frequency1: FrequencyType = {}
  const frequency2: FrequencyType = {}
  const firstNum = x.toString()
  const secNum = y.toString()

  for(const digit of firstNum) {
    if(frequency1[digit]) frequency1[digit] += 1
    else {
      frequency1[digit] = 1
    }
  }

  for(const digit of secNum) {
    if(frequency2[digit]) frequency2[digit] += 1
    else {
      frequency2[digit] = 1
    }
  }

  for(const key in frequency1) {
    if(!(key in frequency2)) return false
    if(frequency1[key] !== frequency2[key]) return false
  }

  return true
}
