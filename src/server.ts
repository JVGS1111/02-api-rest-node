import fastfy from 'fastify'
import { knex } from './database'

const app = fastfy()

app.get('/hello', async () => {
  const tables = await knex('sqlite_schema').select('*')
  return tables
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running at port 3333')
  })
