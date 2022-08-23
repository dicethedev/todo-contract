import { ethers } from "hardhat";

async function main() {
  
  const amount = ethers.utils.parseEther("10");

    // let [donator1, donator2] = await ethers.getSigners();

  const Donors = await ethers.getContractFactory("Donors");
  const donors = await Donors.deploy();

  await donors.deployed();

  console.log("Donation contract deployed to this address", donors.address);
  const donation = await donors.donate({value: amount});
  console.log("Donated: ", donation);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
