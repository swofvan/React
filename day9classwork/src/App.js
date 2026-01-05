
import './App.css';

import Navbar from './components/navbar';

import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {

  const [userName, setUserName] = useState('');
  const [email, setEmail] =useState('');
  const [password, setPassword] = useState('');
  const [errmsg, setErrmsg] = useState('');

  const navigate = useNavigate();

  function registerstaff() {
    var user = {
      user_name : userName,
      email : email,
      password : password,
    }

    axios.post('https://worksheet-product.mashupstack.com/register', user).then(response => {
      setErrmsg('');
      navigate('/login');
    }).catch (error =>{
      if(error.response.data.errors) {
        setErrmsg(Object.values(error.response.data.errors).join(''));
      } else{
        setErrmsg('Registration Failed')
      }
    })
  }

  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <Navbar/>
          </div>
        </div>
      </div>

      <div className="container">
        <div className='row'>
          <div className='col-6 offset-3'>
            
            <h1 className='text-center' style={{marginTop: '50px'}}>Employee Registration</h1>

            {errmsg ? <div className="alert alert-danger" style={{marginTop: '50px'}}>{errmsg}</div>:''}
            
            <form>
            <div className="form-group"  style={{marginTop: '50px'}}>
              <input type="text"
                className="form-control"
                placeholder='Username'
                value={userName}
                onInput={(event)=>setUserName(event.target.value)}
                />
            </div>
            <div className="form-group">
              <input type="email"
                className="form-control"
                placeholder='Email'
                value={email}
                onInput={(event)=>setEmail(event.target.value)}
                />
            </div>
            <div className="form-group">
              <input type="password"
                className="form-control"
                placeholder='Password'
                value={password}
                onInput={(event)=>setPassword(event.target.value)}
                />
            </div>                    
            <div className="form-group">
              <button
                type='button'
                className="btn btn-primary float-right"
                onClick={registerstaff}>
                Register
                </button>
            </div>
            </form>
            <Link to={'/login'} style={{marginTop:'50px'}}>Already Registered? Login</Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


// You are building a simple internal dashboard for an electronics store.
// Employees must register or log in to access the product list.
// This helps the store keep product data safe and private.

// What your app must do
//  1. Registration Page (Sign Up)
//     Create a page where new users can register.

//     Show three input fields:
//     User Name
//     Email
//     Password
//     And a Register button
//     When the user clicks the button:
//     Send a POST request to this API:
//     https://worksheet-product.mashupstack.com/register
// Example JSON you should send:
// {
//   "user_name": "alex",
//   "email": "alex@gmail.com",
//   "password": "alex123"
// }
// If registration is successful, take the user to the Login page

// 2. Login Page
// Create a login form with:

// Email

// Password

// And a Login button

// When the user clicks Login:

// Send a POST request to this API:
// https://worksheet-product.mashupstack.com/login
// Example login JSON:
// {
//   "email": "alex@gmail.com",
//   "password": "alex123"
// }
// If login is successful:

// Save the user email and token to Redux

// Redirect the user to the Product List page

// Important Rule
// The Product List page must be accessible only after login.
// If a user tries to open it without logging in, they should be redirected to the Login page.
// 3. Product List Page (Protected Page)
//   After login, show the user a list of products

//   Get the list from this API:
//     https://worksheet-product.mashupstack.com/product
//     Use the token from Redux like this:
//     Authorization: Bearer <token>
//     Each product has:
//     Name
//     Description
//     Price
//     Quantity
//   Display this information in a clean layout or table.
//     Example data from the API:
//     {
//       "id": "2",
//       "name": "Bluetooth Headphones",
//       "description": "Noise-cancelling over-ear headphones with long battery life.",
//       "price": "59.50",
//       "quantity": "50"
//     }