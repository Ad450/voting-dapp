// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.0 <0.9.0;

contract ElectoralCommission{

    // declare a voter object which contains the information of each citizen 
   struct Voter{
       address voterId;
       uint vote;
       bool hasVoted;
   }

   // declare a ballot object that contains the number of votes in the election process
   struct BallotBox{
       uint voteCount;
   }

  // party object
   struct Party{
       uint totalVotes;
   }

   // various parties involved in the election
   Party partyA;
   Party partB;
   Party partC;

   // map all parties to corresponding votes
   mapping  (Party => uint) partyVotes; 

  // to control the number of times a user votes 
   bool private triggerVoteCountError; 

   // events to used by the UI
   // this emits the voted event containing the address of the voter
   event Voted(address who);

    // creating our one object of voter and ballotBox
     Voter voter;
     BallotBox ballotBox;

   // ensure the address calling this smart contract is the voter
   // set vote and hasVoted as seen below
   constructor ()public{
      voter =  Voter({voterId : msg.sender, vote : 0, hasVoted:false});
   }

   // ensure the voter is the caller of this contract
   modifier verifyVoter{
       require(!(voter.hasVoted) && voter.voterId == msg.sender && voter.vote == 0);
       _;
   }

    // read all votes 
    function getTotalVoteCast() public view returns (uint){
        return ballotBox.voteCount;        
    }

    function getPartAVotes() public view returns (uint){
        return ballotBox.voteCount;        
    }

    function getPartBVotes() public view returns (uint){
        return ballotBox.voteCount;        
    }

    function getPartCVotes() public view returns (uint){
        return ballotBox.voteCount;        
    }

    // all verified voters can vote
    function voteForPartyA() private verifyVoter {
        if(!triggerVoteCountError){

        // update the voter info
        voter.vote = 1;
        voter.hasVoted = true;

        //update party total votes
        partyVotes[partyC] =+ 1;
        
        triggerVoteCountError = true;

        // increase the votes in the ballotBox
        ballotBox.voteCount += 1;

        emit Voted({who: voter.voterId});
        }else{
            revert('Can vote only once');
        }
        
    } 


    // all verified voters can vote
    function voteForPartyB() private verifyVoter {
        if(!triggerVoteCountError){

        // update the voter info
        voter.vote = 1;
        voter.hasVoted = true;

        //update party total votes
        partyVotes[partyC] =+ 1;

        triggerVoteCountError = true;

        // increase the votes in the ballotBox
        ballotBox.voteCount += 1;

        emit Voted({who: voter.voterId});
        }else{
            revert('Can vote only once');
        }
        
    } 


    // all verified voters can vote
    function voteForPartyC() private verifyVoter {
        if(!triggerVoteCountError){

        // update the voter info
        voter.vote = 1;
        voter.hasVoted = true;

        //update party total votes
        partyVotes[partyC] =+ 1;

        triggerVoteCountError = true;

        // increase the votes in the ballotBox
        ballotBox.voteCount += 1;

        emit Voted({who: voter.voterId});
        }else{
            revert('Can vote only once');
        }
        
    } 

}








/**  idea for voting
 for a user
 a user can vote for either one of three parties
 a user can only invoke the vote functions once

 for vote counter
 the vote counter will be a contract that keeps track of all votes..

 **/

 /**
 The idea is to to do the work of the electoral commission using a smart contract
 Lets first find out what the EC does

 primary functions of the EC

 1. to validate all citizens prior to casting process
 2. Ensure no citizen votes more than once
 3. counts all the votes
 4. Declare winner

 ......................
 the electoral commission contract will have three objects to keep track of
 the voter, the number of in the ballot box

  **/