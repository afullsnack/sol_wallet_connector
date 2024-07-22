import logo from './logo.svg';
import { Wallet } from './components/WalletProvider';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Connector example with @solana/wallet-adapter
        </p>
        <Wallet></Wallet>
      </header>
    </div>
  );
}

export default App;
