FROM node:20.10.0
WORKDIR .
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["node", "--env-file=.env", "build/index.js"]