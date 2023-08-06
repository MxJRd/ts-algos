// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

//     areThereDuplicates(1, 2, 3) // false
//     areThereDuplicates(1, 2, 2) // true 
//     areThereDuplicates('a', 'b', 'c', 'a') // true

type AreThereDuplicatesArgs = Array<string | number>

interface FrequencyCounterType {
  [key: string]: number
}

export const areThereDuplicates = (...args: AreThereDuplicatesArgs): boolean => {
  const frequencyCounter: FrequencyCounterType = {}
  for(const el of args) {
    frequencyCounter[el] = (frequencyCounter[el] ?? 0) + 1
  }

  for(const key in frequencyCounter) {
    if(frequencyCounter[key] > 1) return true
  }
  return false
}
