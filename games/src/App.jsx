import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SnakeGames from './games/snakegames/SnakeGames.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css'; // Stil dosyasını dahil ediyoruz

function App() {
  return (
    <Router>
      <Navbar />
      
      <div className="main-content">
        <div className="button-container">
          <Link to="/" className="game-link">
            <button className="game-button">Home</button>
          </Link>
          <Link to="/snake-game" className="game-link">
            <button className="game-button">Snake Game</button>
          </Link>
          {/* Burada başka oyunlar da eklenebilir */}
          <Link to="/" className="game-link">
            <button className="game-button">Game 3</button>
          </Link>
          <Link to="/" className="game-link">
            <button className="game-button">Game 4</button>
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<h1>Welcome to the Gaming Page!</h1>} />
        <Route path="/snake-game" element={<SnakeGames />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
