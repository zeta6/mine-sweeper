import * as React from 'react'
import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from 'common/components/link/Link'
// import Copyright from '../common/components/copy-right/Copyright'
import { Button } from '@mui/material'
import SqureLine from 'common/components/squares/SqureLine'

const squreRow = 10
const squreLine = 10
// const SmallSquareTotal: number = 10

const TempGame: NextPage = () => {
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
        <Typography variant="h4" component="h1" gutterBottom></Typography>
      </Box>
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
          lineTotal={squreRow}
          squarePerRow={squreLine}
          mineTotal={0}
        ></SqureLine>
      </Box>
      <Link href="/">
        <Button>go to home</Button>
      </Link>
    </Container>
  )
}

export default TempGame
