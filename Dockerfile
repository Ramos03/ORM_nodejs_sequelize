FROM node:latest

WORKDIR /app

COPY src/api/ ./ 
COPY src/package.json ./

RUN yarn