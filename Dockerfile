FROM node:14.19.0-alpine

WORKDIR /home/node/app

COPY package*.json yarn.lock ./

RUN yarn install

COPY ./ ./

CMD ["node" , "index.js"]