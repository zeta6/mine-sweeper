import type { NextPage } from 'next'
import GameContainer from 'common/components/GameContainer'

const hard: NextPage = () => (
  <GameContainer diff="hard" gameMode="local"></GameContainer>
)

export default hard
