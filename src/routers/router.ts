import Koa from 'koa'
import Router from 'koa-router'
import {sum} from '../services/sum'
import {getUsersRouter} from './usersRouter'

export const getRouter = () => {
  const router = new Router()

  router.all('/', (ctx: Koa.Context) => {
    ctx.body = 'Hello World'
  })

  router.get('/test/:num1/:num2', (ctx: Koa.Context) => {
    ctx.body =
      'Hello test ' + sum(Number(ctx.params.num1), Number(ctx.params.num2))
  })

  router.use(getUsersRouter().routes())

  return router
}
