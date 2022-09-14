import React, { useEffect }from "react";
import pokemon from "../../assets/pokemon.png";
import Dropdown from "../Dropdown";

const Game = (props) => {
    useEffect(() => {
        let pikachu = document.getElementById('pikachu');
        let message = document.getElementById('message');
        if(props.pikachu === true) {
            pikachu.style.display = "inline-block";
            message.innerText = "You Found Pikachu! Find the remaining pokemon!"
        } else {
            pikachu.style.display = "none";
        }
    }, [props.pikachu])
    useEffect(() => {
        let munchlax = document.getElementById('munchlax');
        let message = document.getElementById('message');
        if(props.munchlax === true) {
            munchlax.style.display = "inline-block";
            message.innerText = "You Found Munchlax! Find the remaining pokemon!"
        } else {
            munchlax.style.display = "none";
        }
    }, [props.munchlax])
    useEffect(() => {
        let espeon = document.getElementById('espeon');
        let message = document.getElementById('message');
        if(props.espeon === true) {
            espeon.style.display = "inline-block";
            message.innerText = "You Found Espeon! Find the remaining pokemon!"
        } else {
            espeon.style.display = "none";
        }
    }, [props.espeon])

    useEffect(() => {
        let message = document.getElementById('message');
        if (props.pikachu && props.munchlax && props.espeon) {
            message.innerText = 'All pokemon have been found!';
        }
    }, [props.pikachu, props.munchlax, props.espeon])


    return (
        <div>
            <h2 className="pokemonList">Find the following pokemon: <div><span id="pikachu">&#9683;</span>Pikachu</div><div><span id="munchlax">&#9683;</span>Munchlax</div><div><span id="espeon">&#9683;</span>Espeon</div><div id="message"></div></h2>
            <img id="background" src={pokemon} alt={"pokemon"} onClick={props.onClick}></img>
            <Dropdown pikachu={props.pikachu} munchlax={props.munchlax} espeon={props.espeon} onCheck={props.onCheck}/>
        </div>

    );
};

export default Game;