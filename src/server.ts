import fastfy from 'fastify'
import { knex } from './database'
import crypto from 'node:crypto'

const app = fastfy()

app.get('/hello', async () => {
  const transactions = await knex('transactions')
    .insert({
      id: crypto.randomUUID(),
      title: 'Test',
      amount: 1000,
    })
    .returning('*')

  return transactions
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running at port 3333')
  })
