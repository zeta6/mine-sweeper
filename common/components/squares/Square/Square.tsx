import axios from 'axios'
import { clickCountState } from 'common/atoms/clickCount'
import { createGame } from 'common/utils/game/createGame'
import { Component, SetStateAction, useState } from 'react'

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
}

const Square = ({ squareIndex, lineTotal, squarePerRow }: SquareProps) => {
  const [opened, setOpened] = useState(false)
  return opened ? (
    <OpenedSquare
      lineTotal={lineTotal}
      squareIndex={squareIndex}
      squarePerRow={squarePerRow}
    ></OpenedSquare>
  ) : (
    <ClosedSquare setOpened={setOpened}></ClosedSquare>
  )
}
//     <div
//       style={{
//         width: '20px',
//         height: '20px',
//         backgroundColor: 'red',
//         border: 'black solid 2px',
//         display: 'table-cell',
//       }}
//       onClick={() => doAttempt(0)}
//     ></div>
//   )
// }

export default Square
