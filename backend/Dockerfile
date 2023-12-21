FROM node:14

WORKDIR /app/backend

COPY package.json yarn.lock /app/backend/

RUN yarn install

COPY . /app/backend/

EXPOSE 3000

CMD ["yarn", "start"]
