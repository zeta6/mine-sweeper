import { Box, Container, Typography, Button } from '@mui/material'
import { clickCountState } from 'common/atoms/clickCount'
import { flagedSquresLenState } from 'common/atoms/flagedSquares'
import { openedSquaresLenState } from 'common/atoms/openedSquares'
import { userAliveState } from 'common/atoms/userAlive'
import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import GameBox from './GameBox'
interface GameContainerProps {
  squareRow: number
  squareLine: number
  mineTotal: number
  gameMode: string
}

const GameContainer = ({
  squareRow,
  squareLine,
  mineTotal,
  gameMode,
}: GameContainerProps) => {
  const squaresTotal = squareRow * squareLine
  const flagCount = useRecoilValue(flagedSquresLenState)
  const opendCount = useRecoilValue(openedSquaresLenState)
  const clickCount = useRecoilValue(clickCountState)
  const [isLoading, setLoading] = useState(true)
  const userAlive = useRecoilValue(userAliveState)
  const [time, setTime] = useState(0)
  const [notOpened, setNotOpened] = useState(squaresTotal)
  const [complete, setComplete] = useState(false)

  useEffect(() => {
    setLoading(false)
    return () => {
      window.location.reload()
    }
  }, [])
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((time) => time + 1)
    }, 1000)
    if (userAlive === false || complete === true) {
      clearInterval(timer)
    }
    return () => clearInterval(timer)
  }, [userAlive, complete])

  useEffect(() => {
    setNotOpened(squaresTotal - opendCount)
    squaresTotal - opendCount <= mineTotal && setComplete(true)
  }, [opendCount])
  return isLoading ? (
    <Container maxWidth="lg"></Container>
  ) : (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          game mode: {gameMode} <br></br>
          alive: {userAlive ? 'alive' : 'dead'} <br></br>
          time : {time}
          <br></br>
          not opened: {notOpened}
          <br></br>
          mine total : {mineTotal}
          <br></br>
          flag count : {flagCount}
          <br></br>
          complete: {complete ? 'Great. Done.' : 'Not yet'}
        </Typography>
      </Box>
      <GameBox
        squareRow={squareRow}
        squareLine={squareLine}
        gameMode={gameMode}
        mineTotal={mineTotal}
      ></GameBox>
      <div style={{ display: 'flex' }}>
        <Button
          variant="outlined"
          sx={{ margin: '0 auto' }}
          onClick={() => window.location.reload()}
        >
          New Game
        </Button>
      </div>
    </Container>
  )
}

export default GameContainer
