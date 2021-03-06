import type { NextApiRequest, NextApiResponse } from 'next'

import { Amplify, API } from 'aws-amplify'
import { updateGame } from 'src/graphql/mutations'
import { checkMine, checkMineAround } from 'common/utils/game/checkMineAround'
import { GraphQLResult } from '@aws-amplify/api'
import awsExports from 'src/aws-exports'
Amplify.configure({ ...awsExports })

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const resp: GraphQLResult<any> = await API.graphql({
    authMode: 'API_KEY',
    query: updateGame,
    variables: {
      input: {
        id: req.body.gameId,
        click_count: req.body.clickCount,
      },
    },
  })
  if (resp.data.updateGame.active === false) {
    res.send({ error: 'The game is not active.' })
  }
  const mines = resp.data.updateGame.mines.split(',').map(Number)
  if (checkMine(req.body.index, mines)) {
    await API.graphql({
      authMode: 'API_KEY',
      query: updateGame,
      variables: {
        input: {
          id: req.body.gameId,
          click_count: req.body.clickCount,
          active: false,
        },
      },
    })
    res.send({ mineAround: -1 })
  } else {
    const mineAround: number = checkMineAround(req.body.aroundPoints, mines)
    res.send({
      mineAround: mineAround,
    })
  }
}
