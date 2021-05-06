import { useRecoilState } from 'recoil';
import { balanceState } from '../../../atoms/BalanceAtom';

export const useBalance = (account, web3) => {
  const [balance, setBalance] = useRecoilState(balanceState);

  const getBalance = async () => {
    if (account) {
      web3.eth.accounts.wallet.add(account);

      const newBalance = await web3.eth.getBalance(account.address);
      setBalance(newBalance);
      console.log(newBalance);
    }
  };

  return { balance, getBalance };
};
