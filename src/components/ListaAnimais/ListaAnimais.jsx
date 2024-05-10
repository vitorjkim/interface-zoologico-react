import { useState, useEffect } from 'react';
import './ListaAnimais.css'
import Table from 'react-bootstrap/Table';

function ListaAnimais() {

  const [animais, setAnimais] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/listar-aves');
        if (!response.ok) {
          throw new Error('Erro ao buscar servidor');
        }
        const listaAnimais = await response.json();
        setAnimais(listaAnimais);
      } catch (error) {
        console.error('Erro ao buscar animais:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Genero</th>
            <th>Envergadura</th>
          </tr>
        </thead>
        <tbody>
          {animais.length > 0 ? (
            animais.map((animal) => (
              <tr>
                <td>{animal.nomeanimal}</td>
                <td>{animal.idadeanimal}</td>
                <td>{animal.generoanimal}</td>
                <td>{animal.envergadura}</td>
              </tr>
            ))
          ) : (
          <p>Carregando... Verifique se o servidor está funcionando</p>
          )}
        </tbody>
      </Table>
    </>
  );
}

export default ListaAnimais;