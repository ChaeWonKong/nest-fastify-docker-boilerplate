# Nest Fastify Docker Boilerplate

Use nest-fastify easier and faster ⚡️

This project includes: Nest.js, Fastify, Docker, NginX configurations, shell script file to run automated docker build and up process.

Configurations for `.env`, `HttpModule`, `exception-filter` has been included. `fastify-helmet` also.

## Prerequesites

Install docker and docker-compose.
You need to have Unix-like OS (Linux, OS X..) else, you have to run docker command manually.

## How To Use

Install and Run by following commands

```shell
# Install
$ yarn
$ yarn start:dev
```

When you need to deploy, just use docker-compose 🐳
The following shell script will automatically build docker container and make things ready.

```shell
$ chmod 777 compose.sh
$ ./compose.sh
```

Then you can see the result at "127.0.0.1:3000"
