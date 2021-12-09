import Koa from 'koa'
const TOKEN = 'abc'

export const authMiddleware = async (ctx: Koa.Context, next: Koa.Next) => {
  const value = ctx.request.headers.apitoken

  if (value !== TOKEN) {
    ctx.status = 401
    ctx.body = 'Unhautorized'
    return
  }
  await next()
}
