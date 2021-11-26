import Router from "koa-router"
import { sum } from "../services/sum"

export const getRouter = () => {
    const router = new Router();

    router.get('/', ctx => {
        ctx.body = 'Hello World';
    });

    router.get('/test/:num1/:num2', ctx => {
        ctx.body = 'Hello test ' + sum(Number(ctx.params.num1), Number(ctx.params.num2));
    });

    return router
}