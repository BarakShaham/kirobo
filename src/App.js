import './App.css';
import { GenerateAccount } from './modules/account/GenerateAccount';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div className='App'>
        <GenerateAccount />
      </div>
    </RecoilRoot>
  );
}

export default App;
