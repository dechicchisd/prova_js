import Koa from 'koa'

export const responseMiddleware = async (ctx: Koa.Context, next: Koa.Next) => {
  console.time()
  await next()
  console.timeEnd()
}
