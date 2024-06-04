import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import Link from './Components/Link';
import Solution from './Splitwise/splitwise';

function App() {
 var BS = new Solution();
 BS.run();

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
