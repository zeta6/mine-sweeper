import { getRandomInt } from 'common/utils/game/getRandomInt'

export const getMines = (
  firstIndex: number,
  mineTotal: number,
  squareTotal: number
): Array<number> => {
  let mineCount = 0
  const mines: number[] = []
  while (mineCount < mineTotal) {
    const mine = getRandomInt(0, squareTotal)
    if (!mines.includes(mine) && mine !== firstIndex) {
      mines.push(mine)
      mineCount = mineCount + 1
    }
  }
  return mines
}
