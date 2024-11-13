FROM node:lts

WORKDIR /app

COPY vite.config.js ./
COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 3000

CMD ["npm", "run", "dev"]
