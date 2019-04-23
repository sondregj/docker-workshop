FROM node:11

COPY . .

RUN npm i
EXPOSE 8080

CMD [ "npm", "start" ]
