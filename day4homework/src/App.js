import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';

function App() {

  let msg = "Hello, user! Welcome to our site.";

  useEffect (() => {
    console.log('Welcome message displayed.')
  }, [],)

  return (
    <div className="App">
      <h1>{msg}</h1>
    </div>
  );
}

export default App;


// You are creating a small welcome page for a website.

// When the page loads for the first time, a message should appear in the browser console that says:
// "Welcome message displayed."

// On the screen, show this text:
// "Hello, user! Welcome to our site."

// There should be no button and no interaction. The console message should only appear once,
// the first time the page loads.

