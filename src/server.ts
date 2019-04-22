import app from './app';
import * as Koa from 'koa';

export class Server {
    private port: number;
    private app: Koa = app;

    public constructor(port: number) {
        this.port = port;
    }

    public start() {
        this.app.listen(this.port, () => {
            console.log(
                `Server process: ${process.pid} listen on port ${this.port}`
            );
        });

        this.app.on('error', e => console.log(`SERVER ERROR: ${e.message}`));
    }
}
