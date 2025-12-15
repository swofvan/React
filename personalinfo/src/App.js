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

function update() {
  let headcolor = 'royalblue';
  document.getElementById('change').innerHTML = 'Hello from React! I love my hobbies!';
  document.getElementById('heading').style.backgroundColor = headcolor;
}


function App () {

  const name = "Alex";
  const age = 20;
  const isStudent = true;
  const favoriteHobbies = ["Reading", "Hiking", "Coding"];
  const hobbies = []

  for (let i = 0; i < favoriteHobbies.length; i++) {
    hobbies.push(<li key={i}>{favoriteHobbies [i]}</li>)
  }

  return (
    <div className='container'>

      <div className='row' style={{ marginTop:'20px' }}>

        <div className='col-md-3'></div>

        <div className='col'>

          <h1 className='text-center' id='heading'>Personal Informations</h1>

          <div className="card text-dark border-primary mb-3" style={{ marginTop:'20px' }}>
            <div className="card-header">Personal Informations</div>
            <div className="card-body">
              <h5 className="card-title">Name: <b id='name'>{name}</b></h5>
              <p className="card-text">Age: <b> {age} </b></p>
              <p className="card-text">isStudent: <b> {isStudent.toString()} </b></p>
            </div>
          </div>
        </div>

        <div className='col-md-3'></div>

      </div>

      <div className='row'>

      <div className='col-md-3'></div>

      <div className='col'>

        <table className='text-left' style={{ marginTop: '20px' }}>
          <tr>
            <td>Hobbies: <span className='text-muted'> (forloop) </span></td>
            <td style={{ padding:'0px 0px 0px 20px' }}><ul type = "circle">{hobbies}</ul></td>
          </tr>
        </table>

        <table className='text-left'>
          <tr>
            <td>Hobbies: <span className='text-muted'> (map()) </span></td>
            {/* <td  style={{ padding:'50px' }}> */}
              {favoriteHobbies.map((item) => {return <td style={{ padding:'0px 0px 0px 50px' }}>{item}</td>})}
            {/* </td> */}
          </tr>
        </table>

        <p id='change'  style={{ marginTop: '20px' }}></p>

      </div>

      <div className='col-md-3'  style={{ marginTop: '20px' }}></div>

      </div>

      <div className='row'>

        <div className='col-md-3'></div>

        <div className='col'>
          <button className='btn btn-primary' onClick={update}>Show Enthusiasm</button>
        </div>

        <div className='col-md-3'></div>

      </div>   

    </div>
  )
}

export default App;

// Create a simple React component that manages personal information and hobbies. 
// Add a card to display personal details and two lists for hobbies, 
// one using a for loop and one using map(). Include a button to show a message 
// “Hello from React! I love my hobbies!” below the lists. The initial message should show 
// “Click the button to see my enthusiasm!”.

// Requirements:
// Display Personal Information:
//  Create a Bootstrap card to display:
//  Your name (string, e.g., const name = "Alex").
//  Your age (number, e.g., const age = 20).
//  Whether you’re a student (boolean, e.g., const isStudent = true, displayed directly as true or false ).
//  Style the card with basic Bootstrap classes

// List Favorite Hobbies:
// Create an array of your 3 favorite hobbies (e.g., const favoriteHobbies = ["Reading", "Hiking", "Coding"]).
// Display the hobbies in two separate lists:
// One using a normal for loop to generate <li> elements.
// One using the map() method to generate <li> elements.
// Style the lists with basic HTML <ul> and <li> elements

// Interactive Button:
//   Add a Bootstrap-styled button (e.g., btn btn-primary) labeled “Show Enthusiasm”.
//   When clicked, the button should:
//   Call a function to update a <p> element below the lists to display the message Hello from React! I love my hobbies! 
//   Change the background color of a heading (e.g., <h1>) using a variable (e.g., const headingColor = "lightblue").
//   The initial message in the <p> element should be Click the button to see my enthusiasm!.
// Use basic JavaScript (e.g., document.getElementById) to update the message
//  using minimal custom CSS in App.css if needed for list styling.