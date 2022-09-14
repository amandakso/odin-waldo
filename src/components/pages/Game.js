import React, { useState, useEffect }from "react";
import pokemon from "../../assets/pokemon.png";
import Dropdown from "../Dropdown";

const Game = (props) => {
    const [timer, setTimer] = useState(0);
    const [displayTimer, setDisplayTimer] = useState(0);
    const [totalTime, setTotalTime] = useState(0);


    // add time to timer
    useEffect(() => {
        let interval;
        if (props.gameOver) {
            setTotalTime(timer);
            clearInterval(interval);
        } else {
            interval = setInterval(() => {
                setTimer((timer) => timer + 1);
            },1000)
        }
        return () => {
            clearInterval(interval);
        }
    }, [props.gameOver, timer])
    // display timer
    useEffect(() => {
        let currentTime = timer;
        let hours = Math.floor(currentTime / 3600).toString().padStart(2,0);
        let minutes = Math.floor((currentTime - hours * 3600) / 60).toString().padStart(2,0);
        let seconds = (currentTime - (hours * 3600 + minutes * 60)).toString().padStart(2,0);
        let display = hours + ":" + minutes + ":" + seconds;
        setDisplayTimer(display);
    },[timer])

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
        if (props.gameOver) {
            message.innerText = 'All pokemon have been found!';
        }
    }, [props.gameOver])


    return (
        <div>
            <h2 className="pokemonList"><span>{displayTimer}</span>{props.player}, find the following pokemon: <div><span id="pikachu">&#9683;</span>Pikachu</div><div><span id="munchlax">&#9683;</span>Munchlax</div><div><span id="espeon">&#9683;</span>Espeon</div><div id="message"></div></h2>
            <img id="background" src={pokemon} alt={"pokemon"} onClick={props.onClick}></img>
            <Dropdown pikachu={props.pikachu} munchlax={props.munchlax} espeon={props.espeon} onCheck={props.onCheck}/>
        </div>

    );
};

export default Game;