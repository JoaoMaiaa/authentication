// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type LoginProps = {
  name: string
  email: string
}

export default function handlerLogin(
  req: NextApiRequest,
  res: NextApiResponse<LoginProps>
) {
  const { email, name } = req.body
  res.status(200).json({ name, email })
}
