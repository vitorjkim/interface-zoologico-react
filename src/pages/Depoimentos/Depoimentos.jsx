import React, { useEffect, useState } from 'react';
import Navegacao from '../../components/Navegacao/Navegacao';
import Tabela from '../../components/Table/Table';
import './Depoimentos.css';

function Depoimentos() {
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
                console.error('Erro: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Navegacao />
            <div className='cnt-tb'>
                {animais.length > 0 ? (
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" >Nome</th>
                                <th scope="col" >Gênero</th>
                                <th scope="col" >Espécie</th>
                                <th scope="col" >Envergadura</th>
                            </tr>
                        </thead>
                        <tbody>
                            {animais.map(animal => (
                                <Tabela key={animal.idanimal} animal={animal} />
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

export default Depoimentos;