import { Routes, Route, useLocation } from 'react-router-dom';
import SnakeGames from './games/snakegames/SnakeGames.jsx';

import Tetris from './games/tetris/Tetris.jsx';
import Oldgame from './games/oldgame/Oldgame.jsx';
import Home from './Home.jsx';

import MainLayout from './layout/MainLayout.jsx';
import { Contact } from './components/contact/Contact.jsx';
import Minesweeper from './games/minesweeper/Minesweeper.jsx';

function App() {
  const location = useLocation();


  const hideNavbarFooterPaths = [ "/contact"  ];

 
  const showLayout = !hideNavbarFooterPaths.includes(location.pathname);

  return (
    <>
      {showLayout ? (
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/snake-game" element={<SnakeGames />} />
            <Route path="/minesweeper" element={<Minesweeper />} />
            <Route path="/tetris" element={<Tetris />} />
            <Route path="/oldgame" element={<Oldgame />} />
            
           
          </Routes>
        </MainLayout>
      ) : (
        <Routes>
        
          <Route path='/contact' element={<Contact />} />
          
        </Routes>
      )}
    </>
  );
}

export default App;