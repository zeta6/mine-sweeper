import axios from 'axios'

export const trySweep = async (
  index: number,
  squareTotal: number,
  squarePerRow: number,
  gameId: string,
  clickCount: number
) => {
  const result = await axios.post('/api/trySweep', {
    index: index,
    squareTotal: squareTotal,
    squarePerRow: squarePerRow,
    gameId: gameId,
    clickCount: clickCount,
  })
  return result
}