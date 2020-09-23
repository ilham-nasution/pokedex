import React from "react";
import PokeCard from "./PokeCard";

const PokeCardList = ({ pokemons, handleGetDetail }) => {
  return (
    <div className="card-list">
      {pokemons.map((pokemon) => (
        <PokeCard
          key={pokemon.id}
          pokemon={pokemon}
          handleGetDetail={handleGetDetail}
        />
      ))}
    </div>
  );
};

export default PokeCardList;
