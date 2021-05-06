import { useCallback } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { mnemonicState } from '../../../atoms/MnemonicAtom';
import { Button, Text, FlexCol } from '../../../ui/Layouts';

const Container = styled(FlexCol)`
  margin-top: 20px;
`;
const Wrapper = styled.div``;
const Adrress = styled(Text)``;
const Balance = styled(Text)``;
const GenerateBtn = styled(Button)`
  padding: 10px;
  font-size: 14px;
`;

export const AccountInfo = ({ generateSeed, account, balance, getBalance }) => {
  const mnemonic = useRecoilValue(mnemonicState);

  const generate = useCallback(() => {
    generateSeed();
    getBalance();
  }, [generateSeed, getBalance]);
  return (
    <Container>
      <GenerateBtn onClick={generate} disabled={!mnemonic}>
        Generate
      </GenerateBtn>
      {account && (
        <Wrapper>
          <Adrress>Adress: {account.address}</Adrress>
          <Balance>Balance: {balance}</Balance>
        </Wrapper>
      )}
    </Container>
  );
};
