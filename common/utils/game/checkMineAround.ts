import { getCheckList } from './getCheckList'

export const checkMine = (point: number, mines: number[]) => {
  return mines.includes(point) ? true : false
}

export const checkMineAround = (checkList: number[], mines: number[]) => {
  let count = 0
  checkList.forEach((num) => {
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
