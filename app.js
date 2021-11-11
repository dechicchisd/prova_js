const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();


router.get('/', ctx =>{ ctx.body = "Hello World"; })

router.get('/test', ctx => { ctx.body = 'Hello Test '});

app.use(router.routes()).use(router.allowedMethods());


app.listen(3000, () => console.log('Server Started...'));