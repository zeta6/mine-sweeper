import { checkBtn } from 'common/utils/game/checkBtn'
import { useState } from 'react'

interface ClosedSquarePorps {
  setOpened: (opened: boolean) => void
}

const ClosedSquare = ({ setOpened }: ClosedSquarePorps) => {
  const [flag, setFlag] = useState(false)
  return (
    <div
      style={{
        width: '28px',
        height: '28px',
        backgroundColor: 'white',
        border: 'black solid 2px',
        display: 'table-cell',
        cursor: 'pointer',
      }}
      onClick={() => setOpened(true)}
      onMouseDown={(e) => checkBtn(e.button) && setFlag(!flag)}
      onContextMenu={(e) => e.preventDefault()}
    >
      {flag ? 'F' : ''}
    </div>
  )
}

export default ClosedSquare
