FROM node

COPY package.json .
RUN npm install
RUN apt-get update && apt-get install vim -y
COPY . .

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod