export const useAccount = (seed, web3) => {
  console.log(web3);
  const account = seed ? web3.eth.accounts.create([seed]) : null;

  return { account };
};
