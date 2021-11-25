import Router from "koa-router"

export const getRouter = () => {
    const router = new Router();

    let time = 5;
    router.get('/', ctx => {
        ctx.body = 'Hello World from router';
    });

    return router
}