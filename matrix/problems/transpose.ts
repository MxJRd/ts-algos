// Input: matrix = 
// [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// Output: [
//     [1,4,7],
//     [2,5,8],
//     [3,6,9]
// ]

export const transpose = (matrix: Array<number[]>) => {
  return matrix[0].map((_, colIdx) => { // [1, 2, 3]
    return matrix.map((row, _) => {
      return row[colIdx]
    })
  })
}

