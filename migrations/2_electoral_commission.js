const ElectoralCommission =  artifacts.require("ElectoralCommission");

module.exports = function (deployer) {
    deployer.deploy(ElectoralCommission);
  };