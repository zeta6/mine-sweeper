import { StandardGame } from 'common/types/StandardGame'

export const easy: StandardGame = {
  squareRow: 9,
  squareLine: 9,
  mineTotal: 10,
}

export const normal: StandardGame = {
  squareRow: 16,
  squareLine: 16,
  mineTotal: 40,
}

export const hard: StandardGame = {
  squareRow: 30,
  squareLine: 16,
  mineTotal: 99,
}
