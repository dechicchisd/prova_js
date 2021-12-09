import Koa from 'koa'

export const authMiddleware = async (ctx: Koa.Context, next: Koa.Next) => {
  const value = ctx.request.headers.apitoken
  console.log(ctx.request.headers)
  let status = 401
  if (value == 'abc') {
    await next()
    status = 200
  }

  ctx.status = status
}
