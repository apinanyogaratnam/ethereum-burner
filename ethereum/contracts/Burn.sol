// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Burn {
    constructor() {}
    
    function payMe() public payable {}
    
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
    
    function burn() public {
        selfdestruct(payable(address(this)));
    }
}
