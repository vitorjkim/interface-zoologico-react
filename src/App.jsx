import './App.css'
import Animais from './pages/Animais/Animais';
import Depoimentos from './pages/Depoimentos/Depoimentos';
import Fotos from './pages/Fotos/Fotos';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/animais' Component={Animais} />
          <Route exact path='/fotos' Component={Fotos} />
          <Route exact path='/depoimentos' Component={Depoimentos} />
          <Route exact path='/login' Component={Login} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App