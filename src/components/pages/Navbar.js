import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className="nav">
            <ul className="nav-links">
                <li><Link className="nav-link" to="/" onClick={props.setUp}>Home</Link></li>
                <li><Link className="nav-link" to="/leaderboard" onClick={props.setUp}>Leaderboard</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;