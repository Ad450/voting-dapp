// require web3 into the project
const Web3 = require ('web3');

// require ElectoralCommission contract abi into app.js
// the abi exposes all the functions and variables we can communicate with in the contract
const contractJSON = require('../build/contracts/ElectoralCommission.json');

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));

// abi
const initContract = async()=>{

    const abi = contractJSON.abi;
    
    // create an instance of web3 passing in a provider
    // to get address from network
    const id = await web3.eth.net.getId();
    const address = contractJSON.networks[id].address;

    
   // console.log(web3);

    const contract = new web3.eth.Contract(abi, address);
    return contract;
}

initContract();

// get votes of a party

const getPartyVotes = async(party)=>{
    const electoralCommission = await initContract();
    try {       
       const result = await electoralCommission.methods.getPartyVotes(party).call();
       console.log(result);
       
    } catch (error) {
        console.log(error);
        
    }
}

//getPartyVotes('A');

// vote for a party

const voteForParty = async(party)=>{
    const electoralCommission = await initContract();
    try {
        // get first address in ganache
        const addresses = await web3.eth.getAccounts();

        // call voteForParty in the contract
        const result = await electoralCommission.methods.voteForParty(party).send({from :addresses[0] ,gas:3000000 });
    } catch (error) {
        console.log(error);
    }
}


const getTotalVotes = async()=>{
    const electoralCommission = await initContract();
    try {       
       const result = await electoralCommission.methods.getTotalVoteCast().call();
       console.log(result);
       
    } catch (error) {
        console.log(error);
        
    }
}

//voteForParty('A');
getPartyVotes('A');
getTotalVotes();