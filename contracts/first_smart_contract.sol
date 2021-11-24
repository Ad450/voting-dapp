// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.0 <0.9.0;

contract TaxCollector {
    uint256 tax = 200;
    uint256 taxRevenue;
    address payable owner;

    constructor () public{ owner = msg.sender; }

    mapping (address=> uint256) accountBalance;

    struct Collectors{
        string name;
       string gender;
        uint age;
    }

    modifier onlyBy {
        require(
            owner == msg.sender, 
        "only owner can call this function"
        );
        _;
    }

    function pay(address taxPayer) public onlyBy payable returns (uint){
        accountBalance[taxPayer] = tax - accountBalance[taxPayer];
        return accountBalance[taxPayer];
    }
}