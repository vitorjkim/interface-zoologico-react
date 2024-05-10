import React from 'react';
import './Table.css'

function Table({ animal }) {
    return (
        <tr >
            <td>{animal.nomeanimal}</td>
            <td>{animal.generoanimal}</td>
            <td>{animal.tipoanimal}</td>
            <td>{animal.envergadura}</td>
        </tr>
    );
}

export default Table;