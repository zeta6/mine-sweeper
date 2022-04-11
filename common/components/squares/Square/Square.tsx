import { useState } from 'react'

import OpenedSquare from './OpenedSqaure'
import ClosedSquare from './ClosedSquare'

// const doAttempt = (leftClickCountState: number) => {
//   if (leftClickCountState === 0) {
//     createGame()
//   }
// }

interface SquareProps {
  squareIndex: number
  lineTotal: number
  squarePerRow: number
  mineTotal: number
  gameMode: string
}

const Square = ({
  squareIndex,
  lineTotal,
  squarePerRow,
  mineTotal,
  gameMode,
}: SquareProps) => {
  const [opened, setOpened] = useState(false)
  return opened ? (
    <OpenedSquare
      lineTotal={lineTotal}
      squareIndex={squareIndex}
      squarePerRow={squarePerRow}
      mineTotal={mineTotal}
      gameMode={gameMode}
      setOpened={setOpened}
      mineAroud={''}
    ></OpenedSquare>
  ) : (
    <ClosedSquare
      setOpened={setOpened}
      squareIndex={squareIndex}
    ></ClosedSquare>
  )
}

export default Square
