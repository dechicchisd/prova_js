import Koa from "koa"
import Router from "koa-router"
import { sum } from "../services/sum"

let users = [{
    id: 1,
    name: 'a',
    surname: 'b'
},

{
    id: 2,
    name: 'c',
    surname: 'd'
},

{
    id: 3,
    name: 'e',
    surname: 'f'
}
]

export const getRouter = () => {
    const router = new Router();

    router.all('/', (ctx: Koa.Context) => {
        ctx.body = 'Hello World';
    });

    router.delete('/user/:id', (ctx: Koa.Context) => {
        const index = users.findIndex(user => user.id == ctx.params.id)
        if (index != -1) {
            ctx.body = users.splice(index, 1);
        }
    });

    router.get('/test/:num1/:num2', (ctx: Koa.Context) => {
        ctx.body = 'Hello test ' + sum(Number(ctx.params.num1), Number(ctx.params.num2));
    });

    return router
}