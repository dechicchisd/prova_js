// import Koa from "koa"
// import { getConfigs } from './config/config'
// import { getRouter } from './routers/router'
// import { sum } from './sum'
import { startServer } from './servers/server'


// const app = new Koa();
// const router = getRouter();

// router.get('/', ctx => { ctx.body = "Hello World" });

// app.use(router.routes());

// let tot: number = sum(123, 321);
// app.listen(3000, () => console.log('Server Started...\n123 + 321 = '));
startServer();