FROM node:16

WORKDIR /app/backend

COPY package.json yarn.lock /app/backend/

RUN yarn install

COPY . /app/backend/

EXPOSE 4242

# CMD ["yarn", "start:dev"]
