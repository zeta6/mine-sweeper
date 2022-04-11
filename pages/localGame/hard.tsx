import type { NextPage } from 'next'
import GameContainer from 'common/components/GameContainer'

import { hard as gameConfig } from 'common/config/standardGame'

const hard: NextPage = () => (
  <GameContainer
    gameMode="local"
    squareRow={gameConfig.squareRow}
    squareLine={gameConfig.squareLine}
    mineTotal={gameConfig.mineTotal}
  ></GameContainer>
)

export default hard
