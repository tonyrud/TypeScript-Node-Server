export interface ConfigInterface {
    port: number;
    isProduction: boolean;
    postgres: {
        host: string;
        port: number;
        username: string;
        password: string;
        name: string;
    };
    logs: {
        level: string;
    };
    api: {
        prefix: string;
    };
}
