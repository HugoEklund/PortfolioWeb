FROM node:24-alpine AS builder

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

RUN chown appuser:appgroup /app

COPY Frontend/package.json Frontend/package-lock.json ./
RUN chown appuser:appgroup package.json package-lock.json

USER appuser
RUN npm install --frozen-lockfile

USER root
COPY Frontend/. .
COPY README.md ./README.md
RUN chown -R appuser:appgroup .

USER appuser

RUN chmod +x node_modules/vite/bin/vite.js
RUN chmod -R +x node_modules/.bin/

RUN npm run build