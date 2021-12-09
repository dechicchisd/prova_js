import Koa from 'koa'
import Router from 'koa-router'
import {getUsersService} from '../services/users'

const usersService = getUsersService()

const createUser = async (ctx: Koa.Context) => {
  ctx.body = await usersService.createUser(ctx.request.body)
}

const putUser = async (ctx: Koa.Context) => {
  const result = await usersService.putUser(ctx.params.id, ctx.request.body)
  ctx.body = result.body
  ctx.status = result.status
}

const getUser = async (ctx: Koa.Context) => {
  const result = await usersService.getUser(ctx.params.id)
  ctx.body = result.body
  ctx.status = result.status
}
const getAllUsers = async (ctx: Koa.Context) => {
  const users = await usersService.getAllUsers()
  ctx.body = {users}
}

const deleteUser = async (ctx: Koa.Context) => {
  const result = await usersService.deleteUser(ctx.params.id)
  ctx.body = result.body
  ctx.status = result.status
}

export const getUsersRouter = () => {
  const router: Router = new Router({
    prefix: '/users',
  })

  router.get('/', getAllUsers)
  router.delete('/:id', deleteUser)
  router.get('/:id', getUser)
  router.put('/:id', putUser)
  router.post('/', createUser)

  return router
}
