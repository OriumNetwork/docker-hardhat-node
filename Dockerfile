FROM node:16

COPY package*.json .
RUN npm ci
COPY hardhat.config.js .

ENTRYPOINT [ "npx", "hardhat", "node" ]
