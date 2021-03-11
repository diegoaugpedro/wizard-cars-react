import React from 'react';

function Optional(props) {
    return (
        <div className="Optional">
            <label>Selecione o opcional</label>
            <div>
                <label>Central Multimídia</label>
                <label>Ar-Condicionado</label>
                <label>Vidro Elétrico</label>
                <label>Drive Assist</label>
                <label>Câmera de Ré</label>
                <label>Sensor de Estacionamento</label>
            </div >
            <button type="submit" className="next">
                Next
            </button>
        </div >
    );
}

export default Optional