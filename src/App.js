import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Navbar from './components/pages/Navbar';
import Leaderboard from './components/pages/Leaderboard';
import Game from './components/pages/Game';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
