import type { NextApiRequest, NextApiResponse } from 'next'

// import { Game as game } from 'sequelize_/model/game'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('req', req)
  console.log('res', res)
  // console.log('Game', Game)
  // console.log('requested')
  // Game.create({ mines: [1, 2, 3] })
  // res.send('300')
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
}

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
