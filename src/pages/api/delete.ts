import { ObjectId } from 'mongodb'
import type { NextApiResponse, NextApiRequest } from 'next'

import connect from '../../db/config'

export interface EmailProps {
  email: string
}

export default async function handelDelete(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body

  const db = await connect(`${process.env.MONGODB_URI}`)
  const collection = db.collection('personAuth')

  const personResult = await collection.find({ email }).toArray()

  // if (!personResult) {
  //   res.json({ message: 'não encontrado' })
  // } else {
  //   res.status(200).json({ personResult })
  // }

  try {
    if (personResult) {
      const result = personResult.map((personRes) => {
        return personRes._id
      })

      const id = result.toString()

      await collection.deleteOne({ _id: new ObjectId(id) })
      res.json({
        ok: true,
        message: 'usuário excluido com sucesso',
        email: email
      })
    } else {
      res.json({
        message: 'usuário não existe'
      })
    }
  } catch (error) {
    res.json({
      ok: false,
      message: 'usuário não encontrado',
      email: email
    })
  }
}
