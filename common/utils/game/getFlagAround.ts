export const getFlagAround = (
  flagedSqures: number[],
  // openedSquaresState: number[],
  checkList: number[]
) => {
  let count = 0
  checkList.forEach((square) => {
    if (flagedSqures.includes(square)) {
      count = count + 1
    }
  })
  return count
}
