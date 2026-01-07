import { NavLink, useNavigate } from "react-router-dom";
import { removeUser } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);

    const logout = () => {
        if (user) {
        
        dispatch(removeUser());
        localStorage.removeItem('user');

        alert('You have been logged out successfully.');
        }

        navigate('/login');
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-light" style={{backgroundColor: '#e3f2fd'}}>
            <div className="navbar-brand">
                <h4>BookMark</h4>
            </div>
            
            <div
            className="collapse navbar-collapse mr-auto"
            id="navbarNav"
            style={{ float: "left" }}
            >
                
                <ul className="navbar-nav ml-auto" style={{ color: "#ffffff" }}>

                    <li className="nav-item">
                    <NavLink to={"/"} className="nav-link" style={{color:'#010948'}}>
                        BookMarks
                    </NavLink>
                    </li>
                    <li className="nav-item" id="#navreg"
                        style={{backgroundColor: '#010948', borderRadius:'5px', marginLeft:'20px'}}>
                    <NavLink to={"/register"} className="nav-link text-white">
                        Register
                    </NavLink>
                    </li>

                {user ?

                    <li className="nav-item" id="#navreg"
                        style={{backgroundColor: '#f44418ff', borderRadius:'5px', marginLeft:'8px'}}>
                    <span className="nav-link text-white" onClick={logout}>
                        Logout
                    </span>
                    </li>
                   :
                    <li className="nav-item" id="#navreg"
                        style={{backgroundColor: '#38b701ff', borderRadius:'5px', marginLeft:'8px'}}>
                    <NavLink to={"/login"} className="nav-link text-white">
                        Login
                    </NavLink>
                    </li>
                }
                    
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;