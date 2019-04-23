import * as Router from 'koa-router';
import * as Koa from 'koa';

const router: Router = new Router();

router.get('/status', async (ctx: Koa.Context) => {
    ctx.status = 200;
});

export default router;
