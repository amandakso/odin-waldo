import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {

    return (
        <div>
            <h1>Where's Waldo: Pokemon Edition</h1>
            <p>Catch the 3 listed pokemon as fast as you can! Check out the leaderboard to see the fastest times!</p>
            <label htmlFor="playerName">Player Name: </label><input id="playerName" name="playerName" placeholder="25 character max"onChange={props.onChange}></input>
            <button onClick={props.setUp}><Link to="/game" id="start" >Start Game</Link></button>
        </div>

    );
};

export default Home;