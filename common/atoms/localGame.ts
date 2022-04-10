import { atom, selector } from 'recoil'
import { LocalGame } from 'common/types/LocalGame'

export const localGameState = atom<LocalGame>({
  key: 'localGameState',
  default: { mines: [] },
})

// export const openedSquaresLenState = selector({
//   key: 'openedSquaresLenState',
//   get: ({ get }) => {
//     const openedSquares = get(openedSquaresState)
//     const openedSquaresLen = openedSquares.length
//     return openedSquaresLen
//   },
// })
