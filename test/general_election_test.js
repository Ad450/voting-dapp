const { assert } = require("chai");

const GeneralElection =  artifacts.require("GeneralElection");

contract('general election', ()=>{
    // 
    it('should deploy contract ', async ()=>{
    
     // get properties of deployed GeneralElection contract
        const generalElection = await GeneralElection.deployed();
      
     // check to see if votes of the party is incremented
        assert(generalElection.address !== '')    
    });

    it('should increment vote by one after voting' , async()=>{
      // get properties of deployed GeneralElection contract  
      const generalElection = await GeneralElection.deployed();
      
      // call voteForParty on generalElection instance
      await generalElection.voteForParty('DDD');
       
      // get the votes of the party above 
      const result = await generalElection.getPartyVotes('DDD');

      // check to see if votes of the party is incremented
      assert(result.toString() === "1");
    });
});