import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
    return (
        <div>
            <h1>Home Page</h1>
            <label htmlFor="playerName">Player Name: </label><input id="playerName" name="playerName" onChange={props.onChange}></input>
            <button><Link to="/game">Start Game</Link></button>
            <div>max 25 characters</div>
        </div>

    );
};

export default Home;