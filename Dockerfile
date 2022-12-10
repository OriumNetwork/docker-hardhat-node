FROM node:16

USER node
WORKDIR /home/node

COPY package*.json /home/node/
RUN npm ci
COPY *.js /home/node/

ENTRYPOINT npx hardhat node --port "${PORT:=8545}"

HEALTHCHECK --interval=5s --timeout=3s CMD node /home/node/healthcheck.js
