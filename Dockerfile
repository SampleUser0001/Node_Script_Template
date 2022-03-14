FROM node:latest

WORKDIR /opt/app

RUN yarn install 

RUN node -v
RUN yarn -v

CMD ["yarn", "start"]
