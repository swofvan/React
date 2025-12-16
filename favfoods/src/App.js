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

import { useState } from 'react';

function App() {

  let favfoods = ['Biriyani', 'Mandhi', 'Icecream', 'Al Faham', 'Chocolate'];
  let food = [ ]; 

  let [message, setMessage] = useState("");

  for (let i = 0; i < favfoods.length; i++) {
    food.push(<li style={{ marginTop:'20px' }}
       key = {i}> {favfoods[i]}
       
        <button className='btn btn-primary' style={{ marginLeft:'20px' }}
        onClick={() => setMessage(`I love ${favfoods[i]}!`)}>Show</button> </li>
    );
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'></div>
        <div className='col'>

          <h1 className='text-center'>Favorite Food</h1>
          <ul style={{ listStyle:'none', marginTop:'50px'}}>{food}</ul>
          <p style={{marginTop:'50px', textAlign: 'center', fontWeight: 'bold'}}>{message}</p>

        </div>
        <div className='col'></div>
      </div>
    </div>
  )
};

export default App;

// Create a simple React component that displays a list of your favorite foods.
// Add a button next to each food that, when clicked, shows a message saying
// "I love [food name]!" below the list. The message should update to show the last clicked food.
// The initial message should show "Select a food that you love!".