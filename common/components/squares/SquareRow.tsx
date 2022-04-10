import { Fragment } from 'react'
import Square from './Square'

interface SquareRowProps {
  squarePerRow: number
  lineIndex: number
  lineTotal: number
  mineTotal: number
  gameMode: string
}

const SquareRow = ({
  squarePerRow,
  lineIndex,
  lineTotal,
  mineTotal,
  gameMode,
}: SquareRowProps) => {
  return (
    <div style={{ width: squarePerRow * 30 }}>
      {[...Array(squarePerRow).keys()].map((num) => (
        <Square
          key={num}
          lineTotal={lineTotal}
          squareIndex={num + lineIndex * squarePerRow}
          squarePerRow={squarePerRow}
          mineTotal={mineTotal}
          gameMode={gameMode}
        ></Square>
      ))}
    </div>
  )
}

export default SquareRow
