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

import { useState, useEffect } from 'react';


function App() {

  let [msg , setmsg] = useState('Guest');

  useEffect( () => {
    console.log(`Welcome, ${msg}`)
  }, [msg]);

  let handleClick = () => {
    setmsg('Alice');
  };

  return (
    <div className="App">
      <h1 style={{ marginTop:'50px' }}>Welcome, {msg}!</h1>
      <br/>
      <button className='btn btn-primary' onClick={handleClick}>Login as Alice</button>
    </div>
  );
}

export default App;



// Create a simple profile viewer. When the page opens, show a message saying “Welcome, Guest!”.
// Then, add a button labeled “Login as Alice”.

// When the button is clicked:

// .   The message should change to “Welcome, Alice!”

//      A message should also appear in the browser console: “User changed to Alice”

//      Use useEffect() to show the console message only when the user name changes.

