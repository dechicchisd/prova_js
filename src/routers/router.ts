import Koa from "koa"
import Router from "koa-router"
import { sum } from "../services/sum"

let users = [{
    name: 'Delfino',
    surname: 'De Chicchis'
},

{
    name: 'Name1',
    surname: 'Surname1'
},

{
    name: 'Name2',
    surname: 'Surname2'
}
]

export const getRouter = () => {
    const router = new Router();

    router.all('/', (ctx: Koa.Context) => {
        ctx.body = 'Hello World';
    });

    router.delete('/:id', (ctx: Koa.Context) => {
        users.splice(ctx.params.id, 1);
        ctx.body = users;
    });

    router.get('/test/:num1/:num2', (ctx: Koa.Context) => {
        ctx.body = 'Hello test ' + sum(Number(ctx.params.num1), Number(ctx.params.num2));
    });

    return router
}