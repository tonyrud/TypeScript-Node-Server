import * as cluster from 'cluster';
import { cpus } from 'os';
import { Server } from './server';
import config from './config';

const numCPUs = cpus().length;
const { isProduction } = config;

if (cluster.isMaster && isProduction) {
    console.log(`This machine has ${numCPUs} CPUs.`);
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('online', worker => {
        console.log(`Worker ${worker.process.pid} is online`);
    });

    cluster.on('exit', (worker, code, signal) => {
        console.log(
            `Worker ${
                worker.process.pid
            } died with code: ${code} and signal: ${signal}`
        );
        console.log('Starting a new worker...');
        cluster.fork();
    });
} else {
    const server = new Server(config.port);
    server.start();
}
