import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { seedState } from '../../../atoms/SeedAtom';

export const useSeed = mnemonicLength => {
  const bip39 = require('bip39');

  const [seed, setSeed] = useRecoilState(seedState);

  const generateSeed = () => {
    // generate mnemonic words
    const mnemonicWords = bip39.generateMnemonic(mnemonicLength);
    //salt
    const passphrase = 'I-made-this-up';
    const salt = 'mnemonic' + passphrase;
    //seed
    const newSeed = bip39
      .mnemonicToSeedSync(mnemonicWords, salt)
      .toString('hex');
    setSeed(newSeed);
  };

  return { seed, generateSeed };
};
