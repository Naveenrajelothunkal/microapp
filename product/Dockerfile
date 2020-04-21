FROM node

COPY package.json .
RUN apt-get update && apt-get install vim -y
RUN npm install
COPY . .

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod