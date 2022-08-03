// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'

import connect from '../../db/config'
const secret = process.env.TOKEN_JWT

export default async function handlerLogin(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, name } = req.body

  const db = await connect(`${process.env.MONGODB_URI}`)
  const collection = db.collection('personAuth')

  const person = await collection.find({ email }).toArray()

  const personEmail = person.map((p) => {
    return p.email
  })

  try {
    if (!personEmail) {
      res.json({ message: 'Este usário não existe' })
    } else {
      const token = jwt.sign({ email }, `${secret}`, { expiresIn: '2d' })
      res.json({ ok: true, name, email, token })
    }
  } catch (error) {
    res.status(500).json(error)
  }
}
