import './FormAnimal.css';
import React, { useState } from 'react';


function FormAnimal() {
    const urlServer = 'http://localhost:3000/cadastro';

    // Defina o estado para armazenar os valores dos campos de entrada
    const [formData, setFormData] = useState({
        nomeAnimal: '',
        generoAnimal: '',
        idadeAnimal: ''
    });

    // Função para lidar com a mudança nos campos de entrada
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita o recarregamento da página
        // Envia os dados do formulário para o servidor
        //console.log(JSON.stringify(formData));
        fetch(urlServer, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao enviar formulário');
                }
                // Trate a resposta do servidor conforme necessário
                console.log('Formulário enviado com sucesso');
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    };


    return (
        <div className='tudo'>
            <div className='titulo'>
                <h1>CADASTRO DE AVE</h1>
            </div>

            <form className='forms' onSubmit={handleSubmit}>
                <label>
                    <input className='input'
                        type="text"
                        name="nomeAnimal"
                        value={formData.nomeAnimal}
                        onChange={handleChange}
                        placeholder='Nome Animal'
                    />
                </label>
                <label>
                   
                    <input className='input'
                        type="number"
                        name="idadeAnimal"
                        value={formData.idadeAnimal}
                        onChange={handleChange}
                        placeholder='Idade Animal'
                    />
                </label>
                <label>
                    
                    <select className='input'
                        name="generoAnimal"
                        value={formData.generoAnimal}
                        onChange={handleChange}
                        
                    >
                        <option value="macho">Macho</option>
                        <option value="femea">Fêmea</option>
                        <option value="desconhecido">Desconhecido</option>
                    </select>
                </label>
                <button className='bottao' type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default FormAnimal;