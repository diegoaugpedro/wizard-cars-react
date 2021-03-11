import React from 'react';

function Model(props) {
  return (
    <div className="Model">

      <label>Selecione o modelo</label>
      <div>
        <label>
          Gol
        </label>
        <label>
          Voyage
        </label>
        <label>
          Saveiro
        </label>
        <label>
          Jetta
        </label>
        <label>
          Polo
        </label>
        <label>
          Nivus
        </label>
      </div>
      <button type="submit" className="next">
             Next
      </button>
    </div>
  );
}

export default Model