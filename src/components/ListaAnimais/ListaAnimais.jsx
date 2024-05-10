import { useState, useEffect } from 'react';
import './ListaAnimais.css'
import Table from 'react-bootstrap/Table';
import AnimalRequests from '../../fetch/AnimalRequests';
import { FaTrash } from "react-icons/fa";


function ListaAnimais() {

  const [animais, setAnimais] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setAnimais(await AnimalRequests.ListarAnimais());
    }


    fetchData();
  }, []);

  const deletarAnimal = async (id) => {
    const confirmar = window.confirm(`Deseja deletar o animal com id ${id}?`)
    if (confirm) {
      if (await AnimalRequests.deletarAnimal(id)) {
        window.alert(`Animal deletado com sucesso`);
        window.location.reload();
      } else {
        window.alert(`Erro ao deletar o animal`);
      }
    }
  }

  return (
    <>
      <div className='cnt-tb'>
        {animais.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th style={{ backgroundColor: "#575448", color: 'white' }}>Id</th>
                <th style={{ backgroundColor: "#575448", color: 'white' }}>Nome</th>
                <th style={{ backgroundColor: "#575448", color: 'white' }}>Idade</th>
                <th style={{ backgroundColor: "#575448", color: 'white' }}>Gênero</th>
                <th style={{ backgroundColor: "#575448", color: 'white' }}>Envergadura</th>
                <th style={{ backgroundColor: "#575448", color: 'white' }}>Ação</th>
              </tr>
            </thead>
            <tbody>
              {animais.map(animal => (
                <tr key={animal.idanimal} animal={animal}>
                  <td style={{ backgroundColor: "#d8ce00" }}>{animal.idanimal}</td>
                  <td style={{ backgroundColor: "#d8ce00" }}>{animal.nomeanimal}</td>
                  <td style={{ backgroundColor: "#d8ce00" }}> {animal.idadeanimal}</td>
                  <td style={{ backgroundColor: "#d8ce00" }}>{animal.generoanimal}</td>
                  <td style={{ backgroundColor: "#d8ce00" }}>{animal.envergadura}</td>
                  <td style={{ color: "#FFFFFF", backgroundColor: "#000000" }} onClick={() => deletarAnimal(animal.idanimal)}><FaTrash />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </>
  );
}

export default ListaAnimais;