FROM node:20-alpine AS build

WORKDIR /app

COPY prepscore-ui/package.json prepscore-ui/package-lock.json ./
RUN npm install

COPY prepscore-ui/ ./

RUN npm run build -- --configuration production

FROM nginx:alpine

COPY --from=build /app/dist/prepscore-ui /usr/share/nginx/html

EXPOSE 80