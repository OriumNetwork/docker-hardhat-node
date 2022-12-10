const {
  FORK_RPC_URL, FORK_BLOCK_NUMBER, ACCOUNT_PK, CHAIN_ID,
} = process.env

const HardhatConfig = {
  solidity: "0.8.9",
  networks: {
    hardhat: {}
  }
}

function addConfig(rootConfig, config, value) {
  if (HardhatConfig.networks.hardhat[rootConfig]) {
    HardhatConfig.networks.hardhat[rootConfig][config] = value
  } else {
    HardhatConfig.networks.hardhat[rootConfig] = {}
    HardhatConfig.networks.hardhat[rootConfig][config] = value
  }
}

if (FORK_RPC_URL)
  addConfig('forking', 'url', FORK_RPC_URL)
if (FORK_BLOCK_NUMBER)
  addConfig('forking', 'blockNumber', Number(FORK_BLOCK_NUMBER))
if (ACCOUNT_PK)
  addConfig('forking', 'accounts', [ACCOUNT_PK])
if (CHAIN_ID)
  HardhatConfig.networks.hardhat.chainId = Number(CHAIN_ID)

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = HardhatConfig
