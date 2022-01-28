
const VotingContract = artifacts.require('Voting');

contract("Voting", ()=>{
    it('it has been deployed successfully', async ()=>{
        const voting = await VotingContract.deployed();

        assert(greeter, "contract was not deployed");
    }); 
});

