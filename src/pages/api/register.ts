// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import connect from '../../db/config'

export default async function handlerRegister(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, name } = req.body

  const db = await connect(process.env.MONGODB_URI as string)
  const collection = db.collection('personAuth')

  const emailExist = await collection.find({ email }).toArray()

  try {
    if (emailExist.map((exist) => exist.email).toString()) {
      res.json({ error: 'este usuário já existe' })
    } else {
      await collection.insertOne({
        name,
        email,
        subscribedAt: new Date()
      })
      res.status(200).json({
        ok: true,
        name,
        email,
        message: 'usuário inscrito com sucesso'
      })
    }
  } catch (error) {
    res.json({ error: error })
  }
}
