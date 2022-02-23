var pSDAToken = artifacts.require("pSDA");

module.exports = function (deployer) {
    deployer.deploy(pSDAToken, 60000000).then(function () {
        var tokenPrice = 1000000000000000;
        return deployer.deploy(pSDAToken.address, tokenPrice);
    });
};
