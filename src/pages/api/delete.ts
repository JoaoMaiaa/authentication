import { ObjectId } from 'mongodb'
import type { NextApiResponse, NextApiRequest } from 'next'

import connect from '../../db/config'

export default async function handelDelete(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body

  const db = await connect(`${process.env.MONGODB_URI}`)
  const collection = db.collection('personAuth')

  const personResult = await collection.find({ email }).toArray()
  try {
    const personId = personResult.map((person) => {
      return person._id
    })
    const Id = personId.toString()
    await collection.deleteOne({ _id: new ObjectId(Id) })
    //   await collection.deleteOne({ email }) funciona também,
    res.json({
      ok: true,
      message: 'usuário excluido com sucesso',
      email: email
    })
  } catch (error) {
    res.status(300).json({
      ok: false,
      message: 'usuário não encontrado',
      email: email
    })
  }
}
