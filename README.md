# Node Server

Typescript, Docker, tslint, pub/sub event emitters, Postgres, TypeORM, cluster module in production

## Run in development with Docker

First time setup, or if any node packages are added/changed:

`make`

Run application in Docker:

`make dev`

Seed Docker database:

`make seed`

## Run in production with clustering

`npm run build`

`npm start`

View on json data at [localhost:3010/movies](http://localhost:3010/movies)

## Access to postgres

-   `localhost:54322`
-   **Username:** postgres (as a default)
-   **Password:** changeme (as a default)

## TODO

-   Continuous Integration
-   Jest
-   Modularize app init
-   Make a class based router setup
-   Cron jobs -> [article](https://softwareontheroad.com/nodejs-scalability-issues/)
-   Dependency Injection on services
-   Logging service with [Winston](https://www.npmjs.com/package/winston)
-   Auth service
-   Redis cache layer
