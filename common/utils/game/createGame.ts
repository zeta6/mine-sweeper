import axios from 'axios'

export const createGame = async (
  firstIndex: number,
  mineTotal: number,
  squareTotal: number,
  aroundPoints: number[]
) => {
  const result = await axios.post('/api/createGame', {
    firstIndex: firstIndex,
    mineTotal: mineTotal,
    squareTotal: squareTotal,
    aroundPoints: aroundPoints,
  })
  return result
}
