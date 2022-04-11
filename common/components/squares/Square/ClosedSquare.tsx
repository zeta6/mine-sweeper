import { checkBtn } from 'common/utils/game/checkBtn'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { openedSquaresState } from 'common/atoms/openedSquares'
import { flagedSquaresState } from 'common/atoms/flagedSquares'
import { userAliveState } from 'common/atoms/userAlive'
import { SetterOrUpdater, useRecoilState } from 'recoil'
import { clickCountState } from 'common/atoms/clickCount'
import { styled } from '@mui/material/styles'
import { FlagIcon } from 'common/components/icons/FlagIcon'

const ColosedSqaure = styled('div')({
  width: '28px',
  height: '28px',
  backgroundColor: '#aaaaaa',
  border: 'black solid 2px',
  display: 'table-cell',
  cursor: 'pointer',
})

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
    }
  }, [openedSquares])
  return (
    <ColosedSqaure
      onClick={() => {
        if (clickCount === 0) {
          setUserAlive(true)
          setOpened(true)
          setOpenedSquares([...openedSquares, squareIndex])
        } else if (userAlive) {
          setOpened(true)
          setOpenedSquares([...openedSquares, squareIndex])
        }
      }}
      onMouseDown={(e) => {
        if (userAlive) {
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
          }
        }
      }}
      onContextMenu={(e) => e.preventDefault()}
    >
      {isFlag ? <FlagIcon></FlagIcon> : ''}
    </ColosedSqaure>
  )
}

export default ClosedSquare
