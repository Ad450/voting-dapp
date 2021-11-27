// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.0 <0.9.0;

contract Voting {
    uint256  teamA = 0;
    uint256 teamB = 0;
    uint256 teamC = 0;
    address voter;

    mapping(address=> uint) eligibility;

    constructor () public {
        voter = msg.sender;
    }

    modifier onlyEligible{
        require(eligibility[voter] == 0, "you can vote only once");
        _;
    }

    function voteForA()  private onlyEligible returns (uint){
        uint votes = teamA + 1;
        eligibility[voter] = 1;
        return votes;
    }

    function voteForB() private onlyEligible returns (uint){
        uint votes = teamB + 1;
        eligibility[voter] = 1;
        return votes;
    }

    function voteForC() private onlyEligible returns (uint){
         uint votes = teamC + 1;
         eligibility[voter] = 1;
         return votes;
    }

    function returnA() public  returns (uint){
       return voteForA();
    }
    function returnB() public   returns (uint){
       return voteForB();
    }
    function returnC() public  returns (uint){
       return voteForC();
    }
}




