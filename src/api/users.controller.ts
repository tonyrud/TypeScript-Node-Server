import * as Router from 'koa-router';
import * as Koa from 'koa';

import UserService from './../services/User';
import { User } from './../types/User';
import { eventEmitter } from './../subscribers/emitter';

const routerOpts: Router.IRouterOptions = {
    prefix: '/users',
};

const router: Router = new Router(routerOpts);

router.get('/', async (ctx: Koa.Context) => {
    ctx.body = { data: 'Hello World!' };
});

router.get('/event/:eventName', async (ctx: Koa.Context) => {
    const event = ctx.params.eventName || 'register';
    eventEmitter.emit(event, {
        user: { name: 'Tony', params: ctx.params },
    });
    ctx.body = { data: `Emitting Event: ${event}` };
});

router.post(
    '/',
    // validators.userSignup, // this middleware take care of validation
    async (ctx: Koa.Context, next) => {
        // The actual responsability of the route layer.
        const userDTO: User = { name: 'Tony', _id: 'asdf' };

        // Call to service layer.
        // Abstraction on how to access the data layer and the business logic.
        const { user, company } = await UserService.Signup(userDTO);

        // Return a response to client.
        return ctx.json({ user, company });
    }
);

export { router };
