// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.0 <0.9.0;

contract Voter{
    // this represents a single votes
   address public voter;

    // make sure the voter is actually the bearer of the account 
    // just like checking the voterID of a person before voting
   constructor() {
       voter = msg.sender;
   }
    // create an event that will be listened to on the frontend when a user votes and when a user tries to overvote
    event Voted(address who);

   // create an error that will be sent to potential voter when overvoting is tried
    error OverVoting (string message);

    // vote modifier checks if address (voter) has already voted 
    mapping (address => uint16) private count;

    //vote modifier checks if address (voter) has already voted 
    modifier canVote{
        require(count[voter] >= 0, 'vote counts cannot be negative ');
        require(count[voter] == 1 && voter == msg.sender, 'must be a user to perform this operation');
        _;
    }

    // vote function to carry out voting

    function vote() canVote public view{
        // further checks for overvoting
        if(count[voter] == 0){
            count[voter] + 1;
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