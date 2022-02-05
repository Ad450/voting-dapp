// require web3 into the project
const Web3 = require ('web3');

// require ElectoralCommission contract abi into app.js
// the abi exposes all the functions and variables we can communicate with in the contract
const contractJSON = require('../build/contracts/ElectoralCommission.json');

// abi
const initContract = async()=>{

    const abi = contractJSON.abi;
    
    const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
    // to get address from network
    const id = await web3.eth.net.getId();
    const address = contractJSON.networks[id].address;
    
    // create an instance of web3 passing in a provider
    
   // console.log(web3);

    const contract = new web3.eth.Contract(abi, address);
    return contract;
}

initContract();

const getPartyVotes = async(party)=>{
    const electoralCommission = await initContract();
    try {       
       const result = await electoralCommission.methods.getPartyVotes(party).call();
       console.log(result);
       
    } catch (error) {
        console.log(error);
        
    }
}

getPartyVotes('A');