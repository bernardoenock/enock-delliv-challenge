FROM node:14

WORKDIR /app/frontend

COPY package.json yarn.lock /app/frontend/

RUN yarn install

COPY . /app/frontend/

EXPOSE 80

CMD ["yarn", "start"]
