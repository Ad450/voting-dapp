// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.0 <0.9.0;

contract TaxCollector {
    uint256 tax;
    uint256 taxRevenue;
    address payable owner;

    constructor () public{ owner = msg.sender; }

    modifier onlyBy {
        require(
            owner == msg.sender, 
        "only owner can call this function"
        );
        _;
    }

    function pay(address taxPayer) public onlyBy payable returns (uint){

    }
}