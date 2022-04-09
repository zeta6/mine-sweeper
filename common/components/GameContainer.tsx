import { Box, Container, Typography, Button } from '@mui/material'
import GameBox from './GameBox'
import Link from './link/Link'

interface GameContainerProps {
  diff: string
}

const GameContainer = ({ diff }: GameContainerProps) => (
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
    <GameBox diff={diff}></GameBox>
    <Link href="/">
      <Button>go to home</Button>
    </Link>
  </Container>
)

export default GameContainer
