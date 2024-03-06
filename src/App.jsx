import './App.css'
import Navegacao from './components/Navegacao/Navegacao'
import Atracao from './components/Atracao/Atracao'

function App() {

  const components = [];
  for(let i = 0; i <= 2; i++) {
    components.push(<Atracao key={i} />)
  }

  return (
    <>
      <Navegacao></Navegacao>
      <div className="ctn-atracoes">
        {components}
      </div>
    </>
  )
}

export default App
