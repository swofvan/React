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

import image from "./images/React-icon.png"

function App() {
  let name = 'Swofvan';
  console.log("React app started");
  return (
    <div className='container'>
      
      <div className='row'>
        <div className='col-md-2'></div>
        <div className='col'>
          <h1 style={{color: 'black', fontWeight: 'normal'}}>Welcome to React Learning, <span style={{color: 'royalblue', fontWeight:'bold'}}>{name}</span></h1>
        </div>
        <div className='col-md-2'></div>
      </div>

      <div className='row' id='row-2'>
        <div className='col-md-2'></div>
        <div className='col'>
          <div className="card-deck">

            <div className="card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/250px-Python-logo-notext.svg.png?20250701090410"
              className="card-img-top img-fluid" alt="Python" id='ex-img'></img>
              
              <div className="card-body">
                <h5 className="card-title text-primary">Python</h5>
                <p className="card-text text-secondary">Python is a high-level, interpreted programming language known for its simplicity and readability. It emphasizes clean code and uses indentation to define code blocks, which makes it very easy to learn and use.</p>
              </div>
            </div>

            <div className="card">
              <img src={image} className="card-img-top img-fluid" alt="React" id='in-img' style={{}}></img>
              
              <div className="card-body">
                <h5 className="card-title text-primary">React</h5>
                <p className="card-text text-secondary">React is a JavaScript library for building user interfaces (UIs) or UI components. It was developed by Facebook and is one of the most popular tools for creating modern, single-page web applications.</p>
              </div>
            </div>
            </div>
        </div>
        <div className='col-md-2'></div>
      </div>
      
    </div>
  )
}

export default App;



// You are tasked with creating a basic “Welcome Card” web page using React and Bootstrap 
// to display a personalized welcome message. Your web page should:

// Display a welcome message in the format:
// Welcome to React Learning, [Your Name]
// Replace [Your Name] with a name stored in a variable (e.g., userName).
// Use Bootstrap for a clean, centered layout with a card component to hold the content.
// Apply a heading style using inline CSS (You can add any style)
// Include two images in the card:
// Internal Image: Import and display an image from your project’s local files (e.g., from an images folder in your project).
// External Image: Display an image from an online URL (e.g., a publicly accessible image link).
// Ensure both images are styled using Bootstrap’s img-fluid class to make them responsive and have a fixed width of 200px for the internal image.
// Add a brief description below the images, such as:
// This is your first card with images and styles!
// Style this text using Bootstrap’s.
// Use the provided starter code structure, ensuring you:
// Import Bootstrap CSS (bootstrap/dist/css/bootstrap.min.css) for styling.
// Import the internal image from your project’s file structure.
// Include basic console logging (e.g., console.log("React app started");)