pragma solidity ^0.5.16;
// SPDX-License-Identifier: GPL-3.0


contract ElectoralCommission {

    address public owner;

    // declare a voter object which contains the information of each citizen 
    struct Voter {
        address voterId;
        uint vote;
        bool hasVoted;
    }

   // declare a ballot object that contains the number of votes in the election process
    struct BallotBox {
        uint voteCount;
    }

   // various parties involved in the election
   // hard coded parties for testing
    string public partyA;
    string public partyB;
    string public partyC;

   // map all parties to corresponding votes
    mapping (string => uint) public partyVotes; 

   // hasAlreadyVotedError will be thrown when user triespublic to vote again

    //error HasAlreadyVotedError (string message);
    bool public triggerVoteCountError = false;

   // events to used by the UI
   // this emits the voted event containing the address of the voter
    event Voted(address who, string message);
    

    // creating our one object of voter and ballotBox
    Voter public voter;
    BallotBox public ballotBox;

   // ensure the address calling this smart contract is the voter
   // set vote and hasVoted as seen below
    constructor () public{
        voter =  Voter({voterId : msg.sender, vote : 0, hasVoted:false});
        // hard coded parties for testing
        partyA = 'A';
        partyB = 'B';
        partyC = 'C';
}

// ensure the voter is the caller of this contract
    modifier verifyVoter{
       require(!(voter.hasVoted) && voter.voterId == msg.sender && voter.vote == 0);
       _;
   }

    // read total votes in election 
    function getTotalVoteCast() public view returns (uint){
        return ballotBox.voteCount;        
    }

    // read total votes of a party
    function getPartyVotes(string memory _party) public view returns (uint){
        return partyVotes[_party];     
    }


    // all verified voters can vote
    function voteForParty(string memory _party) public verifyVoter {
        if(!triggerVoteCountError){

        // update the voter info
        voter.vote = 1;
        voter.hasVoted = true;

        //increase the party total votest by one
        partyVotes[_party] += 1;
        
        // set voteCountError to true to be able to revert network if voter tries to vote again
        triggerVoteCountError = true;

        // increase the votes in the ballotBox
        ballotBox.voteCount += 1;

        emit Voted({who: voter.voterId , message: 'Thank you, vote recorded successfuly'});
        }else{
            revert ('You have already voted');
        }
        
    } 

}

