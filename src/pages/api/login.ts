// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'

import connect from '../../db/config'
const secret = process.env.TOKEN_JWT

export default async function handlerLogin(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body

  const db = await connect(`${process.env.MONGODB_URI}`)
  const collection = db.collection('personAuth')

  const person = await collection.find({ email }).toArray()

  const namePerson = person.map((p) => p.name).toString()
  const emailPerson = person.map((p) => p.email).toString()

  try {
    if (!person.map((p) => p.email).toString()) {
      res.json({ error: 'Este usuário não existe' })
    } else {
      const token = jwt.sign({ email }, `${secret}`, { expiresIn: '2d' })
      res.json({ ok: true, name: namePerson, email: emailPerson, token })
    }
  } catch (error) {
    res.status(500).json(error)
  }
}
