// const _total = 81
// const perRow = 9
// const totalLine = 9

import { getCheckList } from './getCheckList'

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
