import React, { useState, useEffect } from "react";
import { getScores } from "../../firebase/config";

const Leaderboard = () => {
    const [scores, setScores] = useState([]);
    useEffect(() => {
        (async () => {
            const data = await getScores();
            setScores(data);
            data.map((doc, index) => {
                console.log(doc.data().date.toDate().toDateString().slice(4));
                return 5;
            })
        })();
    }, [])

/*
    {scores.map((score, index) => {
        return(
            <div key={index}>
                <div>{index}</div>
                <div>{score.data().name}</div>
                <div>{score.data().time}</div>
                <div>{score.data().date}</div>
            </div>
        )
    })}
    */
    return (
        <div>
            <h1>Leaderboard Page</h1>
            {scores.map((score, index) => {
                return(
                <div key={index}>
                <div>{index}</div>
                <div>{score.data().name}</div>
                <div>{score.data().time}</div>
                <div>{score.data().date.toDate().toDateString().slice(4)}</div>
                </div>
                )
            })}
        </div>
    );
};

export default Leaderboard;