import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Minecraft from './pages/Minecraft'
import ArtModel from './pages/ArtModel';
import Misc from './pages/Misc'
import Game from './pages/Game'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/minecraft" element={<Minecraft/>}/>
        <Route path="/art" element={<ArtModel/>}/>
        <Route path="/model" element={<ArtModel/>}/>
        <Route path="/misc" element={<Misc/>}/>
        <Route path="/other" element={<Misc/>}/>
        <Route path="/game" element={<Game/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
