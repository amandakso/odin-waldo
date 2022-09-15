import React, { useState, useEffect } from "react";
import { getScores } from "../../firebase/config";

const Leaderboard = () => {

    const [scores, setScores] = useState([]);
    useEffect(() => {
        (async () => {
            const data = await getScores();
            setScores(data);
        })();
    }, [])




    const displayTime = (time) => {
        let hours = Math.floor(time / 3600).toString().padStart(2,0);
        let minutes = Math.floor((time - hours * 3600) / 60).toString().padStart(2,0);
        let seconds = (time - (hours * 3600 + minutes * 60)).toString().padStart(2,0);
        let display = hours + ":" + minutes + ":" + seconds;
        return display;
    }
    return (
        <div>
            <h1>Leaderboard</h1>
            <div className="leaders">
                {scores.map((score, index) => {
                    return(
                    <div className="leader" key={index}>
                    <p className="player">{index + 1 + "."}{score.data().name}</p>
                    <p>{displayTime(score.data().time)}</p>
                    <p>{score.data().date.toDate().toDateString().slice(4)}</p>
                    </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Leaderboard;