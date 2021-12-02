import Koa from 'koa'
import Router from 'koa-router'
import {getUsersService} from '../services/users'

const usersService = getUsersService()

const getUser = async (ctx: Koa.Context) => {
  const result = await usersService.getUser(ctx.params.id)
  ctx.body = result.getBody
  ctx.status = result.getStatus
}
const getAllUsers = async (ctx: Koa.Context) => {
  const users = await usersService.getAllUsers()
  ctx.body = {users}
}

const deleteUser = async (ctx: Koa.Context) => {
  const result = await usersService.deleteUser(ctx.params.id)
  ctx.body = result.deleteBody
  ctx.status = result.deleteStatus
}

export let getUsersRouter = () => {
  const router: Router = new Router({
    prefix: '/users',
  })

  router.get('/', getAllUsers)
  router.delete('/:id', deleteUser)
  router.get('/:id', getUser)

  router.post('/')
  router.put('/:id')

  return router
}
