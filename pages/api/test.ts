import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('reqMT', req.body.mineTotal)
  console.log('reqST', req.body.squareTotal)

  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

  const getMines = (mineTotal: number, squareTotal: number): Array<number> => {
    let mineCount = 0
    const mines: number[] = []
    while (mineCount < mineTotal) {
      const mine = getRandomInt(0, squareTotal)
      if (!mines.includes(mine)) {
        mines.push(mine)
        mineCount = mineCount + 1
      }
    }
    return mines
  }
  const mines = getMines(req.body.mineTotal, req.body.squareTotal)
  console.log('mines', mines)
  res.send({ mines: mines })
}

// const postId = req.query.id

// if (req.method === 'GET') {
//   handleGET(postId, res)
// } else if (req.method === 'DELETE') {
//   handleDELETE(postId, res)
// } else {
//   throw new Error(
//     `The HTTP ${req.method} method is not supported at this route.`
//   )
// }

// // GET /api/post/:id
// async function handleGET(postId, res) {
//   const post = await prisma.post.findUnique({
//     where: { id: Number(postId) },
//     include: { author: true },
//   })
//   res.json(post)
// }

// // DELETE /api/post/:id
// async function handleDELETE(postId, res) {
//   const post = await prisma.post.delete({
//     where: { id: Number(postId) },
//   })
//   res.json(post)
// }
