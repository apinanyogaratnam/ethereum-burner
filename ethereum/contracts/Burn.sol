// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Burn {
    uint totalBurned = 0;
    constructor() {}

    function getTotalBurned() public view returns (uint) {
        return totalBurned;
    }
    
    function burn() public payable {
        totalBurned += msg.value;
        selfdestruct(payable(address(this)));
    }
}
