import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import { router } from './api';
import { errorMiddleware } from './middleware/errors';
import { responseTime } from './middleware/responseTime';

const app: Koa = new Koa();

app.use(bodyParser());
app.use(responseTime);
app.use(errorMiddleware);

app.use(router.routes());
// this will ensure correct responses are given for disallowed or non-implemented methods
app.use(router.allowedMethods());

// Application error logging.
app.on('error', console.error);

export default app;
