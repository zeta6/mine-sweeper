import type { NextPage } from 'next'
import GameContainer from 'common/components/GameContainer'

const easy: NextPage = () => (
  <GameContainer diff="easy" gameMode="local"></GameContainer>
)

export default easy
