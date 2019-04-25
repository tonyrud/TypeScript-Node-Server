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
    const data = await MovieService.getMovie(ctx.params.movie_id);

    if (!data) {
        // This will be handled upstream by our custom error middleware.
        ctx.throw(HttpStatus.NOT_FOUND);
    }

    ctx.body = {
        data,
    };
});

router.post('/', async (ctx: Koa.Context) => {
    const data = await MovieService.createMovie(ctx.request.body);

    ctx.status = HttpStatus.CREATED;

    ctx.body = {
        data,
    };
});

router.delete('/:movie_id', async (ctx: Koa.Context) => {
    const data = await MovieService.deleteMovie(ctx.params.movie_id);

    if (!data) {
        ctx.throw(HttpStatus.NOT_FOUND);
    }

    // Respond with no data, but make sure we have a 204 response code.
    ctx.status = HttpStatus.NO_CONTENT;
});

router.patch('/:movie_id', async (ctx: Koa.Context) => {
    const data = await MovieService.updateMovie(
        ctx.params.movie_id,
        ctx.request.body
    );

    if (!data) {
        ctx.throw(HttpStatus.NOT_FOUND);
    }
    // Respond with our movie data.// Response with the updated content.
    ctx.body = {
        data,
    };
});

export default router;
