# base image
FROM node:16.13.0-alpine

# set working directory
WORKDIR /app

# ADD `/app/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH

# app dependencies, install, caching
COPY . .
RUN yarn
RUN yarn run build

CMD ["node", "./dist/main.js"]
