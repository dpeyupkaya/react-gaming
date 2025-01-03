import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SnakeGames from './games/snakegames/SnakeGames.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css'; // Stil dosyasını dahil ediyoruz
import { Pacman } from './games/pac-man/Pacman.jsx';
import Tetris from './games/tetris/Tetris.jsx';
import Oldgame from './games/oldgame/Oldgame.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      
      
          <Link to="/" >
            <button className="game-button">Home</button>
          </Link>
          <Link to="/snake-game" >
            <button className="game-button">Snake Game</button>
          </Link>
          {/* Burada başka oyunlar da eklenebilir */}
          <Link to="/" >
            <button className="game-button">Game 3</button>
          </Link>
          <Link to="/" >
            <button className="game-button">Game 4</button>
          </Link>
    

      <Routes>
        <Route path="/" element={<h1>Welcome to the Gaming Page!</h1>} />
        {/* <Route path="/snake-game" element={<SnakeGames />} /> */}
        {/* <Route path='/pacman' element={<Pacman />} /> */}
        {/* <Route path='/tetris' element={<Tetris />} /> */}
        <Route path='/oldgame' element={<Oldgame />} /> 
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
