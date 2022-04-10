// const _total = 81
// const perRow = 9
// const totalLine = 9

export const getCheckList = (
  point: number,
  perRow: number,
  total: number
): number[] => {
  let checkList: number[] = []
  if (point === 0) {
    checkList = [point + 1, point + perRow, point + perRow + 1]
  } else if (point === perRow - 1) {
    checkList = [point - 1, point + perRow - 1, point + perRow]
  } else if (point === total - 1) {
    checkList = [point - 1 - perRow, point - perRow, point - 1]
  } else if (point === total - perRow) {
    checkList = [point - perRow, point + 1 - perRow, point + 1]
    // 최상단
  } else if (point < perRow - 1) {
    checkList = [
      point - 1,
      point + 1,
      point - 1 + perRow,
      point + perRow,
      point + 1 + perRow,
    ]
    // 최하단
  } else if (point > total - perRow) {
    checkList = [
      point - 1 - perRow,
      point - perRow,
      point + 1 - perRow,
      point - 1,
      point + 1,
    ]
    // 최좌측
  } else if (point % perRow === 0) {
    checkList = [
      point - perRow,
      point + 1 - perRow,
      point + 1,
      point + perRow,
      point + 1 + perRow,
    ]
    // 최우측
  } else if ((point + 1) % perRow === 0) {
    checkList = [
      point - 1 - perRow,
      point - perRow,
      point - 1,
      point - 1 + perRow,
      point + perRow,
    ]
    // 나머지
  } else {
    checkList = [
      point - perRow - 1,
      point - perRow,
      point - perRow + 1,
      point - 1,
      point + 1,
      point + perRow - 1,
      point + perRow,
      point + perRow + 1,
    ]
  }
  return checkList
}

export const checkMine = (point: number, mines: number[]) => {
  return mines.includes(point) ? true : false
}

export const checkMineAround = (checkList: number[], mines: number[]) => {
  let count = 0
  console.log('checkList', checkList)
  console.log('mines', mines)
  checkList.forEach((num) => {
    console.log('num', num)
    console.log(mines.includes(num))
    if (mines.includes(num)) count = count + 1
  })
  return count
}

export const checkAroundMine = (
  point: number,
  perRow: number,
  totalLine: number
) => {
  const total = perRow * totalLine
  const checkList = getCheckList(point, perRow, total)
  return checkList
}
