import type { NextPage } from 'next'
import GameContainer from 'common/components/GameContainer'

import { normal as gameConfig } from 'common/config/standardGame'

const normal: NextPage = () => (
  <GameContainer
    gameMode="local"
    squareRow={gameConfig.squareRow}
    squareLine={gameConfig.squareLine}
    mineTotal={gameConfig.mineTotal}
  ></GameContainer>
)

export default normal
