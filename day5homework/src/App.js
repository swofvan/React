import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';

function App() {

  const showMessage = () => {
    document.getElementById('msg').innerHTML = 'Hello from React! I love this page!';
    document.getElementById('heading').style.backgroundColor = 'lightblue';
  }

  return (
    <div className="container">
      <Navbar/>

      <div className='row'>

        <div className='col-3'></div>

        <div className='col'>

          <div className="card" style={{textAlign: 'center', marginTop: '50px'}}>
            <div className="card-body">
              <h1 className="card-title" id='heading'>This is the Home Page</h1>
              <div><h4 id='msg' className='text-success'></h4></div>

              <br/><br/>
              
              <button
                className='btn btn-primary'
                onClick={showMessage}>Show Enthusiasm</button>

            </div>
          </div>

          </div>

        <div className='col-3'></div>

      </div>

    </div>
  );
}

export default App;


// Create a React Personal Website Component

// Create a simple React website that manages three pages for personal information.
// Display a Navbar with links to Home, About, and Contact pages.
// Each page shows a unique message: “This is the Home Page”, “This is the About Page”,
// or “This is the Contact Page”. Highlight the active page’s link in the Navbar.

// Requirements:
// App Structure:
// Use functional components:

// Parent (App.js): Manages routing and includes a Navbar.
// Navbar (Navbar.js): Displays links to Home, About, and Contact.

// Page Components (Home.js, About.js, Contact.js): Display respective page messages.
// Use router.js for routing configuration.
// Page Content:

// Display in a Bootstrap card (using classes like card, p-4, mb-4):

// Home: “This is the Home Page”.
// About: “This is the About Page”.
// Contact: “This is the Contact Page”.
// Include a button (btn btn-primary) labeled “Show Enthusiasm” on each page.

// On button click, update a 
//  to show “Hello from React! I love this page!” and change the

//  background to lightblue (e.g., const headingColor = "lightblue").

// Initial message: “Click the button to see my enthusiasm!”.
// Use document.getElementById for message and heading updates, avoiding hooks, ternary operators, or conditions.

// Navbar:

// Create a separate Navbar.js component with links to Home, About, and Contact.
// Style with Bootstrap nav and nav-link classes.
// Highlight the active page’s link with a different color (e.g., blue) using CSS in App.css.
// Routing:
// Configure routing in router.js using React Router to navigate between Home, About, and Contact pages.
// Ensure the correct page displays when a link is clicked.