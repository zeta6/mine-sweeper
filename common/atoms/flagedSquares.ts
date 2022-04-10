import { atom } from 'recoil'

export const flagedSquaresState = atom<number[]>({
  key: 'flagedSquaresState',
  default: [],
})
