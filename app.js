const Koa = require('koa');
const app = new Koa();

const port = process.env.PORT || 3000;

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
    console.log(`time is: ${ms}`);
});

app.use(async ctx => {
    ctx.body = 'Hello World';
});

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});
