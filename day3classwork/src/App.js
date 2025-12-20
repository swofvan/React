import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import Room from './components/Room';


function App() {

  return (
    <Room/>
  );
} 

export default App;



// Create a simple app with two components:

// LightSwitch (child) - Contains a button that says either "Turn ON" or "Turn OFF"

// Room (parent) - Displays whether the room is bright or dark

// Requirements:

// When the button shows "Turn ON" and is clicked:
// • The display should change to "The room is bright"
// • The button should change to say "Turn OFF"

// When the button shows "Turn OFF" and is clicked:
// • The display should change to "The room is dark"
// • The button should change to say "Turn ON"