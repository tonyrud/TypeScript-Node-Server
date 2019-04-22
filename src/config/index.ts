import * as dotenv from 'dotenv';
const envSetup = dotenv.config();

// default to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (!envSetup) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
    port: process.env.PORT,
    postgres: {
        url: process.env.DATABASE_URI,
        secretKey: process.env.PAYPAL_SECRET_KEY,
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
