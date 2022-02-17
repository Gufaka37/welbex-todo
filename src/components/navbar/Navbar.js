import React from "react";
import './navbar.css';
import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <h1 className="brand-logo">To-Do</h1>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to='/'>Main</Link></li>
                    <li><Link to="/todo">To-do</Link></li>
                </ul>
            </div>
        </nav>
    )
}