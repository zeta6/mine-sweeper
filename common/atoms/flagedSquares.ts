import { atom, selector } from 'recoil'

export const flagedSquaresState = atom<number[]>({
  key: 'flagedSquaresState',
  default: [],
})

export const flagedSquresLenState = selector({
  key: 'flagedSquresLenState',
  get: ({ get }) => {
    const flagedSquares = get(flagedSquaresState)
    const flagedSquaresLen = flagedSquares.length

    return flagedSquaresLen
  },
})
