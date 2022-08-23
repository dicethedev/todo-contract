// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface IDonation {

     function donate() payable external;
     function withdraw(uint256 amount) external returns (bool);
}