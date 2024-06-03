import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import Link from './Components/Link';
import BankSystem from './Bank System/BankSystem';

function App() {
 var BS = new BankSystem();
 console.log(BS.createAccount("Aman", 500, Date.now()));
 console.log(BS.createAccount("Nikhil", 5000, Date.now()));
 console.log(BS.createAccount("Nikku", 1000, Date.now()));

 console.log(BS.deposit("1", 500, Date.now()));
 console.log(BS.withdraw("2", 6000, Date.now()))

 console.log(BS.transfer("2", "1", 500, Date.now()));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link href="https://www.google.com" targetBlank={true}>
          Navigate to google
        </Link>
      </header>
    </div>
  );
}

export default App;
