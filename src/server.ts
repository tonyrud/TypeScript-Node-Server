import app from './app';
import * as Koa from 'koa';
import config from './config';
export class Server {
    private port: number;
    private app: Koa = app;

    public constructor(port: number) {
        this.port = port;
    }

    public start() {
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
