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
