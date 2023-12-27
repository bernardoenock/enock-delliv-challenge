FROM node:21

WORKDIR /app/backend

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 4242

CMD ["yarn", "start:dev"]
