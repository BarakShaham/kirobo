export const useWeb3 = () => {
  const Web3 = require('web3');
  var provider =
    'https://mainnet.infura.io/v3/9372d87c3b9e4ac18a40315193a56ac4';
  var web3Provider = new Web3.providers.HttpProvider(provider);
  var web3 = new Web3(web3Provider);
  // console.log(web3);
  return { web3 };
};
