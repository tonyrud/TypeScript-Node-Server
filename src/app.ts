import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import { errorMiddleware } from './middleware/errors';
import { responseTime } from './middleware/responseTime';

const app: Koa = new Koa();

app.use(bodyParser());
app.use(responseTime);
app.use(errorMiddleware);

// Application error logging.
app.on('error', console.error);

export default app;
