# Webapp skeleton

## Quickstart
* npm install
* npm setup

## Components

Backend:
* NodeJS + Express
* Sequelize with postgres
* Passport with local strategy
* Testing with Mocha

##Environment variables

These are managed by DotEnv in development, do initial setup using ```shell npm setup``` and in production set the environment through the .bash files.

```shell
export port=8080
export dbHost=localhost
export dbDialect=postgres
export dbName=app
export dbUser=app
export dbPass=app
export dbForce=true
export dbTimestamps=true
export cookieSecret='super mega ukulele'
export cookieMaxage=3600000
export cookieSecure=false
export sessionSecret='super mega ukulele'
export appURL='http://www.web.dev'
```