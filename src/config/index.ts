import { ConfigInterface } from './ConfigInterface';
import * as dotenv from 'dotenv';
const envSetup = dotenv.config();

// default to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (!envSetup) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

const config: ConfigInterface = {
    port: Number(process.env.PORT),
    isProduction: Boolean(process.env.NODE_ENV === 'production'),
    postgres: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME,
    },
    logs: {
        level: process.env.LOG_LEVEL,
    },
    /**
     * API configs
     */
    api: {
        prefix: '/api',
    },
};

export default config;
