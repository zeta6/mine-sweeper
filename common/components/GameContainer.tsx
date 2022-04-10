import { Box, Container, Typography, Button } from '@mui/material'
import { clickCountState } from 'common/atoms/clickCount'
import { userAliveState } from 'common/atoms/userAlive'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import GameBox from './GameBox'
import Link from './link/Link'

interface GameContainerProps {
  diff: string
}

const GameContainer = ({ diff }: GameContainerProps) => {
  const [isLoading, setLoading] = useState(true)
  const clickCount = useRecoilValue(clickCountState)
  const userAlive = useRecoilValue(userAliveState)
  const [time, setTime] = useState(0)
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
    console.log('userAlive', userAlive)
    if (userAlive === false) {
      clearInterval(timer)
      setTime(0)
    }
    return () => clearInterval(timer)
  }, [userAlive])
  return isLoading ? (
    'loading'
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
          alive: {userAlive ? 'alive' : 'dead'} <br></br>
          time : {time}
        </Typography>
      </Box>
      <GameBox diff={diff}></GameBox>
      <Link href="/">
        <Button>go to home</Button>
      </Link>
    </Container>
  )
}

export default GameContainer
