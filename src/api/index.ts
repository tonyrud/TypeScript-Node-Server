import app from './../app';

import movieController from './movies.controller';
import healthCheck from './healthcheck';

app.use(healthCheck.routes());
app.use(movieController.routes());
// this will ensure correct responses are given for disallowed or non-implemented methods
app.use(movieController.allowedMethods());
