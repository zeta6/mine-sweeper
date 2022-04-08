import { Fragment } from 'react'
import SquareRow from './SquareRow'

interface SquareLineProps {
  lineNumber: number
  squarePerRow: number
}

const SqureLine = (props: SquareLineProps) => {
  return (
    <Fragment>
      {[...Array(props.lineNumber)].map((num, index) => (
        <SquareRow key={index} squarePerRow={props.squarePerRow}></SquareRow>
      ))}
    </Fragment>
  )
}

export default SqureLine
