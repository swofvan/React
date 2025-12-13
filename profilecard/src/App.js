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

import image from "./Image/Cristiano_Ronaldo_2018.jpg"


function App() {
  let person = "Cristiano Ronaldo"
  let des = "Cristiano Ronaldo is a Portuguese professional footballer who plays as a forward for, and captains, both Saudi Pro League club Al-Nassr and the Portugal national team"
  return (
    <div className='container'>

      <div className='row text-center' style={{marginTop: '50px', marginBottom: '50px'}}>
        <div className='col-md-3'></div>

        <div className='col'>

          <div className="card" style={{ border: '1px solid #d6da00ff', backgroundColor: '#fcffecff', borderRadius: '10px' }}>
            
            <img src={image} className="card-img-top m-auto" alt="Ronaldo" style={{width: '200px', paddingTop: '20px'}}/>
            
            <div className="card-body">
              <h1 className="card-title text-danger">{person}</h1>
              <p className="card-text">{des}</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtlRMUoPOu7n-TwWYfCEOLwPCYCd2c_BOTeg&s" className="card-img-bottom m-auto" alt="Ronaldo" style={{width: '200px', paddingTop: '20px'}}/>
            </div>
          
          </div>

        </div>

        <div className='col-md-3'></div>
      </div>

    </div>
  )
};

export default App;


// Create a simple "Profile Card" web page using React. The card should show a person’s name, a short description, and their photo.
// Here’s what your project should include:

// The person’s name and description must be stored in variables.

// Use internal CSS to style the card with a border, padding, and background color.

// Use Bootstrap to center the card on the page.

// Show one internal image (saved inside your project folder).

// Also show one external image using a direct image link from the internet