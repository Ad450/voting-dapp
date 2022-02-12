pragma solidity ^0.7.1;
import "./electoral_commission.sol";

// SPDX-License-Identifier: GPL-3.0

contract GeneralElection is EC {
    address public owner;

    // map all parties to corresponding votes
    mapping(string => uint256) private partyVotes;

    // hasAlreadyVotedError will be thrown when user tries to vote again
    // error HasAlreadyVoted(address who, string message);

    //error HasAlreadyVotedError (string message);
    bool private triggerVoteCountError = false;

    // will be emitted when an address(voter) votes
    event Voted(address who, string message);

    Voter private voter;
    BallotBox private ballotBox;

    // ensure the address calling/transacting this smart contract is the voter
    // set vote and hasVoted as seen below
    constructor() {
        voter = Voter({voterId: msg.sender, vote: 0, hasVoted: false});
        // hard coded parties for testing

        ballotBox = BallotBox({voteCount: 0});
    }

    // read total votes in election
    function getTotalVoteCast() public view virtual override returns (uint256) {
        return ballotBox.voteCount;
    }

    // read total votes of a party
    function getPartyVotes(string memory _party)
        public
        view
        virtual
        override
        returns (uint256)
    {
        return partyVotes[_party];
    }

    // all verified voters can vote
    function voteForParty(string memory _party)
        external
        virtual
        override
        verifyVoter
    {
        if (!triggerVoteCountError) {
            // update the voter info
            voter.vote = 1;
            voter.hasVoted = true;

            //increase the party total votes by one
            partyVotes[_party] += 1;

            // set voteCountError to true to be able to revert network if voter tries to vote again
            triggerVoteCountError = true;

            // increase the votes in the ballotBox
            ballotBox.voteCount += 1;

            emit Voted({
                who: voter.voterId,
                message: "Thank you, vote recorded successfuly"
            });
        } else {
            revert("You have already voted");
        }
    }
}
