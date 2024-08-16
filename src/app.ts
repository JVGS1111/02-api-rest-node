import fastfy from 'fastify'
import { transactionsRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'

const app = fastfy()

app.register(cookie)

app.register(transactionsRoutes, {
  prefix: 'transactions',
})

export default app
