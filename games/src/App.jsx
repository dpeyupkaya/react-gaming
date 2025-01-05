import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SnakeGames from './games/snakegames/SnakeGames.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';

import { Pacman } from './games/pac-man/Pacman.jsx';
import Tetris from './games/tetris/Tetris.jsx';
import Oldgame from './games/oldgame/Oldgame.jsx';
import Home from './Home.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      
      
       
    

      <Routes>
        {/* <Route path="/" element={<h1>Welcome to the Gaming Page!</h1>} /> */}
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
