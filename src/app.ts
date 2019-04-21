import * as Koa from 'koa';
import * as Router from 'koa-router';

const app = new Koa();
const router = new Router();

const port = process.env.PORT || 3010;

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

router.get('/*', async ctx => {
    ctx.body = 'Hello World!';
});

app.use(router.routes());

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});
