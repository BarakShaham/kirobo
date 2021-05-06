export const useConnectInfura = web3 => {
  web3.eth.getBlockNumber().then(result => {
    console.log('Latest Ethereum Block is ', result);
  });
};
