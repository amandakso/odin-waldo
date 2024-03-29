import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getDatabaseAnswers } from './firebase/config';
import Home from './components/pages/Home';
import Navbar from './components/pages/Navbar';
import Leaderboard from './components/pages/Leaderboard';
import Game from './components/pages/Game';


function App() {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [player, setPlayer] = useState("Pokemon Trainer");
  const [pikachuFound, setPikachuFound] = useState(false);
  const [munchlaxFound, setMunchlaxFound] = useState(false);
  const [espeonFound, setEspeonFound] = useState(false);
  const [gameOver, setGameOver]= useState(false);

  const changeName = (e) => {
    let playerName = e.target.value;
    if (playerName.length > 1) {
      if (playerName.length > 25) {
        setPlayer(playerName.slice(0,25) + "...");
      } else {
        setPlayer(playerName);
      }
    } else {
      setPlayer("Pokemon Trainer");
    }
  }

  const setUpGame = () => {
    setPikachuFound(false);
    setMunchlaxFound(false);
    setEspeonFound(false);
    setGameOver(false);
    console.log('game set up/ reset!');
  }

  // end game
  useEffect(() => {
    if (pikachuFound && munchlaxFound && espeonFound) {
      setGameOver(true);
    }
  },[pikachuFound, munchlaxFound, espeonFound])

  const getClickedCoordinates = (event) => {
    let image = document.getElementById('background');
    let dropdown = document.getElementById('pokemon');
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
    dropdown.value = "none";
    let x = event.nativeEvent.offsetX;
    let y = event.nativeEvent.offsetY;
    let mouseX = event.pageX;
    let mouseY = event.pageY;
    let w = image.width;
    let h = image.height;
    let xCoord = x / w;
    let yCoord = y / h;
    dropdown.style.top = mouseY + "px";
    dropdown.style.left = mouseX + "px";
    setOffsetX(xCoord);
    setOffsetY(yCoord);
  }

  const checkAnswer = (event) => {
    const getDistance = (x1, y1, x2, y2) => {
      let d = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) * 1.0);
      return d;
    };
    let dropdown = document.getElementById('pokemon');
    dropdown.style.display = "none";
    let pokemon = event.target.value;
    console.log("x: " + offsetX);
    console.log("y: " + offsetY);
    console.log(getDatabaseAnswers());
    let message = document.getElementById('message');
    switch(pokemon) {
      case "pikachu":
        (async () => {
          const coordinates = await getDatabaseAnswers("pikachu");
          let x = coordinates.x;
          let y = coordinates.y;
          let d = coordinates.d;
          let distance = getDistance(x, y, offsetX, offsetY);
          if (distance <= d) {
            setPikachuFound(true);
            message.innerText = "You caught Pikachu! Find the remaining pokemon!"
            console.log("found pikachu");
          } else {
            message.innerText = "That's not Pikachu, try again!"
            console.log("have not found pikachu");
          }
        })();
        console.log("pikachu");
        break;
      case "munchlax":
        (async () => {
          const coordinates = await getDatabaseAnswers("munchlax");
          let x = coordinates.x;
          let y = coordinates.y;
          let d = coordinates.d;
          let distance = getDistance(x, y, offsetX, offsetY);
          if (distance <= d) {
            setMunchlaxFound(true);
            message.innerText = "You caught Munchlax! Find the remaining pokemon!"
            console.log("found munchlax");
          } else {
            message.innerText = "That's not Munchlax, try again!"
            console.log("have not found munchlax");
          }
          
        })();
        console.log("munchlax");
        break;
      case "espeon":
        (async () => {
          const coordinates = await getDatabaseAnswers("espeon");
          let x = coordinates.x;
          let y = coordinates.y;
          let d = coordinates.d;
          let distance = getDistance(x, y, offsetX, offsetY);
          if (distance <= d) {
            setEspeonFound(true);
            message.innerText = "You caught Espeon! Find the remaining pokemon!"
            console.log("found espeon");
          } else {
            message.innerText = "That's not Espeon, try again!"
            console.log("have not found espeon");
          }
        })();
        console.log("espeon");
        break;
      default:
        console.log("no pokemon selected");
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar setUp={setUpGame}/>
        <Routes>
          <Route path="/" element={<Home player={player} onChange={changeName} setUp={setUpGame}/>} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/game" element={<Game player={player} gameOver={gameOver} pikachu={pikachuFound} munchlax={munchlaxFound} espeon={espeonFound} onClick={getClickedCoordinates} onCheck={checkAnswer} />} />
          <Route path="*" element={<Home player={player} onChange={changeName} setUp={setUpGame}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
