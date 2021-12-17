// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Burn {
    uint totalBurned = 0;
    constructor() {}

    // this will be invalid due to contract being destroyed
    function getTotalBurned() public view returns (uint) {
        return totalBurned;
    }
    
    function burn() public payable {
        totalBurned += msg.value;
        // selfdestruct(payable(address(this))); // this destroys the contract
        payable(address(0x0000000000000000000000000000000000000000)).transfer(address(this).balance); // this transfers the contract to the caller
    }
}
