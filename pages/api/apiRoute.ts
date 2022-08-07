// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type resData = {
  data: string[]
}

const apiRoute = (req: NextApiRequest, res: NextApiResponse<resData>) => {
  if (req.method === 'GET') {
    res.status(200).json({ data: ['no', 'way'] })
  }
}
export default apiRoute
