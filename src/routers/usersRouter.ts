import Koa from "koa"
import Router from "koa-router"
import { users } from "../data-access/data-access"
import { deleteUser } from "../services/crudServices"

export let getUsersRouter = () => {
    const router: Router = new Router();

    router.get('/getAllUsers');

    router.post('/createUser');

    router.put('/putUser');

    router.get('/user/:id');

    router.delete('/user/:id', (ctx: Koa.Context) => {
        let deleted = deleteUser(users, ctx.params.id);
        ctx.body = deleted;
    });

    return router;
}