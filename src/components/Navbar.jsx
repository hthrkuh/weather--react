import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import { ThemeContext } from '../context/ThemeContext'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { colorTheme } = this.context;
        return (

            <nav className={`navbar navbar-expand-lg navbar-${colorTheme} bg-${colorTheme}`} style={{
                border: "solid",
                zIndex: 1,
                borderColor: "darksalmon"
            }} >
                <div className="container-fluid">

                    <NavLink className="navbar-brand" to={{
                        pathname: "/weather--react",
                        search: "",
                        hash: "",
                        state: {}
                    }} >
                        Home
                    </NavLink>
                    <button className="navbar-toggler ms-sm-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/MyFav">
                                    MyFav
                                </NavLink>
                            </li>

                        </ul>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <HeaderComponent />
                            </li>

                        </ul>

                    </div>
                    <div className="navbar-brand text-wrap">Weather App</div>
                </div>
            </nav>
        );
    }
}
Navbar.contextType = ThemeContext;

export default Navbar;

