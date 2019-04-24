## Node Server 

Typescript, Docker, tslint, pub/sub event emitters, Postgres, TypeORM, cluster module in production

## Running in docker

First time setup, or if there's a change to node packages:

`make init`

Run application in docker:

`make dev`

View on `localhost:3010`

## Access to postgres: 
* `localhost:5432`
* **Username:** postgres (as a default)
* **Password:** changeme (as a default)

## Access to PgAdmin: 
* **URL:** `http://localhost:5050`
* **Username:** pgadmin4@pgadmin.org (as a default)
* **Password:** admin (as a default)

## TODO
* CI
* Jest
* modularize app init
* Make a class based router setup