FROM node:10.22-alpine AS build
WORKDIR /api
COPY . .
RUN npm install
CMD [ "npm", "start" ]

EXPOSE 80

#docker build -t luizalabs .
#docker run --name luizalabs -d -p 80:80 luizalabs:latest