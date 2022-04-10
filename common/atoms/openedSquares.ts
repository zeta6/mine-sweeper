import { atom, selector } from 'recoil'

export const openedSquaresState = atom<number[]>({
  key: 'openedSquaresState',
  default: [],
})

export const openedSquaresLenState = selector({
  key: 'openedSquaresLenState',
  get: ({ get }) => {
    const openedSquares = get(openedSquaresState)
    const openedSquaresLen = openedSquares.length
    return openedSquaresLen
  },
})
