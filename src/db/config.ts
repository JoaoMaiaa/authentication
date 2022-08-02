import { MongoClient, Db } from 'mongodb'

let chacheDb: Db

export default async function connect(uri: string) {
  if (chacheDb) {
    return chacheDb
  }

  const client = await MongoClient.connect(uri)
  const dbname = 'authentication'
  const db = client.db(dbname)
  chacheDb = db
  return db
}
