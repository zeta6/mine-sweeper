import { Box } from '@mui/material'
import SqureLine from './squares/SqureLine'

interface GameBoxProps {
  squareRow: number
  squareLine: number
  mineTotal: number
  gameMode: string
}

const GameBox = ({
  squareRow,
  squareLine,
  mineTotal,
  gameMode,
}: GameBoxProps) => {
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
        lineTotal={squareLine}
        squarePerRow={squareRow}
        mineTotal={mineTotal}
        gameMode={gameMode}
      ></SqureLine>
    </Box>
  )
}

export default GameBox
