import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import { errorMiddleware } from './middleware/errors';
import { responseTime } from './middleware/responseTime';
// import movieController from './api/movies.controller';

const app: Koa = new Koa();

app.use(bodyParser());
app.use(responseTime);
app.use(errorMiddleware);

// app.use(movieController.routes());
// // this will ensure correct responses are given for disallowed or non-implemented methods
// app.use(movieController.allowedMethods());

// Application error logging.
app.on('error', console.error);

export default app;
