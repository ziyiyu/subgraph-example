
import { ethers } from "hardhat";

async function main() {
  const GravatarRegistryFactory = await ethers.getContractFactory("GravatarRegistryFactory")
  const registryFactory = await GravatarRegistryFactory.deploy()
  await registryFactory.deployed()

  console.log("factory deployed to:", registryFactory.address);
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
