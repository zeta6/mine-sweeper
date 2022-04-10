import * as React from 'react'
import { useRouter } from 'next/router'
import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from 'common/components/link/Link'
import Copyright from '../common/components/copy-right/Copyright'
import { Button } from '@mui/material'
import axios from 'axios'

import { getMines } from 'common/utils/game/getMines'
import { createGame } from 'common/utils/game/createGame'

const minesTotal = 20
const squreRow = 10
const squreLine = 10

// const apiTest = async () => {
// const num = await createGame()
// console.log('num', num)
// const result = await axios.post('/api/test', {
//   mineTotal: minesTotal,
//   squareTotal: squreRow * squreLine,
// })
// console.log('result', result)
// const mmm = getMines(1, 20, 30)
// console.log('mmm', mmm)
// }

const Home: NextPage = () => {
  // const router = useRouter()
  // React.useEffect(() => {
  //   router.push('/tempGame')
  // }, [router])

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
        <Typography variant="h4" component="h1" gutterBottom>
          mine-sweeper
        </Typography>
        <Copyright />
      </Box>
      {/* <Button onClick={() => apiTest()}> test </Button> */}
      <Link href="/tempGame">
        <Button>test game page</Button>
      </Link>
    </Container>
  )
}

export default Home
