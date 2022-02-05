// require web3 into the project
const Web3 = require ('web3');

// create an instance of web3 passing in a provider
const web3 = new Web3(new Web3.providers.WebSocketProvider(''));
console.log(Web3);