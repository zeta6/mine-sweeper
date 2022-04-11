import type { NextPage } from 'next'
import GameContainer from 'common/components/GameContainer'

import { easy as gameConfig } from 'common/config/standardGame'

const easy: NextPage = () => (
  <GameContainer
    gameMode="server"
    squareRow={gameConfig.squareRow}
    squareLine={gameConfig.squareLine}
    mineTotal={gameConfig.mineTotal}
  ></GameContainer>
)

export default easy
