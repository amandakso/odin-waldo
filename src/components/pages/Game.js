import React from "react";
import pokemon from "../../assets/pokemon.png";
import Dropdown from "../Dropdown";

const Game = (props) => {
    return (
        <div>
            <h2 className="pokemonList">Find the following pokemon: <div><span id="pikachu">&#9683;</span>Pikachu</div><div><span id="munchlax">&#9683;</span>Munchlax</div><div><span id="espeon">&#9683;</span>Espeon</div><div id="message"></div></h2>
            <img id="background" src={pokemon} alt={"pokemon"} onClick={props.onClick}></img>
            <Dropdown onCheck={props.onCheck}/>
        </div>

    );
};

export default Game;