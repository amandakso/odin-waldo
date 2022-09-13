import './App.css';
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Navbar from './components/pages/Navbar';
import Leaderboard from './components/pages/Leaderboard';
import Game from './components/pages/Game';


function App() {
  const [offsetX, setOffsetX] = useState();
  const [offsetY, setOffsetY] = useState();

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
    let dropdown = document.getElementById('pokemon');
    dropdown.style.display = "none";
    let pokemon = event.target.value;
    console.log("x: " + offsetX);
    console.log("y: " + offsetY);
    switch(pokemon) {
      case "pikachu":
        console.log("pikachu");
        break;
      case "munchlax":
        console.log("munchlax");
        break;
      case "espeon":
        console.log("espeon");
        break;
      default:
        console.log("no pokemon selected");
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/game" element={<Game onClick={getClickedCoordinates} onCheck={checkAnswer} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
