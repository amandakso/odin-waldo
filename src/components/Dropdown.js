import React, { useEffect } from "react";

const Dropdown = (props) => {
    useEffect(() => {
        let option = document.getElementById('pikachuOption');
        if(props.pikachu === true) {
            option.disabled = true
        } else {
            console.log("pikachu option still available")
        }
    }, [props.pikachu])
    useEffect(() => {
        let option = document.getElementById('munchlaxOption');
        if(props.munchlax === true) {
            option.disabled = true
        } else {
            console.log("munchlax option still available")
        }
    }, [props.munchlax])
    useEffect(() => {
        let option = document.getElementById('espeonOption');
        if(props.espeon === true) {
            option.disabled = true
        } else {
            console.log("espeon option still available")
        }
    }, [props.espeon])
    return (
        <div>
            <select onChange={props.onCheck} name="pokemon" id="pokemon">
                <option value="none" disabled>Select Pokemon</option>
                <option id="pikachuOption" value="pikachu">Pikachu</option>
                <option id="munchlaxOption" value="munchlax">Munchlax</option>
                <option id="espeonOption" value="espeon">Espeon</option>
            </select>
        </div>

    );
};

export default Dropdown;