import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../Navber";
import "../../App.css";
import { useDispatch } from "react-redux";

function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const registerUser = (e) => {
        e.preventDefault();
        
        if (password !== confPassword) {
        alert("Passwords do not match");
        return;
    }
        alert('Account created successfully! You can now log in.')
        navigate('/login')
    }

    
    
    return (
        <div>
            <Navbar/>
                
                <div className="container">
                <div className='row'>
                    <div className='col-4 offset-4'>

                    <h1 className='text-center' id='main-heading'>Register</h1>

                    <form id="regform">

                        <div className="form-group">
                                <label>Name:</label>
                                <input type="text"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                />
                            </div>
                            <div className="form-group">
                                <label>Email:</label>
                                <input type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                />
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                />
                            </div>
                            <div className="form-group">
                                <label>Confirm Password:</label>
                                <input type="password"
                                className="form-control"
                                value={confPassword}
                                onChange={(e) => setConfPassword(e.target.value)}
                                required
                                />
                            </div>
                            <div className="form-group">
                                <button
                                    className="btn btn-primary float-right"
                                    onClick={registerUser}
                                    >
                                    Register
                                </button>
                            </div>
                    </form>

                    <Link to={'/login'}>Already have an account? Login</Link>

                    </div>
                </div>
                </div>
        </div>
    )
}

export default Register;