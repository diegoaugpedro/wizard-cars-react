import React from 'react';

function Color(props) {
    return (
        <div className="Color">
            <label>Selecione a cor</label>
            <div>
                <label>Vermelho</label>
                <label>Azul</label>
                <label>Preto</label>
                <label>Verde</label>
                <label>Cinza</label>
            </div >
            <button type="submit" className="next">
                Next
            </button>
        </div >
    );
}

export default Color