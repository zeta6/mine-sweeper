import type { NextPage } from 'next'
import GameContainer from 'common/components/GameContainer'

const normal: NextPage = () => (
  <GameContainer diff="normal" gameMode="server"></GameContainer>
)

export default normal
