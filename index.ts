import { areThereDuplicates, same, sameFrequency, validAnagram } from './frequency_counters/index'
import { transpose } from './matrix'
import { averagePair, isSubsequence, sumZero } from './multiple_pointers'
import { countUniqueValues } from './multiple_pointers/problems/countUniqueValues'
import { factorial, fib, power, productOfArray } from './recursion'
import { reverseStr } from './recursion/problems/reverse'
import { isSubsequenceSlidingWindow, maxSubarraySum } from './sliding_window'


// console.log(same([1, 2, 3, 2], [9, 1, 4, 4])) // -> true
// console.log(same([1, 2, 3], [4, 1, 9])) // -> true
// console.log(same([1, 2, 3], [1, 9])) // -> false
// console.log(same([1, 2, 3], [4, 4, 1])) // -> false. The frequency of values must be the same. 

// console.log(validAnagram('ana', 'naa')) // true
// console.log(validAnagram('rraacce', 'racecar')) // true
// console.log(validAnagram('ana', 'naar')) // false

// console.log(sumZero([-6, -4, 2, 4, 5, 7, 9, 11]))

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
// console.log(countUniqueValues([]))// 0
// console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4

// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)) // 10
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 17
// console.log(maxSubarraySum([1, 2, 5, 2, 6, 1, 5], 1)) // 6
// console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)) // 13
// console.log(maxSubarraySum([], 4)) // null


// console.log(sameFrequency(182,281)) // true
// console.log(sameFrequency(34,14)) // false
// console.log(sameFrequency(3589578, 5879385)) // true
// console.log(sameFrequency(22,222)) // false

// console.log(areThereDuplicates(1, 2, 3)) // false
// console.log(areThereDuplicates(1, 2, 2)) // true 
// console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true


// console.log("🚀 ~ file: index.ts:40 ~ averagePair:", averagePair([1,2,3],2.5))// true
// console.log("🚀 ~ file: index.ts:42 ~ averagePair:", averagePair([1,3,3,5,6,7,10,12,19],8)) // true
// console.log("🚀 ~ file: index.ts:44 ~ averagePair:", averagePair([-1,0,3,4,5,6], 4.1)) // false
// console.log("🚀 ~ file: index.ts:46 ~ averagePair:", averagePair([],4)) // false

// console.log("🚀 ~ file: index.ts:46 ~ isSubsequence:", isSubsequence('hello', 'helhello world')) // true
// console.log("🚀 ~ file: index.ts:48 ~ isSubsequence:", isSubsequence('sing', 'sting')) // true
// console.log("🚀 ~ file: index.ts:50 ~ isSubsequence:", isSubsequence('abc', 'abracadabra')) // true
// console.log("🚀 ~ file: index.ts:52 ~ isSubsequence:", isSubsequence('abc', 'acb')) // false (order matters)

// console.log("🚀 ~ file: index.ts:46 ~ isSubsequence:", isSubsequenceSlidingWindow('hello', 'helhello world')) // true
// console.log("🚀 ~ file: index.ts:48 ~ isSubsequence:", isSubsequenceSlidingWindow('sing', 'sting')) // true
// console.log("🚀 ~ file: index.ts:50 ~ isSubsequence:", isSubsequenceSlidingWindow('abc', 'abracadabra')) // true
// console.log("🚀 ~ file: index.ts:52 ~ isSubsequence:", isSubsequenceSlidingWindow('abc', 'acb')) // false (order matters)


// console.log(factorial(4)) // 24
// console.log(factorial(3)) // 6

// console.log(power(2, 4)) // 16
// console.log(power(3, 3)) // 27

// console.log(productOfArray([1,2,3])) // 6
// console.log(productOfArray([1,2,3,10])) // 60

// console.log(fib(4)) // 3
// console.log(fib(10)) // 55
// console.log(fib(28)) // 317811
// console.log(fib(35)) // 9227465

// console.log(reverseStr('rithmschool'))

const matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

console.log(transpose(matrix))