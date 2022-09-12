import React from "react";
import pokemon from "../../assets/pokemon.png";

const Game = () => {
    return (
        <div>
            <h1>Game Page</h1>
            <img id="background" src={pokemon} alt={"pokemon"} ></img>
        </div>

    );
};

export default Game;