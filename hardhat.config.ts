import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
import 'hardhat-gas-reporter'
import 'solidity-coverage'

import * as dotenv from 'dotenv'
import { HardhatUserConfig } from 'hardhat/config'

dotenv.config()

const config: HardhatUserConfig = {
  solidity: '0.8.12',
  networks: {
    polygon: {
      url: 'https://polygon-rpc.com',
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
        gasPrice: 40e9
    },
    mumbai: {
      url: 'https://rpc-mumbai.matic.today',
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
        gasPrice: 40e9
    }
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  }
}

export default config
