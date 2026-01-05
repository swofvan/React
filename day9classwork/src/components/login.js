import axios from "axios";
import { useState } from "react";

import Navbar from "./navbar";

import store from "../store/store";
import { useDispatch } from "react-redux";
import { setEmployee } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errmsg, setErrmsg] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function attemptLogin() {
        axios.post('https://worksheet-product.mashupstack.com/login', {
            email : email,
            password : password
        }).then(response => {
            setErrmsg('')
            var employee = {
                email : email,
                token : response.data.token
            };
            dispatch(setEmployee(employee));
            navigate('/products')
            console.log(response.data.token);
        }).catch(error => {
            if (error.response.data.errors){
                setErrmsg(Object.values(error.response.data.errors).join(''))
            } else if (error.response.data.message) {
                setErrmsg(error.response.data.message)
            } else{
                setErrmsg('Login Failed')
            }
        })
    }

    return(
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
                    
                    <h1 className='text-center' style={{marginTop: '50px'}}>Employee Login</h1>
                    {errmsg ? <div className="alert alert-danger">{errmsg}</div> :''}
                    
                    <div className="form-group" style={{marginTop: '50px'}}>
                        <input type="email"
                        className="form-control"
                        placeholder='Email'
                        value={email}
                        onInput={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="password"
                        className="form-control"
                        placeholder='Password'
                        value={password}
                        onInput={(event) => setPassword(event.target.value)}
                        />
                    </div>
                                
                    <div className="form-group">
                        <button
                            className="btn btn-primary float-right"
                            onClick={attemptLogin}
                            type="button"
                            >
                            Login
                            </button>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;


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
