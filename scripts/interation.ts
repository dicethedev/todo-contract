require("dotenv").config({ path: ".env" });
import { BytesLike } from "ethers";
import { ethers } from "hardhat";

const helpers = require("@nomicfoundation/hardhat-network-helpers");

async function main() {
  let provider = {
    PrivateKey: process.env.PRIVATE_KEY as BytesLike,
    URL: process.env.GOERLI_RPC_URL,
  };
  const provider2 = ethers.getDefaultProvider("goerli", provider.URL);
  let wallet = new ethers.Wallet(provider.PrivateKey, provider2);

  const _value = ethers.utils.parseEther("10");

  const CONTRACTADDRESS = "0xD296f32417173f824b547f14d0DAb51618fa46F3";
  const donors = await ethers.getContractAt("IDonation", CONTRACTADDRESS);

      const add1 = "0x7A3E0DFf9B53fA0d3d1997903A48677399b22ce7";
      await helpers.impersonateAccount(add1);
      const impersonatedadd1 = await ethers.getSigner(add1);
      
      const add2 = "0x9ee15CF9EC4B3830bBedA501d85F5329Ea3C595C";
      await helpers.impersonateAccount(add2);
      const impersonatedadd2 = await ethers.getSigner(add2);
      
  const donate = await donors.connect(impersonatedadd2).donate({ value: _value});
  console.log("Donated :", donate);

//   const bal1 = impersonatedadd2.withdraw();
//   //console.log("the withdrawn", withdraw);
//   console.log("the balance", bal1);
 
  //   await wallet.sendTransaction({ to: CONTRACTADDRESS, value: _value });
  //   console.log();
  //   console.log("contractBalanc", await MULTISIG.contractBalance());
  //console.log("")
  //await MULTISIG.withdrawEther(_value);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});