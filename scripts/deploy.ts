import { ethers, run } from 'hardhat'

import { PaRusNFT__factory, PaRusToken__factory } from '../typechain-types'

async function main() {
  const [signer] = await ethers.getSigners()

  const parusToken = await new PaRusToken__factory(signer).deploy()

  await parusToken.deployed()

  console.log('PaRusToken deployed to:', parusToken.address)

  await run('verify:verify', {
    address: parusToken.address,
    contract: 'contracts/PaRusToken.sol:PaRusToken'
  })

}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
