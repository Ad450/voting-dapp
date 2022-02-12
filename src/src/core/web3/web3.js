
// require web3 into the project

const Web3 = require('web3');

// get contract JSON from build
const contractJSON = require ('../../../../smart_contracts/build/contracts/GeneralElection.json');

// create an instance of web3 and give it a provider
// This provide is the object that does the communication between our 
// project and the ethereum blockchain

const web3 = new Web3('HTTP://127.0.0.1:7545');

// now we have our instance created
// lets get the smart contract through the web3 instance

// we need the abi of the contract and the address of the contract 
// on the network

const abi  = contractJSON.abi;
// try to understand how the address it retrieved from the network
//const address = 

// now we can interact with our contract by calling our getContract
 const getContract = ()=>{
    const contract  = new web3.eth.Contract(abi);
    return contract;
}



