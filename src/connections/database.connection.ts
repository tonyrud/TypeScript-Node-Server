import 'reflect-metadata';
import { createConnection, Connection, ConnectionOptions } from 'typeorm';
import { join } from 'path';
const parentDir = join(__dirname, '..');
import config from '../config';

const connectionOpts: ConnectionOptions = {
    type: 'postgres',
    host: config.postgres.host || 'host.docker.internal',
    port: config.postgres.port || 5432,
    username: config.postgres.username || 'postgres',
    password: config.postgres.password || 'changeme',
    database: config.postgres.name || 'postgres',
    entities: [`${parentDir}/**/*.entity.ts`],
    synchronize: true,
};

const connection: Promise<Connection> = createConnection(connectionOpts);

export default connection;
