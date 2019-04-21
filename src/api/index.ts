import * as Router from 'koa-router';
import * as Koa from 'koa';

import UserService from './../services/User';
import { User } from './../types/User';

const router: Router = new Router();

router.get('/*', async (ctx: Koa.Context) => {
    ctx.body = { neat: 'Hello World!' };
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
