
import { ethers } from "hardhat";

async function main() {
  const GravatarRegistry = await ethers.getContractFactory("GravatarRegistry")
  const gravatarRegistry = await GravatarRegistry.deploy()
  await gravatarRegistry.deployed()

  console.log("gravity deployed to:", gravatarRegistry.address);
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
