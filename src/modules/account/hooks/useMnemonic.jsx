import { useRecoilState } from 'recoil';
import { mnemonicState } from '../../../atoms/MnemonicAtom';
export const useMnemonic = () => {
  const [mnemonicLength, setMnemonicLength] = useRecoilState(mnemonicState);

  const handleMnemonicLength = size => {
    setMnemonicLength(size);
  };
  return { mnemonicLength, handleMnemonicLength };
};
