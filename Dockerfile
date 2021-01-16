FROM node:14.15.3

RUN mkdir -p /usr/src/my-server

WORKDIR /usr/src/my-server

COPY . .

RUN npm install
EXPOSE 3000 80 8080

CMD [ "npm", "run", "start" ]
