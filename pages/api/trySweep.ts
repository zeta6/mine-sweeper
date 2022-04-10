import type { NextApiRequest, NextApiResponse } from 'next'
import { getMines } from 'common/utils/game/getMines'

import { Amplify, API } from 'aws-amplify'
import awsExports from 'src/aws-exports'
import { updateGame } from 'src/graphql/mutations'
import { checkMine, checkMineAround } from 'common/utils/game/checkMineAround'
import { getCheckList } from 'common/utils/game/getCheckList'
import { GraphQLResult } from '@aws-amplify/api'
Amplify.configure({ ...awsExports })
// , ssr: true })
// const mines = [1]

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // console.log('req.body.gameId', req.body.gameId)
  const resp: GraphQLResult<any> = await API.graphql({
    authMode: 'API_KEY',
    query: updateGame,
    variables: {
      input: {
        id: req.body.gameId,
        click_count: req.body.clickCount,
        // active: false,
      },
    },
  })
  const mines = resp.data.updateGame.mines.split(',').map(Number)
  if (checkMine(req.body.index, mines)) {
    const resp2: GraphQLResult<any> = await API.graphql({
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
