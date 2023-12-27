FROM node:21

WORKDIR /app/frontend

COPY package.json yarn.lock /app/frontend/

RUN yarn install

COPY . /app/frontend/

EXPOSE 8080

CMD ["yarn", "start"]
