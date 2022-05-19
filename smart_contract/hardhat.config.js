// https://eth-goerli.alchemyapi.io/v2/BILiV9oLWrCktcWfkUpGY9hImeex-LPC

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/BILiV9oLWrCktcWfkUpGY9hImeex-LPC',
      accounts: [''],
    },
  },
};
