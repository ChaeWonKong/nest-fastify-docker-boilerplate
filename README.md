# ⚡️ Nest Fastify Docker Boilerplate

![nodejs](https://img.shields.io/badge/Runtime-NodeJS-blue)
![fastify](https://img.shields.io/badge/Framework-Fastify-yellow)
![nestjs](https://img.shields.io/badge/Framework-NestJS-brightgreen)
![typescript](https://img.shields.io/badge/Language-TypeScript-red)
![docker](https://img.shields.io/badge/Container-Docker-yellowgreen)
![nginx](https://img.shields.io/badge/WebServer-Nginx-lightgrey)

Use `Nest.js` w/ `fastify` easier and faster.

This project includes: `Nest.js`, `Fastify`, `Docker`, `Nginx` configurations, shell script file to run automated docker build and up process.

Configurations for `.env`, `HttpModule`, `exception-filter` has been included. `fastify-helmet` also.

### Motivation

Nest.js is a powerful framework that fully supports DI, make developers able to conform [SOLID principles](https://en.wikipedia.org/wiki/SOLID).
However, there's a lot to configure in order to run and deploy actual app.

This project offers pre-configured boilerplates, to reduce time spent on configuration, since it is not the goal of application.
Just concentrate on thinking logics and implementing business, and that's what frameworks for.

## Prerequesites

Install docker and docker-compose.
You need to have Unix-like OS (Linux, OS X..) else, you have to run docker command manually.

## Uses

This project uses the following libraries. configurations are already been made.

- `typeorm`: Faster than sequelize, suitable option for RDB.
- `fastify`: As almost as fast as node.js core. Much faster than express.
- `docker`: Best container tool mankind had ever had.
- `nginx`: light-weight, powerful web server.

## How To Use

Install and Run by following commands

```shell
# Install
$ yarn
$ yarn start:dev
```

- If you have DB, you have to add `ormconfig.json` which will be automatically ignored by `.gitignore` for security reasons.
- If you need environmental variables, just add `.env` to your root directory. No extra configuration needed.

When you need to deploy, just use docker-compose 🐳
The following shell script will automatically build docker container and make things ready.

```shell
$ chmod 777 compose.sh
$ ./compose.sh
```

Then you can see the result at "http://localhost:3000"

## Contributions

Any kind of contributions are welcome!

## Maintainer

[@chaewonkong](https://github.com/ChaeWonKong)
