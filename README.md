## Node Server 

Typescript, Docker, tslint, pub/sub event emitters, Postgres, TypeORM, cluster module in production

## Run with docker

`docker-compose up --build`

## Run locally

`npm run dev`



## Directory Structure

src/
* app.ts          - App entry point
* api             - Express route controllers for all thendpoints of the app
* config          - Environment variables and configuration related stuff
* jobs            - Jobs definitions for agenda.js
* loaders         - Split the startup process into modules
* models          - Database models
* services        - All the business logic is here
* subscribers     - Event handlers for async task
* types           - Type declaration files (d.ts) for Typescript

## TODO
* CI
* Jest
* modularize app init
* Setup router as classes

## Access to postgres: 
* `localhost:5432`
* **Username:** postgres (as a default)
* **Password:** changeme (as a default)

## Access to PgAdmin: 
* **URL:** `http://localhost:5050`
* **Username:** pgadmin4@pgadmin.org (as a default)
* **Password:** admin (as a default)