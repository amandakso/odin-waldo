import React from "react";

const Dropdown = (props) => {
    return (
        <div>
            <select onChange={props.onCheck} name="pokemon" id="pokemon">
                <option value="none" disabled>Select Pokemon</option>
                <option value="pikachu">Pikachu</option>
                <option value="munchlax">Munchlax</option>
                <option value="espeon">Espeon</option>
            </select>
        </div>

    );
};

export default Dropdown;