import type { NextApiRequest, NextApiResponse } from 'next'
import { getMines } from 'common/utils/game/getMines'

import { createGame } from 'src/graphql/mutations'
import { checkMineAround } from 'common/utils/game/checkMineAround'
import { getCheckList } from 'common/utils/game/getCheckList'
import { GraphQLResult } from '@aws-amplify/api'
import { Amplify, API } from 'aws-amplify'
import awsExports from 'src/aws-exports'
Amplify.configure({ ...awsExports })

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mines = getMines(
    req.body.firstIndex,
    req.body.mineTotal,
    req.body.squareTotal
  )
  const minesStr = mines.toString()
  const resp: GraphQLResult<any> = await API.graphql({
    authMode: 'API_KEY',
    query: createGame,
    variables: {
      input: {
        mines: minesStr,
        mine_total: req.body.mineTotal,
        active: true,
      },
    },
  })

  const mineAround: number = checkMineAround(req.body.aroundPoints, mines)

  res.send({
    gameId: resp.data.createGame.id,
    mineAround: mineAround,
  })
}
