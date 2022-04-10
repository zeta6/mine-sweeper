import { Fragment } from 'react'
import SquareRow from './SquareRow'

interface SquareLineProps {
  lineTotal: number
  squarePerRow: number
  mineTotal: number
  gameMode: string
}

const SqureLine = ({
  lineTotal,
  squarePerRow,
  mineTotal,
  gameMode,
}: SquareLineProps) => {
  return (
    <Fragment>
      {[...Array(lineTotal).keys()].map((numb: number, index) => {
        return (
          <SquareRow
            key={index}
            lineTotal={lineTotal}
            lineIndex={numb}
            squarePerRow={squarePerRow}
            mineTotal={mineTotal}
            gameMode={gameMode}
          ></SquareRow>
        )
      })}
    </Fragment>
  )
}

export default SqureLine
