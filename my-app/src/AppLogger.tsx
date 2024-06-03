// import * as React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Link from './Components/Link';
// import InfoLogProcessor from './Logger/InfoLogProcessor';
// import DebugLogProcessor from './Logger/DebugLogProcessor';
// import { ErrorLogProcessor } from './Logger/ErrorLogProcessor';
// import { LogType } from './Logger/LogType';

// function App() {
//   var logger = new InfoLogProcessor(new DebugLogProcessor(new ErrorLogProcessor(null)));

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <Link href="https://www.google.com" targetBlank={true}>
//           {logger.log(LogType.INFO, "Imp Info Point")} 
//           {logger.log(LogType.DEBUG, "Imp Debug Point")} 
//           {logger.log(LogType.ERROR, "Error occurred in life")}
//         </Link>
//       </header>
//     </div>
//   );
// }

// export default App;
