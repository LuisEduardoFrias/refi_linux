import type { NextApiRequest, NextApiResponse } from 'next'
import {ls} from '../../root/bin/move';

type Data = {
  data: string[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ data: ls() })
}
