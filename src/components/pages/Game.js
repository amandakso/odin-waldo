import React from "react";
import pokemon from "../../assets/pokemon.png";
import Dropdown from "../Dropdown";

const Game = (props) => {
    return (
        <div>
            <h1>Game Page</h1>
            <img id="background" src={pokemon} alt={"pokemon"} onClick={props.onClick}></img>
            <Dropdown onCheck={props.onCheck}/>
        </div>

    );
};

export default Game;