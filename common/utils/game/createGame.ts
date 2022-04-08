import axios from 'axios'

export const createGame = async () => {
  const result = await axios.post('/api/createGame')
  return result
}
