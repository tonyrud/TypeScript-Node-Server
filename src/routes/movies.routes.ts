import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as HttpStatus from 'http-status-codes';

import MovieService from '../services/MovieService';

const routerOpts: Router.IRouterOptions = {
    prefix: '/movies',
};

const router: Router = new Router(routerOpts);

router.get('/', async (ctx: Koa.Context) => {
    const data = await MovieService.getMovies();

    ctx.body = {
        data,
    };
});

router.get('/:movie_id', async (ctx: Koa.Context) => {
    const data = await MovieService.getMovie(ctx, ctx.params.movie_id);

    // This will be handled upstream by our custom error middleware.
    if (!data) {
        ctx.throw(HttpStatus.NOT_FOUND);
    }

    ctx.body = {
        data,
    };
});

router.post('/', async (ctx: Koa.Context) => {
    ctx.body = 'POST';
});

router.delete('/:movie_id', async (ctx: Koa.Context) => {
    ctx.body = 'DELETE';
});

router.patch('/:movie_id', async (ctx: Koa.Context) => {
    ctx.body = 'PATCH';
});

export default router;
