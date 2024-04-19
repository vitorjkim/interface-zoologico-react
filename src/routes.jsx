import './App.css'
import ImgCarrossel from './components/ImgCarrossel/ImgCarrossel';
import Animais from './pages/Animais/Animais';
import Fotos from './pages/Fotos/Fotos';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function AppRoutes() {
    return (
        <>
        <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/animais' Component={Animais} />
          <Route exact path='/fotos' Component={Fotos} />
          <Route exact path='/fotos' Component={ImgCarrossel} />
        </Routes>
      </BrowserRouter>
        </>
    );
}

export default AppRoutes