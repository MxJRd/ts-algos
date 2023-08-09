// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

export const productOfArray = (numbers: number[], idx: number = 0, product: number = 1): number => {
  // track the index of the array.
    // declare idx
  // track the product of all numbers
    // declare product as 1
  if(idx >= numbers.length) return product
  /* WORK */
  // repeat ->
  // multiply current item with product
  return productOfArray(numbers, idx + 1, product * numbers[idx])
}