import {
  Box,
  Container,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
  styled,
} from '@mui/material'
import { clickCountState } from 'common/atoms/clickCount'
import {
  flagedSquaresState,
  flagedSquresLenState,
} from 'common/atoms/flagedSquares'
import {
  openedSquaresLenState,
  openedSquaresState,
} from 'common/atoms/openedSquares'
import { userAliveState } from 'common/atoms/userAlive'
import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import GameBox from './GameBox'
import { GameProps } from 'common/types/GameProps'
import { gameIdState } from 'common/atoms/gameId'

const LabelCell = styled(TableCell)({
  background: '#cccccc',
})

const initialState = {
  clickCount: 0,
  flagedSquares: [],
  openedSquares: [],
  gameId: '',
  userAlive: false,
}

const GameContainer = ({
  squareRow,
  squareLine,
  mineTotal,
  gameMode,
}: GameProps) => {
  const squaresTotal = squareRow * squareLine
  const flagCount = useRecoilValue(flagedSquresLenState)
  const openedCount = useRecoilValue(openedSquaresLenState)
  const setFlagedSquares = useSetRecoilState(flagedSquaresState)
  const setOpenedSquares = useSetRecoilState(openedSquaresState)
  const setGameId = useSetRecoilState(gameIdState)
  const [clickCount, setClickCount] = useRecoilState(clickCountState)
  const [userAlive, setUserAlive] = useRecoilState(userAliveState)
  const [time, setTime] = useState(0)
  const [notOpened, setNotOpened] = useState(squaresTotal)
  const [complete, setComplete] = useState(false)
  const [helpText, setHelpText] = useState(false)

  useEffect(() => {
    return () => {
      setFlagedSquares(initialState.flagedSquares)
      setOpenedSquares(initialState.openedSquares)
      setClickCount(initialState.clickCount)
      setUserAlive(initialState.userAlive)
      setGameId(initialState.gameId)
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
    setNotOpened(squaresTotal - openedCount)
    squaresTotal - openedCount <= mineTotal && userAlive && setComplete(true)
  }, [openedCount])
  return (
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
        <Table sx={{ width: 400, border: '2px solid black' }}>
          <TableBody>
            <TableRow>
              <LabelCell>mode</LabelCell>
              <TableCell>{gameMode}</TableCell>
              <LabelCell>time</LabelCell>
              <TableCell>{time}</TableCell>
            </TableRow>
            <TableRow>
              <LabelCell>alive</LabelCell>
              <TableCell>{userAlive ? 'alive' : 'dead'}</TableCell>
              <LabelCell>complete</LabelCell>
              <TableCell>{complete ? 'great. done.' : 'not yet'}</TableCell>
            </TableRow>
            <TableRow>
              <LabelCell>square total</LabelCell>
              <TableCell>{squaresTotal}</TableCell>
              <LabelCell>not opened</LabelCell>
              <TableCell>{notOpened}</TableCell>
            </TableRow>
            <TableRow>
              <LabelCell>mine total</LabelCell>
              <TableCell>{mineTotal}</TableCell>
              <LabelCell>flag count</LabelCell>
              <TableCell>{flagCount}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
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
      <div style={{ display: 'flex' }}>
        <Button
          variant="outlined"
          sx={{ margin: '0 auto', mt: '10px' }}
          onClick={() => {
            setHelpText(!helpText)
          }}
        >
          ?
        </Button>
      </div>
      <Typography
        variant="h5"
        gutterBottom
        component="div"
        sx={{
          mt: '20px',
          textAlign: 'center',
          display: helpText ? '' : 'none',
        }}
      >
        우클릭으로 주변 오픈과 깃발 설정이 가능합니다. <br></br>
        server 모드에서는 브라우저로 mine 좌표가 전달되지 않습니다.
      </Typography>
    </Container>
  )
}

export default GameContainer
