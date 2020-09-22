import React from "react";

const PokeCard = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <div className="card">
      <div className="card-column">
        <p>{pokemon.name}</p>
        {pokemon.types.map((type) => (
          <p key={type.slot} className="type-btn">
            {type.type.name}
          </p>
        ))}
      </div>
      <div className="card-column">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          alt="pokemon"
        />
      </div>
    </div>
  );
};

export default PokeCard;
