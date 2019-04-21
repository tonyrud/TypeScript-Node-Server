import * as Koa from 'koa';
import { router } from './api';
const app: Koa = new Koa();

const PORT: number = Number(process.env.PORT) || 3010;

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
    console.log(`time is: ${ms}`);
});

app.use(async (ctx, next) => {
    ctx.body = 'Middleware running';
    await next();
});

app.use(router.routes());

app.listen(PORT, () => {
    console.log(`listening on PORT: ${PORT}`);
});
