import { NavLink, useNavigate } from "react-router-dom";
import { removeEmloyee } from "../store/authSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {

    var user = useSelector(store=>store.auth.employee);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function logout(){
        if(user){
            axios.post('https://worksheet-product.mashupstack.com/logout',{},{
               headers:{'Authorization':"Bearer "+ user.token}
            });
            dispatch(removeEmloyee());
            navigate('/login');
        }
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-light" style={{backgroundColor: '#e3f2fd'}}>
        <div
        className="collapse navbar-collapse mr-auto"
        id="navbarNav"
        style={{ float: "left" }}
        >
            <ul className="navbar-nav ml-auto" style={{ color: "#ffffff" }}>
                <li className="nav-item">
                <NavLink to={"/"} className="nav-link">
                    Register
                </NavLink>
                </li>
                {/* <li className="nav-item">
                <NavLink to={"/login"} className="nav-link">
                    Login
                </NavLink>
                </li> */}
                {user?
                    <li className="nav-item">
                    <span className="nav-link" onClick={logout}>Logout</span>
                    </li> :
                    <li className="nav-item">
                        <NavLink to={"/login"} 
                            className={
                                'nav-link '+
                                (status => status.isActive ? 'active' : '')
                                } 
                                >
                            Login
                        </NavLink>
                    </li>
                }

                 <li className="nav-item">
                <NavLink to={"/products"} className="nav-link">
                    Products
                </NavLink>
                </li>
            </ul>
        </div>
    </nav>
    )
}
export default Navbar;