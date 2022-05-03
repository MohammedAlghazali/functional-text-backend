FROM node:14.4.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm run test

EXPOSE 5000

CMD ["npm", "run", "start"]
