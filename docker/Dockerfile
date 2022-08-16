FROM node:18-alpine3.15
ENV NODE_ENV production

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --prod --frozen-lockfile

COPY . .

# CMD ["node", "index.js"]
