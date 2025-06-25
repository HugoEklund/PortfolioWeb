FROM node:24-alpine AS builder

ENV HOME /app

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --frozen-lockfile

COPY . .

RUN npm run build