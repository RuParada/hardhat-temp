import { ethers, run } from 'hardhat'

import { PaRusNFT__factory, PaRusToken__factory } from '../typechain-types'

async function main() {
  const [signer] = await ethers.getSigners()

  const parusToken = await new PaRusToken__factory(signer).deploy()

  await parusToken.deployed()

  console.log('PaRusToken deployed to:', parusToken.address)

  const PaRusNFT = await new PaRusNFT__factory(signer).deploy()

  await PaRusNFT.deployed()

  console.log('PaRusNFT deployed to:', PaRusNFT.address)

  await PaRusNFT.safeMint(
    signer.address,
    'https://bafybeiak2bn6dcucitmpyhxce2oksyi66fw2f7iycy7b3zbj5dm7wb4nau.ipfs.infura-ipfs.io/'
  )

  await run('verify:verify', {
    address: parusToken.address,
    contract: 'contracts/PaRusToken.sol:PaRusToken'
  })

  await run('verify:verify', {
    address: PaRusNFT.address,
    contract: 'contracts/PaRusNFT.sol:PaRusNFT'
  })
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
