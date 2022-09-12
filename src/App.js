import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Navbar from './components/pages/Navbar';
import Leaderboard from './components/pages/Leaderboard';
import Game from './components/pages/Game';


function App() {
  const getClickedCoordinates = (event) => {
    let image = document.getElementById('background');
    let x = event.nativeEvent.offsetX;
    let y = event.nativeEvent.offsetY;
    let w = image.width;
    let h = image.height;
    console.log("x: " + x);
    console.log("y: " + y);
    console.log("w: " + w);
    console.log("h: " + h);
    console.log("final x: " + (x / w));
    console.log("final y: " + (y / h));
}
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/game" element={<Game onClick={getClickedCoordinates} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
