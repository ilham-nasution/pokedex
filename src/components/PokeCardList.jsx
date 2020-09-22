import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "./PokeCard";

const PokeCardList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.data.results)
      .then((data) =>
        data.forEach((pokemon) => {
          fetchPokemonData(pokemon.url);
        })
      );
  }, []);

  const fetchPokemonData = (url) => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setPokemons((prevValue) => [...prevValue, data]));
  };

  return (
    <div className="card-list">
      {pokemons.map((pokemon) => (
        <PokeCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokeCardList;
