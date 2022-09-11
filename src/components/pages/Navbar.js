import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <h3>Logo</h3>
            <ul>
                <li ><Link to="/">Home</Link></li>
                <li ><Link to="/leaderboard">Leaderboard</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;