## Node Server 

Typescript, Docker, tslint, event emitter, postgres, typeorm

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