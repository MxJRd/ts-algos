// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
// Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1,
// and where every number thereafter is equal to the sum of the previous two numbers.

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

export const fib = (num: number, cache: { [key:string]: number} = {}): number => {
  if(num <= 2) return 1
  if(cache[num]) return cache[num]

  return cache[num] = fib(num - 1, cache) + fib(num - 2, cache)
}