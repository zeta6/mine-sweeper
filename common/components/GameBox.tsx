import { Box } from '@mui/material'
import SqureLine from './squares/SqureLine'

interface GameBoxProps {
  diff: string
  gameMode: string
}

interface GameDiff {
  squareRow: number
  squareLine: number
  mineTotal: number
}

interface Games {
  [index: string]: GameDiff
  easy: GameDiff
  normal: GameDiff
  hard: GameDiff
}

export const games: Games = {
  easy: {
    squareRow: 9,
    squareLine: 9,
    mineTotal: 10,
  },
  normal: {
    squareRow: 16,
    squareLine: 16,
    mineTotal: 40,
  },
  hard: {
    squareRow: 16,
    squareLine: 30,
    mineTotal: 99,
  },
}

const GameBox = ({ diff, gameMode }: GameBoxProps) => {
  console.log('diff', diff)
  return (
    <Box
      sx={{
        my: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <SqureLine
        lineTotal={games[diff].squareRow}
        squarePerRow={games[diff].squareLine}
        mineTotal={games[diff].mineTotal}
        gameMode={gameMode}
      ></SqureLine>
    </Box>
  )
}

export default GameBox
