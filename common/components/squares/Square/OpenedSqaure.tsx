import { clickCountState } from 'common/atoms/clickCount'
import { gameIdState } from 'common/atoms/gameId'
import { openedSquaresState } from 'common/atoms/openedSquares'
import { flagedSquaresState } from 'common/atoms/flagedSquares'
import { useRecoilState, useRecoilValue } from 'recoil'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { createGame } from 'common/utils/game/createGame'
import { createGameLocal } from 'common/utils/game/createGameLocal'
import { trySweep } from 'common/utils/game/trySweep'
import { trySweepLocal } from 'common/utils/game/trySweepLocal'
import { checkBtn } from 'common/utils/game/checkBtn'
import { getCheckList } from 'common/utils/game/getCheckList'
import { getFlagAround } from 'common/utils/game/getFlagAround'
import { userAliveState } from 'common/atoms/userAlive'
import { localGameState } from 'common/atoms/localGame'
import OpenedSquareInside from './OpenedSquareInside'
import { styled } from '@mui/material/styles'

const OpenedSqaure = styled('div', {
  shouldForwardProp: (prop) => prop !== 'color',
})(() => ({
  width: '28px',
  height: '28px',
  backgroundColor: '#dddddd',
  border: 'black solid 2px',
  display: 'table-cell',
  cursor: 'pointer',
  textAlign: 'center',
  padding: 0,
}))

interface OpenedSqaureProps {
  squareIndex: number
  lineTotal: number
  squarePerRow: number
  mineTotal: number
  gameMode: string
  setOpened: Dispatch<SetStateAction<boolean>>
  mineAroud: string | number
}

const OpenedSquare = ({
  squareIndex,
  squarePerRow,
  lineTotal,
  mineTotal,
  gameMode,
  setOpened,
}: OpenedSqaureProps) => {
  const [clickCount, setClickCount] = useRecoilState(clickCountState)
  const [openedSquares, setOpenedSquares] = useRecoilState(openedSquaresState)
  const flagedSquares = useRecoilValue(flagedSquaresState)
  const [gameId, setGameID] = useRecoilState(gameIdState)
  const [userAlive, setUserAlive] = useRecoilState(userAliveState)
  const [localGame, setLocalGame] = useRecoilState(localGameState)
  const [mineAround, setMineAround] = useState(-9)
  const [isLoading, setLoading] = useState(true)
  const squareTotal = squarePerRow * lineTotal
  const aroundPoints = getCheckList(squareIndex, squarePerRow, squareTotal)
  const aroundFlag = getFlagAround(flagedSquares, aroundPoints)
  // const [minesAround, setminesAroud] = useState(0)
  useEffect(() => {
    if (gameMode === 'server') {
      if (clickCount === 0) {
        setClickCount(clickCount + 1)
        const fetchData = async () => {
          const resp = await createGame(
            squareIndex,
            mineTotal,
            squareTotal,
            aroundPoints
          )
          setMineAround(resp.data.mineAround)
          setGameID(resp.data.gameId)
          setLoading(false)
        }
        fetchData()
      } else if (gameId !== '') {
        setClickCount(clickCount + 1)
        const fetchData = async () => {
          const resp = await trySweep(
            squareIndex,
            squareTotal,
            squarePerRow,
            gameId,
            clickCount,
            aroundPoints
          )
          setMineAround(resp.data.mineAround)
          setLoading(false)
        }
        fetchData()
      }
    } else {
      if (clickCount === 0) {
        setClickCount(clickCount + 1)
        const _mineAround = createGameLocal(
          squareIndex,
          mineTotal,
          squareTotal,
          aroundPoints,
          setLocalGame
        )
        setMineAround(_mineAround)
        setLoading(false)
      } else {
        setClickCount(clickCount + 1)
        const _mineAround = trySweepLocal(squareIndex, aroundPoints, localGame)
        setMineAround(_mineAround)
        setLoading(false)
      }
    }
  }, [])

  useEffect(() => {
    mineAround === -1 && setUserAlive(false)
  }, [mineAround])

  useEffect(() => {
    if (!openedSquares.includes(squareIndex)) {
      setOpened(false)
    }
  }, [openedSquares])
  return (
    <OpenedSqaure
      sx={{ background: mineAround === -1 ? 'red' : '#dddddd' }}
      onContextMenu={(e) => e.preventDefault()}
      onMouseDown={(e) => {
        if (checkBtn(e.button) && userAlive) {
          if (mineAround === aroundFlag) {
            const setArr = new Set(
              openedSquares
                .concat(aroundPoints)
                .filter((point) => !flagedSquares.includes(point))
            )
            setOpenedSquares([...setArr])
          }
        }
      }}
    >
      <OpenedSquareInside
        mineAround={isLoading ? '' : mineAround === -1 ? 'M' : mineAround}
      ></OpenedSquareInside>
    </OpenedSqaure>
  )
}

export default OpenedSquare
