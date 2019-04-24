import app from './app';
import * as Koa from 'koa';
import config from './config';
import databaseConnection from './connections/database.connection';

import './routes';
export class Server {
    private port: number;
    private app: Koa = app;

    public constructor(port: number) {
        this.port = port;
    }

    public async start() {
        try {
            await databaseConnection;
        } catch (error) {
            console.log('errrrror in db connection');

            this.app.emit('error', error);
        }
        this.app.listen(this.port, () => {
            const serverEnv = config.isProduction
                ? 'Production'
                : 'Development';
            console.log(
                `${serverEnv} Server: process id: ${process.pid} port ${
                    this.port
                }`
            );
        });

        this.app.on('error', e => console.log(`SERVER ERROR: ${e.message}`));
    }
}
