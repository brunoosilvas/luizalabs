FROM node:10.22-alpine AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.19.2-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/meu-cep /usr/share/nginx/html

EXPOSE 80
