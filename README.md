# Docker Hardhat Node

This project implements a simple hardhat node to run a docker container.

## Environment Variables

Environment variables are used to configure the hardhat node. Currently, you can use the following variables:

| Variable          | Description                                                                                              |
|-------------------|----------------------------------------------------------------------------------------------------------|
| FORK_RPC_URL      | Json Url of an Ethereum Rpc to fork. The Rpc provider should support archive mode                        |
| FORK_BLOCK_NUMBER | The block number of the network intended to fork. This can be used to fork a network in a specific state |
| ACCOUNT_PK        | Private key of an ethereum account to unlock and used as a signer                                        |
| CHAIN_ID          | Chain Id of the network                                                                                  |
