import { Box } from '@mui/material'
import SqureLine from './squares/SqureLine'
import { GameProps } from 'common/types/GameProps'
const GameBox = ({ squareRow, squareLine, mineTotal, gameMode }: GameProps) => {
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
