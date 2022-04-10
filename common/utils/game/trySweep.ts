import axios from 'axios'

export const trySweep = async (
  index: number,
  squareTotal: number,
  squarePerRow: number,
  gameId: string
) => {
  const result = await axios.post('/api/trySweep', {
    index: index,
    squareTotal: squareTotal,
    squarePerRow: squarePerRow,
    gameId: gameId,
  })
  return result
}
