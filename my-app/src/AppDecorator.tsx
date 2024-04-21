// import * as React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Link from './Components/Link';
// import Espresso from './DecoratorPattern/Espresso';
// import Cappuchino from './DecoratorPattern/Cappuchino';
// import LowFat from './DecoratorPattern/LowFat';
// import Cream from './DecoratorPattern/Cream';

// function App() {
// let espresso = new Espresso();
// let cappu = new Cappuchino();

// let lowFatCappu = new LowFat(cappu);
// let creamEspressoLowFat = new Cream(new LowFat(espresso));

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
        
//         <body>{lowFatCappu.getCost()}</body>
//         <a>{creamEspressoLowFat.getCost()}</a>
//       </header>
//     </div>
//   );
// }

// export default App;
