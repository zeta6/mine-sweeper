import type { NextApiRequest, NextApiResponse } from 'next'
import { getMines } from 'common/utils/game/getMines'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mines = getMines(req.body.mineTotal, req.body.squareTotal)
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
