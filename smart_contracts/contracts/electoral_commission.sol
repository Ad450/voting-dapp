pragma solidity ^0.8.11;

// SPDX-License-Identifier: GPL-3.0

/* this is the interface of the electoral commission contract
 all general elections and or related activities must implement this contract */

abstract contract EC {
    struct Voter {
        address voterId;
        uint256 vote;
        bool hasVoted;
    }

    struct BallotBox {
        uint256 voteCount;
    }

    Voter private voter;

    // ensure the voter is the caller of this contract
    modifier verifyVoter() {
        require(
            !(voter.hasVoted) && voter.voterId == msg.sender && voter.vote == 0
        );
        _;
    }

    function getPartyVotes(string memory _party)
        public
        view
        virtual
        returns (uint256);

    function getTotalVoteCast() public view virtual returns (uint256);

    function voteForParty(string memory _party) external virtual;
}function getTotalVoteCast() public view virtual returns (uint256);

    function voteForParty(string memory _party) external virtual;
}
