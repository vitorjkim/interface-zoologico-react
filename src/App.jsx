import './App.css'
import Animais from './pages/Animais/Animais';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/animais' Component={Animais} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App