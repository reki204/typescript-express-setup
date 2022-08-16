FROM node:18-alpine3.15
ENV NODE_ENV production

WORKDIR /usr/src/app

COPY package.json $APP_ROOT
RUN npm install

COPY . .

EXPOSE 3000
