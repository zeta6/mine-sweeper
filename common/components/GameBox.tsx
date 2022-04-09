import { Box } from '@mui/material'
import SqureLine from './squares/SqureLine'

interface GameBoxProps {
  diff: string
}

interface GameDiff {
  squareRow: number
  squareLine: number
}

interface Games {
  [index: string]: GameDiff
  easy: GameDiff
  normal: GameDiff
  hard: GameDiff
}

const games: Games = {
  easy: {
    squareRow: 9,
    squareLine: 9,
  },
  normal: {
    squareRow: 16,
    squareLine: 16,
  },
  hard: {
    squareRow: 16,
    squareLine: 30,
  },
}

const GameBox = ({ diff }: GameBoxProps) => {
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
      ></SqureLine>
    </Box>
  )
}

export default GameBox
