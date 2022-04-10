import { Box, Container, Typography, Button } from '@mui/material'
import { clickCountState } from 'common/atoms/clickCount'
import { flagedSquresLenState } from 'common/atoms/flagedSquares'
import { openedSquaresLenState } from 'common/atoms/openedSquares'
import { userAliveState } from 'common/atoms/userAlive'
import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import GameBox, { games } from './GameBox'
import Link from './link/Link'

interface GameContainerProps {
  diff: string
  gameMode: string
}

const GameContainer = ({ diff, gameMode }: GameContainerProps) => {
  const squaresTotal = games[diff].squareRow * games[diff].squareLine
  const flagCount = useRecoilValue(flagedSquresLenState)
  const opendCount = useRecoilValue(openedSquaresLenState)
  const clickCount = useRecoilValue(clickCountState)
  const [isLoading, setLoading] = useState(true)
  const userAlive = useRecoilValue(userAliveState)
  const [time, setTime] = useState(0)
  const [notOpened, setNotOpened] = useState(squaresTotal)
  const [complete, setComplete] = useState(false)
  const mineTotal = games[diff].mineTotal
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
    <Container maxWidth="lg">loading</Container>
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
      <GameBox diff={diff} gameMode={gameMode}></GameBox>
      {/* <Link href="/"> */}
      <div style={{ display: 'flex' }}>
        <Button
          variant="outlined"
          sx={{ margin: '0 auto' }}
          onClick={() => window.location.reload()}
        >
          New Game
        </Button>
      </div>
      {/* </Link> */}
    </Container>
  )
}

export default GameContainer
