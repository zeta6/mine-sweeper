import axios from 'axios'

export const createGame = async (
  firstIndex: number,
  mineTotal: number,
  squareTotal: number,
  squarePerRow: number
) => {
  const result = await axios.post('/api/createGame', {
    firstIndex: firstIndex,
    mineTotal: mineTotal,
    squareTotal: squareTotal,
    squarePerRow: squarePerRow,
  })
  return result
}
