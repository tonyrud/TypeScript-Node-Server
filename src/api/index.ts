import app from './../app';

import moviesRoutes from './movies.routes';
import healthCheckRoutes from './healthcheck.routes';

app.use(healthCheckRoutes.routes());
app.use(moviesRoutes.routes());
// this will ensure correct responses are given for disallowed or non-implemented methods
app.use(moviesRoutes.allowedMethods());
