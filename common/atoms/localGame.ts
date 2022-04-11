import { atom } from 'recoil'
import { LocalGame } from 'common/types/LocalGame'

export const localGameState = atom<LocalGame>({
  key: 'localGameState',
  default: { mines: [] },
})
