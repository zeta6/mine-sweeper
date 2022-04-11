import type { NextPage } from 'next'
import GameContainer from 'common/components/GameContainer'

import { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'

const Custom: NextPage = () => {
  const [gameConfig, setGameConfig] = useState({
    squareRow: NaN,
    squareLine: NaN,
    mineTotal: NaN,
  })
  const [ready, setReady] = useState(false)
  return ready ? (
    <GameContainer
      gameMode="local"
      squareRow={gameConfig.squareRow}
      squareLine={gameConfig.squareLine}
      mineTotal={gameConfig.mineTotal}
    ></GameContainer>
  ) : (
    <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, mt: 10, width: '25ch' },
          display: 'flex',
          justifyContent: 'center',
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="square per row max=40"
          color="secondary"
          type="number"
          onChange={(e) =>
            setGameConfig({
              ...gameConfig,
              squareRow: parseInt(e.target.value),
            })
          }
          focused
        />
        <TextField
          label="line length max=30"
          color="secondary"
          type="number"
          onChange={(e) =>
            setGameConfig({
              ...gameConfig,
              squareLine: parseInt(e.target.value),
            })
          }
          focused
        />
        <TextField
          label="mine total"
          color="secondary"
          type="number"
          onChange={(e) =>
            setGameConfig({
              ...gameConfig,
              mineTotal: parseInt(e.target.value),
            })
          }
          focused
        />
      </Box>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, mt: 10, width: '25ch' },
          display: 'flex',
          justifyContent: 'center',
        }}
        noValidate
        autoComplete="off"
      >
        <Button
          variant="outlined"
          onClick={() => {
            if (
              gameConfig.squareRow === NaN ||
              gameConfig.squareRow < 1 ||
              gameConfig.squareRow > 40 ||
              gameConfig.squareLine === NaN ||
              gameConfig.squareLine < 1 ||
              gameConfig.squareLine > 30 ||
              gameConfig.mineTotal === NaN ||
              gameConfig.mineTotal < 1
            ) {
              alert('Invalid value entered')
            } else {
              setReady(true)
            }
          }}
        >
          Make Custom Game
        </Button>
      </Box>
    </>
  )
}

export default Custom
