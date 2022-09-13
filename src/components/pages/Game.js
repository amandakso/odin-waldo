import React, { useEffect }from "react";
import pokemon from "../../assets/pokemon.png";
import Dropdown from "../Dropdown";

const Game = (props) => {
    useEffect(() => {
        let pikachu = document.getElementById('pikachu');
        if(props.pikachu === true) {
            pikachu.style.display = "inline-block";
        } else {
            pikachu.style.display = "none";
        }
    }, [props.pikachu])
    useEffect(() => {
        let munchlax = document.getElementById('munchlax');
        if(props.munchlax === true) {
            munchlax.style.display = "inline-block";
        } else {
            munchlax.style.display = "none";
        }
    }, [props.munchlax])
    useEffect(() => {
        let espeon = document.getElementById('espeon');
        if(props.espeon === true) {
            espeon.style.display = "inline-block";
        } else {
            espeon.style.display = "none";
        }
    }, [props.espeon])


    return (
        <div>
            <h2 className="pokemonList">Find the following pokemon: <div><span id="pikachu">&#9683;</span>Pikachu</div><div><span id="munchlax">&#9683;</span>Munchlax</div><div><span id="espeon">&#9683;</span>Espeon</div><div id="message"></div></h2>
            <img id="background" src={pokemon} alt={"pokemon"} onClick={props.onClick}></img>
            <Dropdown pikachu={props.pikachu} munchlax={props.munchlax} espeon={props.espeon} onCheck={props.onCheck}/>
        </div>

    );
};

export default Game;