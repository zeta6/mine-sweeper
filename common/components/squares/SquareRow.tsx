import { Fragment } from 'react'
import Square from './Square'

interface SquareRowProps {
  squarePerRow: number
}

const SquareRow = (props: SquareRowProps) => {
  return (
    <div style={{ width: props.squarePerRow * 20 }}>
      {[...Array(props.squarePerRow).keys()].map(() => (
        <Square></Square>
      ))}
    </div>
  )
}

export default SquareRow
