import { atom } from 'recoil'

export const openedSquaresState = atom<number[]>({
  key: 'openedSquaresState',
  default: [],
})
