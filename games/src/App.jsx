import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SnakeGames from './games/snakegames/SnakeGames.jsx';


import { Pacman } from './games/pac-man/Pacman.jsx';
import Tetris from './games/tetris/Tetris.jsx';
import Oldgame from './games/oldgame/Oldgame.jsx';
import Home from './Home.jsx';
import Login from './components/auth/login/Login.jsx';
import Register from './components/auth/register/Register.jsx';
import { MainLayout } from './layout/MainLayout.jsx';

function App() {
  return (
   
       <Routes>
       <Route path='/register' element={<Register /> } />
      
       
    

     
       <Route path="/" element={<Home />} /> 
       <Route path="/snake-game" element={<SnakeGames />} /> 
       <Route path='/pacman' element={<Pacman />} /> 
        <Route path='/tetris' element={<Tetris />} /> 
        <Route path='/oldgame' element={<Oldgame />} /> 
        <Route path='/login' element={<Login />} />
      </Routes>
      

     
   
  );
}

export default App;
