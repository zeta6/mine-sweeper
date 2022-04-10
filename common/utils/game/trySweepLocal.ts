import { LocalGame } from 'common/types/LocalGame'
import { checkMineAround } from './checkMineAround'

export const trySweepLocal = (
  index: number,
  aroundPoints: number[],
  localGame: LocalGame
) => {
  const mines = localGame.mines
  if (mines.includes(index)) {
    const mineAround = -1
    return mineAround
  }
  const mineAround: number = checkMineAround(aroundPoints, mines)
  return mineAround
}
