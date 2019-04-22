import app from './app';
import config from './config';

async function startServer() {
    // await require('./loaders').default({ expressApp: app });

    app.listen(config.port, () => {
        // TODO get error handling on server start
        // if (err) {
        //     console.log(err);
        //     process.exit(1);
        //     return '';
        // }
        console.log('Server listening on port:', config.port);
    });
}

startServer();
