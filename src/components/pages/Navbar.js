import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav">
            <ul className="nav-links">
                <li><Link className="nav-link" to="/">Home</Link></li>
                <li><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;