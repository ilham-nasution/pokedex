import React from "react";

const PokeDetail = ({ pokemon, setShowModal }) => {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-btn" onClick={() => setShowModal(false)}>
          <i class="fas fa-long-arrow-alt-left"></i> back
        </button>
        <h1>{capitalize(pokemon.name)}</h1>
        {pokemon.types.map((type) => (
          <p key={type.slot} className="type-btn">
            {type.type.name}
          </p>
        ))}
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          alt="pokemon"
        />
      </div>
      <div className="modal-content custom">
        <div className="tabs">
          <p className="active">stats</p>
          <p>moves</p>
        </div>
      </div>
    </div>
  );
};

export default PokeDetail;
