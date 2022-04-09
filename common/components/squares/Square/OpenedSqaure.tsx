import { checkBtn } from 'common/utils/game/checkBtn'
import { leftClickCountState } from 'common/atoms/clickCount'
import { useRecoilState } from 'recoil'
import axios from 'axios'
import { useEffect } from 'react'
import { checkAroundMine } from 'common/utils/game/checkAroundMine'

interface OpenedSqaureProps {
  squareIndex: number
  lineTotal: number
  squarePerRow: number
}

const OpenedSquare = ({
  squareIndex,
  squarePerRow,
  lineTotal,
}: OpenedSqaureProps) => {
  console.log('squareIndex', squareIndex)
  const check = checkAroundMine(squareIndex, squarePerRow, lineTotal)
  console.log('check', check)

  const [leftClickCnt, setLeftClickCnt] = useRecoilState(leftClickCountState)
  // useEffect(() => {
  //   if (leftClickCnt === 0) {
  //     axios.post('/api/newGame')
  //     setLeftClickCnt(leftClickCnt + 1)
  //   } else {
  //     axios.post('api/mineCheck')
  //     setLeftClickCnt(leftClickCnt + 1)
  //   }
  // }, [leftClickCnt, setLeftClickCnt])
  return (
    <div
      style={{
        width: '28px',
        height: '28px',
        backgroundColor: 'red',
        border: 'black solid 2px',
        display: 'table-cell',
      }}
      // onMouseDown={(e) => console.log(setFlag(e.button))}
      onContextMenu={(e) => e.preventDefault()}
    ></div>
  )
}

export default OpenedSquare
