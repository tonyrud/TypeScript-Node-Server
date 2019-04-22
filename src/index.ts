// Run server for debug in single process without cluster
import { Server } from './server';
import config from './config';

const server = new Server(config.port);
server.start();
