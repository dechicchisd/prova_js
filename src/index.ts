import { getConfigs } from './config/config'
import Koa from "koa"
import Router from "koa-router"
import { sum } from './sum'

// const Koa = require('koa');
// const Router = require('koa-router');
// const sum = require('./sum');

const app = new Koa();
const router = new Router();

router.get('/', ctx => { ctx.body = "Hello World" });

router.get('/test', ctx => { ctx.body = 'Hello Test' });

app.use(router.routes()).use(router.allowedMethods());

let tot: number = sum(123, 321);
app.listen(3000, () => console.log('Server Started...\n123 + 321 = ' + tot));