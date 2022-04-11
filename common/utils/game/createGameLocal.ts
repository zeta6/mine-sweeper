import { LocalGame } from 'common/types/LocalGame'

import { getMines } from 'common/utils/game/getMines'
import { SetterOrUpdater } from 'recoil'
import { checkMineAround } from './checkMineAround'

export const createGameLocal = (
  firstIndex: number,
  mineTotal: number,
  squareTotal: number,
  aroundPoints: number[],
  setLocalGame: SetterOrUpdater<LocalGame>
) => {
  const mines = getMines(firstIndex, mineTotal, squareTotal)
  setLocalGame({
    mines: mines,
  })
  const mineAround: number = checkMineAround(aroundPoints, mines)
  return mineAround
}
