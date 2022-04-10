import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from 'common/components/link/Link'
import Copyright from '../common/components/copy-right/Copyright'
import { Button } from '@mui/material'

const Home: NextPage = () => {
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
    </Container>
  )
}

export default Home
