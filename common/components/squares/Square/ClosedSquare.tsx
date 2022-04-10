import { checkBtn } from 'common/utils/game/checkBtn'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { openedSquaresState } from 'common/atoms/openedSquares'
import { flagedSquaresState } from 'common/atoms/flagedSquares'
import { userAliveState } from 'common/atoms/userAlive'
import { SetterOrUpdater, useRecoilState } from 'recoil'
import { clickCountState } from 'common/atoms/clickCount'

interface ClosedSquarePorps {
  squareIndex: number
  setOpened: (opened: boolean) => void
}

const handleSetFlag = (
  squareIndex: number,
  flagedSquares: number[],
  setFlagedSquares: SetterOrUpdater<number[]>,
  setFlag: Dispatch<SetStateAction<boolean>>
) => {
  setFlag(true)
  setFlagedSquares([...flagedSquares, squareIndex])
}

const hendleUnsetFlag = (
  squareIndex: number,
  flagedSquares: number[],
  setFlagedSquares: SetterOrUpdater<number[]>,
  setFlag: Dispatch<SetStateAction<boolean>>
) => {
  setFlag(false)
  setFlagedSquares(
    [...flagedSquares].filter((square) => square !== squareIndex)
  )
}

const ClosedSquare = ({ squareIndex, setOpened }: ClosedSquarePorps) => {
  const [openedSquares, setOpenedSquares] = useRecoilState(openedSquaresState)
  const [flagedSquares, setFlagedSquares] = useRecoilState(flagedSquaresState)
  const [clickCount, setClickCount] = useRecoilState(clickCountState)
  const [userAlive, setUserAlive] = useRecoilState(userAliveState)
  const [isFlag, setFlag] = useState(false)
  useEffect(() => {
    if (openedSquares.includes(squareIndex)) {
      !flagedSquares.includes(squareIndex) && setOpened(true)
      console.log('openedSquares', openedSquares)
    }
  }, [openedSquares])
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
      onClick={() => {
        clickCount === 0 && setUserAlive(true)
        setOpened(true)
        setOpenedSquares([...openedSquares, squareIndex])
      }}
      onMouseDown={(e) => {
        if (checkBtn(e.button)) {
          isFlag
            ? hendleUnsetFlag(
                squareIndex,
                flagedSquares,
                setFlagedSquares,
                setFlag
              )
            : handleSetFlag(
                squareIndex,
                flagedSquares,
                setFlagedSquares,
                setFlag
              )
          console.log('flagedSquares::', flagedSquares)
        }
      }}
      onContextMenu={(e) => e.preventDefault()}
    >
      {isFlag ? 'F' : ''}
    </div>
  )
}

export default ClosedSquare
