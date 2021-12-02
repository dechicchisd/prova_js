import Koa from 'koa'
import Router from 'koa-router'
import {users} from '../data-access/users/index'
import {deleteUser} from '../services/users'

export let getUsersRouter = () => {
  const router: Router = new Router()

  router.get('/getAllUsers')

  router.post('/createUser')

  router.put('/putUser')

  router.get('/user/:id')

  router.delete('/user/:id', (ctx: Koa.Context) => {
    const result = deleteUser(users, ctx.params.id)
    ctx.body = result.deleteBody
    ctx.status = result.deleteStatus
  })

  return router
}
