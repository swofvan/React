import { NavLink } from "react-router-dom"


function Navbar() {
    return (
        <div className="container">
            
            <div className="row">
                <div className="col">

                    <div className="navbar navbar-expand-sm">

                        <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                        className="collapse navbar-collapse mr-auto"
                        id="navbarNav"
                        style={{ float: "left" }}
                        >

                        

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink to={"/"} className="nav-link">Home</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="navbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to={"/about"} className="nav-link">Aboutus</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="navbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to={"/contact"} className="nav-link">Contactus</NavLink>
                            </li>
                        </ul>
                    </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Navbar;