FROM node:10.16-alpine AS build
WORKDIR /app
COPY . .
RUN npm install \
  && npm run-script build-Prod

FROM nginx:1.15-alpine AS release
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist/DockerAngular/. .
