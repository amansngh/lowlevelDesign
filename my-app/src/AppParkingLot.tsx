// import * as React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Link from './Components/Link';
// import Vehicle from './ParkingLot/Vehicle';
// import EntranceGate from './ParkingLot/EntranceGate';
// import { VehicleType } from './ParkingLot/VehicleType';
// import ExitGate from './ParkingLot/ExitGate';

// function App() {
// let vehicle1 = new Vehicle('TSO9H9962', VehicleType._4Wheeler);
// let vehicle2 = new Vehicle('DLO9K9963', VehicleType._2Wheeler);

// let ticket1 = EntranceGate.generateTicket(new Date('2024-03-16T19:25:00+05:30'), vehicle1.getVehicleType(), vehicle1.getVehicleNumber());
// let ticket2 = EntranceGate.generateTicket(new Date('2024-03-16T19:25:00+05:30'), vehicle2.getVehicleType(), vehicle2.getVehicleNumber());

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
        
//         <body>{ExitGate.exitComplete(ticket1)}</body>
//         <a>{ExitGate.exitComplete(ticket2)}</a>
//       </header>
//     </div>
//   );
// }

// export default App;
