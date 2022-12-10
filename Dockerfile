FROM node:16

USER node
WORKDIR /home/node

COPY package*.json /home/node
RUN npm ci
COPY hardhat.config.js /home/node

ENTRYPOINT [ "npx", "hardhat", "node" ]
