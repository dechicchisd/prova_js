import Koa from 'koa'
import {v4 as uuidv4} from 'uuid'

export const responseMiddleware = async (ctx: Koa.Context, next: Koa.Next) => {
  const id = uuidv4()
  console.time(id)
  await next()
  console.timeEnd(id)
}
