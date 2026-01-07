import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../Navber";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/authSlice";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginUser = (e) => {
        e.preventDefault();
        if (email && password) {
        const user = { email, password };
        dispatch(setUser(user));
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
        } else {
            
        alert("Please enter both email and password.");
        }
};

    
    
    return (
        <div>
            <Navbar/>
                
                <div className="container">
                <div className='row'>
                    <div className='col-4 offset-4'>

                    <h1 className='text-center' id='main-heading'>Login</h1>

                    <form id="regform">

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
                                <button
                                    className="btn btn-primary float-right"
                                    onClick={loginUser}
                                    >
                                    Login
                                </button>
                            </div>
                    </form>
                    <Link to={'/register'}>New user? Register here</Link>

                    </div>
                </div>
                </div>
        </div>
    )
}

export default Login;