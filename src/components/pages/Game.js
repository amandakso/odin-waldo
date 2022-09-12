import React from "react";
import pokemon from "../../assets/pokemon.png";

const Game = (props) => {
    return (
        <div>
            <h1>Game Page</h1>
            <img id="background" src={pokemon} alt={"pokemon"} onClick={props.onClick}></img>
        </div>

    );
};

export default Game;