import Koa from 'koa'
import Router from 'koa-router'
import {authMiddleware} from '../middleware/authMiddleware'

export const getApiRouter = () => {
  const router: Router = new Router()

  router.get('/api/test', authMiddleware, (ctx: Koa.Context) => {
    ctx.body = 'Authenticated!'
  })

  return router
}
