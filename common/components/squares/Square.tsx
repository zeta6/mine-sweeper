import axios from 'axios'
import { leftClickCountState } from 'common/atoms/clickCount'
import { createGame } from 'common/utils/game/createGame'

const doAttempt = (leftClickCountState: number) => {
  if (leftClickCountState === 0) {
    createGame()
  }
}
const Square = () => (
  <div
    style={{
      width: '20px',
      height: '20px',
      backgroundColor: 'red',
      border: 'black solid 2px',
      display: 'table-cell',
    }}
    onClick={() => doAttempt(0)}
  ></div>
)

export default Square
