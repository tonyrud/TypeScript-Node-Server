import * as HttpStatus from 'http-status-codes';
import * as Koa from 'koa';

const errorMiddleware = async (ctx: Koa.Context, next: () => Promise<any>) => {
    try {
        await next();
    } catch (error) {
        console.log('ERRRROR in middleware', error);

        ctx.status =
            error.statusCode ||
            error.status ||
            HttpStatus.INTERNAL_SERVER_ERROR;
        error.status = ctx.status;
        ctx.body = { error };
        ctx.app.emit('error', error, ctx);
    }
};

export { errorMiddleware };
