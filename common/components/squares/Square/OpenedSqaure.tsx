import { clickCountState } from 'common/atoms/clickCount'
import { gameIdState } from 'common/atoms/gameId'
import { openedSquaresState } from 'common/atoms/openedSquares'
import { flagedSquaresState } from 'common/atoms/flagedSquares'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useEffect, useState } from 'react'
import { createGame } from 'common/utils/game/createGame'
import { trySweep } from 'common/utils/game/trySweep'
import { checkBtn } from 'common/utils/game/checkBtn'
import { getCheckList } from 'common/utils/game/getCheckList'
import { getFlagAround } from 'common/utils/game/getFlagAround'
import { userAliveState } from 'common/atoms/userAlive'

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
  const [clickCount, setClickCount] = useRecoilState(clickCountState)
  const [openedSquares, setOpenedSquares] = useRecoilState(openedSquaresState)
  const flagedSquares = useRecoilValue(flagedSquaresState)
  const [gameId, setGameID] = useRecoilState(gameIdState)
  const [userAlive, setUserAlive] = useRecoilState(userAliveState)
  const [mineAround, setMineAround] = useState(0)
  const [isLoading, setLoading] = useState(true)
  const squareTotal = squarePerRow * lineTotal
  const mineTotal = 10
  const aroundPoints = getCheckList(squareIndex, squarePerRow, squareTotal)
  const aroundFlag = getFlagAround(flagedSquares, aroundPoints)
  console.log('openedSquares:', openedSquares)
  console.log('aroundFlag', aroundFlag)
  // const [minesAround, setminesAroud] = useState(0)
  useEffect(() => {
    if (clickCount === 0) {
      setClickCount(clickCount + 1)
      console.log('clickCount', clickCount)
      const fetchData = async () => {
        const resp = await createGame(
          squareIndex,
          mineTotal,
          squareTotal,
          squarePerRow
        )
        console.log('resp', resp.data.mineAround)
        setMineAround(resp.data.mineAround)
        setGameID(resp.data.gameId)
        setLoading(false)
      }
      fetchData()
    } else if (gameId !== '') {
      setClickCount(clickCount + 1)
      console.log('clickCount', clickCount)
      const fetchData = async () => {
        const resp = await trySweep(
          squareIndex,
          squareTotal,
          squarePerRow,
          gameId,
          clickCount
        )
        setMineAround(resp.data.mineAround)
        setLoading(false)
      }
      fetchData()
    }
  }, [])

  useEffect(() => {
    mineAround === -1 && setUserAlive(false)
  }, [mineAround])
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
      onMouseDown={(e) => {
        if (checkBtn(e.button)) {
          console.log('aroundPoints', aroundPoints)
          console.log('aroundFlag', aroundFlag)
          mineAround === aroundFlag &&
            setOpenedSquares(openedSquares.concat(aroundPoints))
        }
      }}
    >
      {isLoading ? '' : mineAround === -1 ? 'M' : mineAround}
    </div>
  )
}

export default OpenedSquare
