import * as Koa from 'koa';

const responseTime = async (ctx: Koa.Context, next: () => Promise<any>) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
    console.log(`time is: ${ms}ms`);
};

export { responseTime };
