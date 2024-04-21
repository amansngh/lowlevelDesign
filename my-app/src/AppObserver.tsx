// import * as React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Link from './Components/Link';
// import StockObservable from './ObserverPattern/Observable/StockObservable';
// import User from './ObserverPattern/User';
// import { EmailObserver } from './ObserverPattern/Observer/EmailObserver';
// import { TextObserver } from './ObserverPattern/Observer/TextObserver';

// function App() {
//   let U = new User();
//   U.addUser('Nikhil');
//   U.addUser('Aman');

//   let Observable = new StockObservable();
//   let email = new EmailObserver(U, Observable);
//   let text = new TextObserver(U, Observable);

//   Observable.register(email);
//   Observable.register(text);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <Link href="https://www.google.com" targetBlank={true}>
//           Navigate to Google
//         </Link>
        
//         <body>{Observable.setdata(1)}</body>
//         <a>{Observable.getdata()}</a>
//       </header>
//     </div>
//   );
// }

// export default App;
