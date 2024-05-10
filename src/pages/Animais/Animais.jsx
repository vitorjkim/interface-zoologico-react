import React, { useEffect, useState } from 'react';
import CardAnimal from '../../components/CardAnimal/CardAnimal';
import Navegacao from '../../components/Navegacao/Navegacao';
import './Animais.css'; // Importe o arquivo CSS aqui

function Animais() {
    const [animais, setAnimais] = useState(null);

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
            <Navegacao />
     
            <div className='ctn-animais'>
                {animais ? (
                    // Renderize o componente CardAnimal para cada item da lista
                    animais.map(animal => (
                        <CardAnimal key={animal.idanimal} animal={animal} />
                    ))
                ) : (
                    <p>Carregando... verifique se o servidor está funcionando</p>
                )}
            </div>
        </>
    );
}

export default Animais;