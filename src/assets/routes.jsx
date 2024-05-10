import Depoimentos from '../pages/Depoimentos/Depoimentos';
import ImgCarrossel from '../components/ImgCarrossel/ImgCarrossel';
import Animais from '../pages/Animais/Animais';
import Fotos from '../pages/Fotos/Fotos';
import Home from '../pages/Home/Home';
import { BrowserRouter as Roteador, Routes, Route } from 'react-router-dom';

function AppRoutes() {
    return (
        <>
        <Roteador>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/animais' Component={Animais} />
          <Route exact path='/fotos' Component={Fotos} />
          <Route exact path='/fotos' Component={ImgCarrossel} />
          <Route exact path='/depoimentos' Component={Depoimentos} />
        </Routes>
      </Roteador>
        </>
    );
}

export default AppRoutes