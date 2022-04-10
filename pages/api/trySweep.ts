import type { NextApiRequest, NextApiResponse } from 'next'
import { getMines } from 'common/utils/game/getMines'

import { Amplify, API } from 'aws-amplify'
import awsExports from 'src/aws-exports'
import { getGame } from 'src/graphql/queries'
import {
  checkMine,
  checkMineAround,
  getCheckList,
} from 'common/utils/game/checkAroundMine'
import { GraphQLResult } from '@aws-amplify/api'
Amplify.configure({ ...awsExports })
// , ssr: true })

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const resp: GraphQLResult<any> = await API.graphql({
    authMode: 'API_KEY',
    query: getGame,
    variables: {
      id: req.body.gameId,
    },
  })
  const mines = resp.data.getGame.mines
  if (checkMine(req.body.index, mines)) res.send({ mineAround: -1 })
  else {
    const checkList = getCheckList(
      req.body.index,
      req.body.squarePerRow,
      req.body.squareTotal
    )
    const mineAround: number = checkMineAround(checkList, mines)
    res.send({
      mineAround: mineAround,
    })
  }
}
