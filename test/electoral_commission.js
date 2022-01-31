const { assert } = require("chai");

const ElectoralCommission =  artifacts.require("ElectoralCommission");

contract('electoral commission', ()=>{
    it('should deploy contract ', async ()=>{
        const electoralCommission = await ElectoralCommission.deployed();

        assert(electoralCommission.address !== '')    
    });

    it('should increment vote by one after voting' , async()=>{
      const electoralCommission = await ElectoralCommission.deployed();
      
      await electoralCommission.vote();
      const result = await electoralCommission.getVotes();
      assert(result.toString() == "1");
    });
});