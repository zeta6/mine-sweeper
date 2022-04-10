import { clickCountState } from 'common/atoms/clickCount'
import { gameIdState } from 'common/atoms/gameId'
import { useRecoilState } from 'recoil'
import { useEffect, useState } from 'react'
import { checkAroundMine } from 'common/utils/game/checkAroundMine'
import { createGame } from 'common/utils/game/createGame'
import { trySweep } from 'common/utils/game/trySweep'

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
  const [gameId, setGameID] = useRecoilState(gameIdState)
  const [mineAround, setMineAround] = useState(0)
  const [isLoading, setLoading] = useState(true)
  const squareTotal = squarePerRow * lineTotal
  const mineTotal = 10
  const num = 0
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
    } else {
      setClickCount(clickCount + 1)
      console.log('clickCount', clickCount)
      const fetchData = async () => {
        const resp = await trySweep(
          squareIndex,
          squareTotal,
          squarePerRow,
          gameId
        )
        console.log('resp', resp.data.mineAround)
        setMineAround(resp.data.mineAround)
        setLoading(false)
      }
      fetchData()
    }
  }, [])
  const check = checkAroundMine(squareIndex, squarePerRow, lineTotal)
  console.log('check', check)
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
    >
      {isLoading ? '' : mineAround === -1 ? 'M' : mineAround}
    </div>
  )
}

export default OpenedSquare
