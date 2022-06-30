FROM node:16.13.1

WORKDIR /app

COPY package.json ./

RUN yarn

COPY . .

RUN yarn build

CMD [ "node", "dist/main" ]
