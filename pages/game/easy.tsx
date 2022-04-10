import type { NextPage } from 'next'
import GameContainer from 'common/components/GameContainer'

const easy: NextPage = () => (
  <GameContainer diff="easy" gameMode="server"></GameContainer>
)

export default easy
