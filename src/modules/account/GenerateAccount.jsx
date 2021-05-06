import { useSeed } from './hooks/useSeed';
import { useMnemonic } from './hooks/useMnemonic';
import { useConnectInfura } from './hooks/useConnectInfura';
import styled from 'styled-components';
import { AccountInfo } from './components/AccountInfo';
import { useWeb3 } from './hooks/useWeb3';
import { useBalance } from './hooks/useBalance';
import { useAccount } from './hooks/useAccount';
import { Button, Text } from '../../ui/Layouts';

const Container = styled.div`
  padding: 30px;
  height: 100vh;
  background-color: #dfdfdf;
  display:flex
  flex-direction:column
`;
const Header = styled.h2``;
const Option = styled(Text)``;
const MnemonicLengthBtn = styled(Button)``;

export const GenerateAccount = () => {
  const entropyOptions = [128, 160, 192, 224, 256];
  const { web3 } = useWeb3();
  const { mnemonicLength, handleMnemonicLength } = useMnemonic();
  const { seed, generateSeed } = useSeed(mnemonicLength);
  const { account } = useAccount(seed, web3);
  const { balance, getBalance } = useBalance(account, web3);
  useConnectInfura(web3);

  return (
    <Container>
      <Header> Select entropy length </Header>
      {entropyOptions.map(option => (
        <MnemonicLengthBtn
          onClick={() => handleMnemonicLength(option)}
          key={option}>
          <Option>{option}</Option>
        </MnemonicLengthBtn>
      ))}

      <AccountInfo
        generateSeed={generateSeed}
        balance={balance}
        getBalance={getBalance}
        account={account}
      />
    </Container>
  );
};
