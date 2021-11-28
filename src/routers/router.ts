import Koa from "koa"
import Router from "koa-router"
import { sum } from "../services/sum"

export const getRouter = () => {
    const router = new Router();

    router.get('/', (ctx: Koa.Context) => {
        ctx.body = 'Hello World';
    });

    router.post('/', (ctx: Koa.Context) => {
        ctx.body = ctx.request.body;
    });

    router.get('/test/:num1/:num2', (ctx: Koa.Context) => {
        ctx.body = 'Hello test ' + sum(Number(ctx.params.num1), Number(ctx.params.num2));
    });

    return router
}