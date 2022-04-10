import { Fragment } from 'react'
import SquareRow from './SquareRow'

interface SquareLineProps {
  lineTotal: number
  squarePerRow: number
  mineTotal: number
}

const SqureLine = ({ lineTotal, squarePerRow, mineTotal }: SquareLineProps) => {
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
          ></SquareRow>
        )
      })}
    </Fragment>
  )
}

export default SqureLine
